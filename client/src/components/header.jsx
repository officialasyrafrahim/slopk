import { useNavigate, useLocation } from 'react-router';

export function Header() {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <view>
      {location.pathname === '/' ? (
        <view className="h-[10vh] bg-[#023047] flex flex-1 flex-row items-end px-8 py-2" />
      ) : (
        <view className="h-[10vh] bg-white flex flex-1 flex-row items-end px-8 py-2">
          <text
            bindtap={() => nav('/')}
            className="text-[#023047] text-2xl font-bold"
          >
            &#8629; Home
          </text>
        </view>
      )}
    </view>
  );
}
