import { useCallback, useEffect, useState } from '@lynx-js/react';
import { useNavigate } from 'react-router';

import './App.css';

export function App() {
  const nav = useNavigate();

  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {}, []);

  const onTap = useCallback(() => {
    'background only';
    setAlterLogo((prevAlterLogo) => !prevAlterLogo);
  }, []);

  return (
    <view>
      <view className="Background" />
      <view className="App">
        <view className="Banner">
          <text className="Title">Hi</text>
          <text className="Subtitle">on Lynx</text>
        </view>
        <view className="Content">
          <text className="Description">Tap the logo and have fun!</text>
          <text className="Hint">
            Edit
            <text
              style={{
                fontStyle: 'italic',
                color: 'rgba(255, 255, 255, 0.85)',
              }}
            >
              {' src/App.tsx '}
            </text>
            to see updates!
          </text>
        </view>
        <view>
          <text bindtap={() => nav('/dashboard')}>dashboard</text>
        </view>
        <view style={{ flex: 1 }} />
      </view>
    </view>
  );
}
