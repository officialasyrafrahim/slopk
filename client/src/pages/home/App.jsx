import { useEffect } from '@lynx-js/react';
import { useNavigate } from 'react-router';

import logo from '../../assets/logo.png';
import mrbeast from '../../assets/mrbeast.png';

import './Home.css';

export function App() {
  const nav = useNavigate();

  useEffect(() => {}, []);

  lynx
    .createSelectorQuery()
    .select(`#scroll`)
    .invoke({
      method: 'autoScroll',
      params: {
        rate: 120, // Scrolling speed, distance per second (unit: px/sec)
        start: true, // Start or stop auto-scrolling
      },
    })
    .exec();

  return (
    <scroll-view className="flex flex-col h-full bg-[linear-gradient(to_bottom,#023047_25%,white_25%)]" scroll-orientation="vertical">
      <view className="flex flex-col gap-2 bg-[#023047] items-center">
        <view className="flex flex-1 justify-center">
          <image src={logo} mode="aspectFill" className="h-[100px] w-[400px]" />
        </view>
        <view>
          <text className="font-bold text-2xl text-white italic">
            Kill All Slop, Elevate Creativty.
          </text>
        </view>
      </view>
      <view className="flex flex-col bg-[#023047] gap-10 p-6 rounded-b-3xl justify-center pt-20">
        {/* <view className="flex gap-4">
          <input
            className="bg-white text-2xl font-semibold p-4 flex-1 shadow-2xl"
            placeholder="Check Accouunt"
          />
          <text className=" p-4 text-2xl bg-[#c75472] rounded-2xl shadow-2xl">
            🔎
          </text>
        </view> */}

        <view className="flex flex-col gap-1">
          <text className="text-[#c75472] font-bold text-4xl">
            Slops Flagged
          </text>
          <text className="text-slate-400 font-semibold text-2xl">
            Slops indentified the past week. 🤖🗑️
          </text>
        </view>

        <view className="flex flex-col gap-4 px-4">
          <view className="bg-white rounded-lg py-4 px-4 flex justify-between items-center gap-1 shadow-2xl">
            <view className="flex gap-4 items-center">
              <image
                src={mrbeast}
                mode="aspectFill"
                className="w-[50px] h-[50px] bg-black rounded-full"
              />
              <view className="flex flex-col">
                <text className="text-2xl font-bold">Mr Beast</text>
                <text className="text-1xl text-slate-600">@mrbeast</text>
              </view>
            </view>
            <view className="bg-red-600 p-4 rounded-xl w-[75px] flex justify-center">
              <text className="text-2xl font-bold text-white">999</text>
            </view>
          </view>
          <view className="bg-white rounded-lg py-4 px-4 flex justify-between items-center gap-1 shadow-2xl">
            <view className="flex gap-4 items-center">
              <image
                src={mrbeast}
                mode="aspectFill"
                className="w-[50px] h-[50px] bg-black rounded-full"
              />
              <view className="flex flex-col">
                <text className="text-2xl font-bold">Slop Maker</text>
                <text className="text-1xl text-slate-600">
                  @slopmaker8866782
                </text>
              </view>
            </view>
            <view className="bg-yellow-600 p-4 rounded-xl w-[75px] flex justify-center">
              <text className="text-2xl font-bold text-white">600</text>
            </view>
          </view>
          <view className="bg-white rounded-lg py-4 px-4 flex justify-between items-center gap-1 shadow-2xl">
            <view className="flex gap-4 items-center">
              <image
                src={mrbeast}
                mode="aspectFill"
                className="w-[50px] h-[50px] bg-black rounded-full"
              />
              <view className="flex flex-col">
                <text className="text-2xl font-bold">Reddit Stories</text>
                <text className="text-1xl text-slate-600">
                  @user18264317263
                </text>
              </view>
            </view>
            <view className="bg-red-600 p-4 rounded-xl w-[75px] flex justify-center">
              <text className="text-2xl font-bold text-white">877</text>
            </view>
          </view>
        </view>
        <view className="flex flex-1 justify-center mb-2">
          <text className="text-white text-2xl font-semibold p-4 rounded-3xl bg-[#c75472] shadow-2xl">
            View more slop
          </text>
        </view>
      </view>
      <view className="flex flex-col mb-24 p-6 mt-10 bg-white">
        <view className="flex flex-col">
          <text className="text-4xl font-bold text-[#023047]">
            Elevate Your FYP
          </text>
          <text className="text-2xl font-semibold text-slate-600">
            Explore these innovative creators!
          </text>
        </view>
        <scroll-view
          scroll-orientation="horizontal"
          className="flex flex-row py-10"
          id="scroll"
        >
          <view
            bindtap={() => nav('/dashboard')}
            className="p-6 bg-[#023047] flex flex-col rounded-xl items-center justify-center w-[175px] h-[200px] mx-2"
          >
            <image
              src={mrbeast}
              mode="aspectFill"
              className="w-[75px] h-[75px] bg-black rounded-full mb-1"
            />
            <text className="text-2xl text-white font-bold">Mr Beast</text>
            <text className="text-xl text-slate-400 font-bold">@mrbeast</text>
          </view>
          <view
            bindtap={() => nav('/dashboard')}
            className="p-6 bg-[#023047] flex flex-col rounded-xl items-center justify-center w-[175px] h-[200px] mx-2"
          >
            <image
              src={mrbeast}
              mode="aspectFill"
              className="w-[75px] h-[75px] bg-black rounded-full mb-1"
            />
            <text className="text-2xl text-white font-bold">Mr Beast</text>
            <text className="text-xl text-slate-400 font-bold">@mrbeast</text>
          </view>
          <view
            bindtap={() => nav('/dashboard')}
            className="p-6 bg-[#023047] flex flex-col rounded-xl items-center justify-center w-[175px] h-[200px] mx-2"
          >
            <image
              src={mrbeast}
              mode="aspectFill"
              className="w-[75px] h-[75px] bg-black rounded-full mb-1"
            />
            <text className="text-2xl text-white font-bold">Mr Beast</text>
            <text className="text-xl text-slate-400 font-bold">@mrbeast</text>
          </view>
        </scroll-view>
      </view>
    </scroll-view>
  );
}
