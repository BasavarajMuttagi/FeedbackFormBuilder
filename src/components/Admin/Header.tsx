import { ThumbsUp } from "@phosphor-icons/react";

const Header = () => {
  return (
    <header className="text-white font-semibold flex items-center space-x-5 p-4 bg-neutral-950 text-lg border-b border-white/10">
      <ThumbsUp size={32} weight="duotone" className="text-blue-500" />
      <span>User Feedback</span>
    </header>
  );
};

export default Header;
