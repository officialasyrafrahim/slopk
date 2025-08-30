import { useCallback, useEffect, useState } from '@lynx-js/react';
import { useNavigate } from 'react-router';
import tiktok from "../../assets/tiktok.png"

import './Trash.css';

export function DashboardTrash() {
  const nav = useNavigate();

  return (
    <view className="flex flex-col h-[100vh]">
      <view className="p-6 flex flex-col gap-6">
        <view className="flex flex-row gap-4 items-center">
          <image src={tiktok} mode="aspectFill" className="w-[75px] h-[75px] rounded-full" />
          <view className="flex flex-col">
            <text className="text-4xl font-bold">Slop Maker</text>
            <text className="text-2xl text-slate-600">@slopmaker8866782</text>
          </view>
        </view>
        <view className="flex flex-1 justify-center">
          <view className="flex flex-col items-center bg-yellow-600 py-4 px-8 rounded-xl">
            <text className="text-2xl font-semibold text-white">
              Account Score
            </text>
            <text className="text-3xl font-semibold text-white">698</text>
          </view>
        </view>
        <view className="grid gap-4">
          <view className="item">
            <text className="text-2xl font-bold">Followers</text>
            <text className="text-2xl text-slate-600">20K</text>
          </view>
          <view className="item">
            <text className="text-2xl font-bold">Following</text>
            <text className="text-2xl text-slate-600">0</text>
          </view>
          <view className="item">
            <text className="text-2xl font-bold">Likes</text>
            <text className="text-2xl text-slate-600">400K</text>
          </view>
          <view className="item">
            <text className="text-2xl font-bold">Videos</text>
            <text className="text-2xl text-slate-600">1028</text>
          </view>
        </view>
      </view>
      <view className="info p-6 mb-24 rounded-t-3xl">
        <text className="text-white text-4xl font-bold">Metrics</text>

        <scroll-view
          className="flex flex-col mt-6"
          scroll-orientation="vertical"
        >
          <view className="bg-white rounded-lg py-8 px-8 flex flex-col items-center gap-1 my-4">
            <text className="text-yellow-600 text-4xl font-semibold">+1000</text>
            <text className="text-xl font-semibold">
              Followers in the past 30 days
            </text>
          </view>
          <view className="bg-white rounded-lg py-8 px-8 flex flex-col items-center gap-1 my-4">
            <text className="text-lime-600 text-4xl font-semibold">100K</text>
            <text className="text-xl font-semibold">
              Views in the past 30 days
            </text>
          </view>
          <view className="bg-white rounded-lg py-8 px-8 flex flex-col items-center gap-1 my-4">
            <text className="text-red-600 text-4xl font-semibold">
              Mostly Negative
            </text>
            <text className="text-xl font-semibold">
              Comments in the past 30 days
            </text>
          </view>
          <view className="bg-white rounded-lg py-8 px-8 flex flex-col items-center gap-1 my-4">
            <text className="text-yellow-600 text-4xl font-semibold">
              Mixed
            </text>
            <text className="text-xl font-semibold">
              Comments in the channel overall
            </text>
          </view>
        </scroll-view>
      </view>
    </view>
  );
}
