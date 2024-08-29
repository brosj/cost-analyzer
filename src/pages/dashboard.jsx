import Header from "../components/Header";
import HeaderImage from "../assets/HeaderImage.svg";
import HeaderImg from "../assets/HeaderImg.jpg";
import { Calendar, ChevronDown, Search, Star } from "../assets";
import { Snowflake } from "../assets";

const Dashboard = () => {
  return (
    <div className="">
      <Header />
      <div className="bg-dark-blue-100 m-5 p-6 rounded-2xl flex gap-4 justify-between">
        <div className="w-[60%] rounded-xl">
          {/* Summary Card */}
          <div
            className="bg-cover p-6 flex gap-6 rounded-xl border border-gray-10"
            style={{ backgroundImage: `url(${HeaderImg})` }}
          >
            <div className="bg-dark-blue-100 bg-opacity-85 h-[200px] rounded-xl p-6 text-white-10">
              <div className="flex gap-3 items-center">
                <img src={Snowflake} alt="Snowflake logo" className="w-14" />
                <div className="text-xl font-semibold">Snowflake ML/AI</div>
              </div>
              <div className="flex gap-4 justify-between mt-6">
                <div>
                  <div>
                    TOTAL COST{" "}
                    <span className="text-[10px] font-semibold">
                      (Per Month)
                    </span>
                  </div>
                  <div className="text-4xl font-semibold">$32,532.74</div>
                </div>
                <div className="w-0.5 h-16 bg-white-10"></div>
                <div>
                  <div>BUDGET COST</div>
                  <div className="text-[10px] font-semibold">(Per Month)</div>
                  <div className="text-2xl font-semibold">$30,000</div>
                </div>
              </div>
            </div>
            <div className="bg-dark-blue-100 bg-opacity-85 h-[200px] rounded-xl p-6 text-grey-30 flex flex-col items-center justify-center cursor-not-allowed">
              <div className="text-6xl font-semibold -mt-4">+</div>
              <div className="text-xs">Connect More Services</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex justify-between items-center mt-4 text-xs">
            {/* Search */}
            <div className="flex gap-3 bg-dark-blue-200 border border-gray-10 rounded-lg h-8 w-[375px] px-2">
              <img src={Search} alt="Search icon" className="w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-dark-blue-200 w-[350px] text-xs text-white-10 focus:outline-none"
              />
            </div>

            {/* Hide small costs */}
            <div className="flex gap-3 items-center">
              <input
                id="hideSmallCosts"
                type="checkbox"
                className="cursor-pointer w-4 h-4"
              />
              <label
                htmlFor="hideSmallCosts"
                className="cursor-pointer text-gray-20"
              >
                Hide small costs
              </label>
            </div>

            {/* Watchlist */}
            <div className="flex gap-2 items-center bg-dark-blue-200 border border-gray-10 px-3 py-2 rounded-lg cursor-pointer">
              <img src={Star} alt="Watchlist" className="w-4" />
              <div className="cursor-pointer text-gray-20 mt-0.5">
                Watchlist
              </div>
            </div>

            {/* Status */}
            <div className="flex gap-2 items-center bg-dark-blue-200 border border-gray-10 px-3 py-2 rounded-lg cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-gray-20"></div>
              <div className="cursor-pointer text-gray-20">Status</div>
              <img src={ChevronDown} alt="Status" className="w-2.5" />
            </div>

            {/* Period */}
            <div className="flex gap-2 items-center bg-dark-blue-200 border border-gray-10 px-3 py-2 rounded-lg cursor-pointer">
              <img src={Calendar} alt="Calendar" className="w-4" />
              <div className="cursor-pointer text-gray-20">Daily</div>
              <img src={ChevronDown} alt="Calendar" className="w-2.5" />
            </div>
          </div>
        </div>
        <div className="w-[40%]"></div>
      </div>
    </div>
  );
};

export default Dashboard;
