import streamlit as st
from streamlit_clickable_images import clickable_images
import pandas as pd
#from pytube import YouTube
import os
import requests
from time import sleep
from pytubefix import YouTube
from pytubefix.cli import on_progress


upload_endpoint = "https://api.assemblyai.com/v2/upload"
transcript_endpoint = "https://api.assemblyai.com/v2/transcript"

headers = {
    "authorization": "69f710f5546345ee80e7a88e89220445",
    "content-type": "application/json"
}

#@st.experimental_memo
@st.cache_data
def save_audio(url):
    yt = YouTube(url, on_progress_callback=on_progress)
    print(yt.title)
    try:
        ys = yt.streams.get_highest_resolution()
        out_file=ys.download()

    except:
        return None, None, None
    base, ext = os.path.splitext(out_file)
    file_name = base + '.mp3'
    os.rename(out_file, file_name)
    print(yt.title + " has been successfully downloaded.")
    print(file_name)
    return yt.title, file_name, yt.thumbnail_url

#@st.experimental_memo
@st.cache_data
def upload_to_AssemblyAI(save_location):
    CHUNK_SIZE = 5242880
    print(save_location)

    def read_file(filename):
        with open(filename, 'rb') as _file:
            while True:
                print("chunk uploaded")
                data = _file.read(CHUNK_SIZE)
                if not data:
                    break
                yield data

    upload_response = requests.post(
        upload_endpoint,
        headers=headers, data=read_file(save_location)
    )
    print(upload_response.json())

    if "error" in upload_response.json():
        return None, upload_response.json()["error"]

    audio_url = upload_response.json()['upload_url']
    print('Uploaded to', audio_url)

    return audio_url, None

#@st.experimental_memo
@st.cache_data
def start_analysis(audio_url):
    print(audio_url)

    ## Start transcription job of audio file
    data = {
        'audio_url': audio_url,
        'iab_categories': True,
        'content_safety': True,
        "summarization": True,
        "summary_model": "informative",
        "summary_type": "bullets"
    }

    transcript_response = requests.post(transcript_endpoint, json=data, headers=headers)
    print(transcript_response.json())

    if 'error' in transcript_response.json():
        return None, transcript_response.json()['error']

    transcript_id = transcript_response.json()['id']
    polling_endpoint = transcript_endpoint + "/" + transcript_id

    print("Transcribing at", polling_endpoint)
    return polling_endpoint, None

#@st.experimental_memo
@st.cache_data
def get_analysis_results(polling_endpoint):

    status = 'submitted'

    while True:
        print(status)
        polling_response = requests.get(polling_endpoint, headers=headers)
        status = polling_response.json()['status']
        # st.write(polling_response.json())
        # st.write(status)

        if status == 'submitted' or status == 'processing' or status == 'queued':
            print('not ready yet')
            sleep(10)

        elif status == 'completed':
            print('creating transcript')

            return polling_response

            break
        else:
            print('error')
            return False
            break

st.title("SlopK Finder")
st.markdown("Stop the slop one account at a time!")
st.markdown("1. a summary of the video,") 
st.markdown("2. whether there are any sensitive topics discussed in the video,") 
st.markdown("3. the topics that are discussed in the video.")

file = st.file_uploader("Upload a file that includes the links (.txt)")

if file is not None:
    dataframe = pd.read_csv(file, header=None)
    dataframe.columns = ['urls']
    urls_list = dataframe['urls'].tolist()

    titles = []
    locations = []
    thumbnails = []

    for video_url in urls_list:
        # download audio
        video_title, save_location, video_thumbnail = save_audio(video_url)
        if video_title:
            titles.append(video_title)
            locations.append(save_location)
            thumbnails.append(video_thumbnail)

    selected_video = clickable_images(thumbnails,
    titles = titles,
    div_style={"height": "500px", "display": "flex", "justify-content": "center", "flex-wrap": "wrap", "overflow-y":"auto"},
    img_style={"margin": "15px", "height": "500px"}
    )

    st.markdown(f"Content #{selected_video} clicked" if selected_video > -1 else "No image clicked")

    if selected_video > -1:
        video_url = urls_list[selected_video]
        video_title = titles[selected_video]
        save_location = locations[selected_video]

        st.header('Video Title')
        st.write(video_title)
        #st.audio(save_location)

        # upload mp3 file to AssemblyAI
        audio_url, error = upload_to_AssemblyAI(save_location)
        
        if error:
            st.write(error)
        else:
            # start analysis of the file
            polling_endpoint, error = start_analysis(audio_url)

            if error:
                st.write(error)
            else:
                # receive the results
                results = get_analysis_results(polling_endpoint)

                summary = results.json()['summary']
                topics = results.json()['iab_categories_result']['summary']
                sensitive_topics = results.json()['content_safety_labels']['summary']

                st.header("Summary of this video")
                st.write(summary)

                st.header("Sensitive content")
                if sensitive_topics != {}:
                    st.write('Mention of the following sensitive topics detected.')
                    moderation_df = pd.DataFrame(sensitive_topics.items())
                    moderation_df.columns = ['topic','confidence']
                    st.dataframe(moderation_df, use_container_width=True)

                else:
                    st.write('No sensitive content detected.')

                st.header("Topics discussed")
                topics_df = pd.DataFrame(topics.items())
                topics_df.columns = ['topic','confidence']
                topics_df["topic"] = topics_df["topic"].str.split(">")
                expanded_topics = topics_df.topic.apply(pd.Series).add_prefix('topic_level_')
                topics_df = topics_df.join(expanded_topics).drop('topic', axis=1).sort_values(['confidence'], ascending=False).fillna('')

                st.dataframe(topics_df)