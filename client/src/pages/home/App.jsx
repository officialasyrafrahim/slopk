import { useCallback, useEffect, useState } from '@lynx-js/react';
import { useNavigate } from 'react-router';

export function App() {
  const nav = useNavigate();

  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {}, []);

  const onTap = useCallback(() => {
    'background only';
    setAlterLogo((prevAlterLogo) => !prevAlterLogo);
  }, []);

  return (
    <view className="bg-white h-[100vh]">
      <view className="bg-red-700">
        <view className="flex flex-row bg-red-300 ">
          <text className="">No</text>
          <text className="">on Lynx</text>
        </view>
        <view className="Content">
          <text className="Description">no the logo and have fun!</text>
        </view>
        <view>
          <text bindtap={() => nav('/dashboard')} className='text-lg'>dashboard</text>
        </view>
        <view style={{ flex: 1 }} />
      </view>
    </view>
  );
}
