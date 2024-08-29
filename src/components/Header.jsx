import { Bell, Logo } from "../assets/index";

const Header = () => {
  return (
    <div className="flex justify-between px-[30px] bg-dark-blue-100 h-16">
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => {}}
      >
        <img className="w-[46px]" src={Logo} alt="CloudCostIQ Logo" />
        <div className="font-semibold text-white-10 text-[28px]">
          CloudCostIQ
        </div>
      </div>
      <img src={Bell} alt="Notification" className="w-8 cursor-pointer" />
    </div>
  );
};

export default Header;
