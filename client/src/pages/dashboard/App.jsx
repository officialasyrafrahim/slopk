import { useCallback, useEffect, useState } from '@lynx-js/react';
import { useNavigate } from 'react-router';

import './Dashboard.css';

export function Dashboard() {
  const nav = useNavigate();

  const [alterLogo, setAlterLogo] = useState(false);

  return (
    <view>
      <view className="p-6 flex flex-col gap-6">
        <view className="flex flex-row gap-4 items-center">
          <view className="w-[100px] h-[100px] bg-black rounded-full" />
          <view className="flex flex-col gap-1">
            <text className="text-5xl font-semibold">Mr Beast</text>
            <text className="text-3xl text-slate-600">@mrbeast</text>
          </view>
        </view>
        <view className="flex flex-1 justify-center">
          <view className="flex flex-col items-center bg-lime-600 py-4 px-8 rounded-lg">
            <text className="text-2xl font-semibold text-white">Account Score</text>
            <text className="text-4xl font-semibold text-white">987</text>
          </view>
        </view>
        <view className="grid gap-4">
          <view className="item">
            <text className="text-2xl font-semibold">Followers</text>
            <text className="text-2xl">119M</text>
          </view>
          <view className="item">
            <text className="text-2xl font-semibold">Following</text>
            <text className="text-2xl">340</text>
          </view>
          <view className="item">
            <text className="text-2xl font-semibold">Likes</text>
            <text className="text-2xl">1.2B</text>
          </view>
          <view className="item">
            <text className="text-2xl font-semibold">Videos</text>
            <text className="text-2xl">418</text>
          </view>
        </view>
      </view>
    </view>
  );
}
