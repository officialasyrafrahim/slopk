import { useCallback, useEffect, useState } from '@lynx-js/react';
import { useNavigate } from 'react-router';
import mrbeast from '../../assets/mrbeast.png';
import logo from '../../assets/logo.png';
import tiktok from '../../assets/tiktok.png';

export function Search() {
  const nav = useNavigate();

  return (
    <view className="flex flex-col h-[100vh]">
      <view className="flex flex-col gap-2 items-center p-6">
        <view className="flex flex-1 justify-center">
          <image src={logo} mode="aspectFill" className="h-[100px] w-[400px]" />
        </view>
        <view>
          <text className="font-bold text-2xl text-[#023047] italic">
            Kill All Slop, Elevate Creativty.
          </text>
        </view>
      </view>
      <view className="flex gap-4 p-6">
        <input
          className="bg-white text-2xl font-semibold p-4 flex-1 shadow-2xl border-slate-400 border-2 rounded-xl"
          placeholder="Check Accouunt"
        />
        <text className=" p-4 text-2xl bg-[#c75472] rounded-2xl shadow-2xl">
          🔎
        </text>
      </view>
      <scroll-view
        className="bg-[#023047] p-6 rounded-t-3xl flex flex-col g"
        scroll-orientation="vertical"
      >
        <view className="flex flex-col gap-4 px-4">
          <view
            bindtap={() => nav('/trash')}
            className="bg-white rounded-lg py-4 px-4 flex justify-between items-center gap-1 shadow-2xl"
          >
            <view className="flex gap-4 items-center">
              <image
                src={tiktok}
                mode="aspectFill"
                className="w-[50px] h-[50px] bg-black rounded-full"
              />
              <view className="flex flex-col">
                <text className="text-2xl font-bold">AITA Bot</text>
                <text className="text-1xl text-slate-600">
                  @amitheassholestories
                </text>
              </view>
            </view>
            <view className="bg-red-600 p-4 rounded-xl w-[75px] flex justify-center">
              <text className="text-2xl font-bold text-white">999</text>
            </view>
          </view>
          <view
            bindtap={() => nav('/trash')}
            className="bg-white rounded-lg py-4 px-4 flex justify-between items-center gap-1 shadow-2xl"
          >
            <view className="flex gap-4 items-center">
              <image
                src={tiktok}
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
            <view
              bindtap={() => nav('/trash')}
              className="bg-yellow-600 p-4 rounded-xl w-[75px] flex justify-center"
            >
              <text className="text-2xl font-bold text-white">698</text>
            </view>
          </view>
          <view className="bg-white rounded-lg py-4 px-4 flex justify-between items-center gap-1 shadow-2xl">
            <view className="flex gap-4 items-center">
              <image
                src={tiktok}
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
          <view className="bg-white rounded-lg py-4 px-4 flex justify-between items-center gap-1 shadow-2xl">
            <view className="flex gap-4 items-center">
              <image
                src={tiktok}
                mode="aspectFill"
                className="w-[50px] h-[50px] bg-black rounded-full"
              />
              <view className="flex flex-col">
                <text className="text-2xl font-bold">Reddit Stories 2</text>
                <text className="text-1xl text-slate-600">
                  @user18264317266
                </text>
              </view>
            </view>
            <view className="bg-red-600 p-4 rounded-xl w-[75px] flex justify-center">
              <text className="text-2xl font-bold text-white">928</text>
            </view>
          </view>
          <view className="bg-white rounded-lg py-4 px-4 flex justify-between items-center gap-1 shadow-2xl">
            <view className="flex gap-4 items-center">
              <image
                src={tiktok}
                mode="aspectFill"
                className="w-[50px] h-[50px] bg-black rounded-full"
              />
              <view className="flex flex-col">
                <text className="text-2xl font-bold">Reddit Stories 3</text>
                <text className="text-1xl text-slate-600">
                  @user18264317265
                </text>
              </view>
            </view>
            <view className="bg-yellow-600 p-4 rounded-xl w-[75px] flex justify-center">
              <text className="text-2xl font-bold text-white">655</text>
            </view>
          </view>
          <view className="bg-white rounded-lg py-4 px-4 flex justify-between items-center gap-1 shadow-2xl">
            <view className="flex gap-4 items-center">
              <image
                src={tiktok}
                mode="aspectFill"
                className="w-[50px] h-[50px] bg-black rounded-full"
              />
              <view className="flex flex-col">
                <text className="text-2xl font-bold">Reddit Stories 4</text>
                <text className="text-1xl text-slate-600">
                  @user18264317264
                </text>
              </view>
            </view>
            <view className="bg-yellow-600 p-4 rounded-xl w-[75px] flex justify-center">
              <text className="text-2xl font-bold text-white">777</text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  );
}
