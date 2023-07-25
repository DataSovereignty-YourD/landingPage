import GDPR from "../../assets/svg/GDPR.svg";
import W3C from "../../assets/svg/W3C_Icon.svg";

export default function BusinessPlan() {
    return (
      <div className="bg-gradient-to-b from-w to-maincolor ">
        <div className="container  mx-auto px-6 md:px-12 lg:px-20 h-screen py-40">
          <div className="mx-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-2xl text-maincolor font-[sf-pro-text-bold] font-bold md:text-4xl">
              <a className="text-2xl text-black px-2  font-[sf-pro-text-bold] font-bold md:text-4xl">
                Protect your business with
              </a>
              YourD
            </h2>
          </div>
          <div className="mt-12 mx-auto my-10 -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div className="relative p-6 space-y-6 lg:p-8">
                <h3 className="text-3xl text-gray-700 font-[sf-pro-text-semibold] text-center">
                  Organisation
                </h3>
                <div>
                  <div className="relative flex justify-around">
                    <div className="flex items-end">
                      <span className="text-8xl text-gray-800 font-bold leading-0">
                        35
                      </span>
                      <div className="pb-2">
                        <span className="block text-2xl text-gray-700 font-bold">
                          $
                        </span>
                        <span className="block text-xl text-maincolor  font-bold">
                          for month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  role="list"
                  className="w-max space-y-4 py-6 m-auto text-gray-600"
                >
                  <li className="space-x-2">
                    <span className="text-maincolor  font-semibold"></span>
                    <span>Data Analytics</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-maincolor  font-semibold"></span>
                    <span>Data API</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-maincolor  font-semibold"></span>
                    <span>Solution Feedback</span>
                  </li>
                </ul>
                <button
                  type="submit"
                  title="Submit"
                  className="block w-full py-3 px-6 text-center rounded-xl transition bg-maincolor hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600"
                >
                  <span className="text-white font-semibold">
                    Send us an email
                  </span>
                </button>
              </div>
            </div>

            <div className="relative group md:w-6/12 lg:w-7/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"
              ></div>
              <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                <ul role="list" className="space-y-4 py-6 text-gray-600">
                  <li className="space-x-2">
                    <span className="text-maincolor font-semibold">
                      &check;
                    </span>
                    <span>provide data analystics</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-maincolor font-semibold">
                      &check;
                    </span>
                    <span>can use easy data API</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-maincolor font-semibold">
                      &check;
                    </span>
                    <span>Weekly solution feedback</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  Team can be any size, and you can add or switch members as
                  needed. Companies using our platform include:
                </p>
                <div className="mt-6 flex justify-between gap-6">
                  <img
                    className="w-16 lg:w-24"
                    src={W3C}
                    loading="lazy"
                    alt="w3c logo"
                  />
                  <img
                    className="w-16 lg:w-32"
                    src="https://vchained.com/wp-content/uploads/2023/04/tezos.png"
                    loading="lazy"
                    alt="tezos logo"
                  />
                  <img
                    className="w-16  lg:w-32"
                    src={GDPR}
                    loading="lazy"
                  ></img>
                </div>
                {/* <img
                  className="full"
                  src="https://gdpr.eu/wp-content/themes/gdpr/images/logo-gdpr-eu.svg"
                  alt="GDPR.eu"
                ></img> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}