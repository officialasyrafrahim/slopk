import { useNavigate } from 'react-router';

export function Header() {
  const nav = useNavigate();

  return (
    <view className="h-[10vh] bg-white flex flex-1 flex-row items-end px-8 py-2">
      <text bindtap={() => nav('/')} className="text-[#c75472] text-2xl font-bold">Home</text>
    </view>
  );
}
