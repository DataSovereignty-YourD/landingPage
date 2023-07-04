import did from "../assets/img/DID.png";
import FastAuth from "../assets/img/fast.png";
import Store from "../assets/img/store.png";
export default function YourDIntroPage() {
  return (
    <div className="w-full px-20 h-screen p-20 m-100 flex flex-col justify-around ">
      <div>
        <div
          id="title"
          className="text-4xl w-fit mx-auto font-sf-pro-text font-bold text-center p-5 text-custom-blue"
        >
          Control Your Data
        </div>

        <div id="description" className="space-y-2">
          <div className="text-2xl w-fit mx-auto font-sf-pro-text text-center text-gray-400">
            YourD uses DID and ZKP technologies, which means we cannot access
            any of your data.
          </div>
          <div className="text-2xl w-fit mx-auto font-sf-pro-text text-center text-gray-400">
            You have direct control over your data and you even have the option
            to sell it for profit.
          </div>
        </div>
      </div>

      <div id="list" className="flex justify-between items-center mb-5">
        <div id="DID" className="">
          <img src={did} className="h-48 w-48 mx-auto p-5" alt="did" />
          <div className="text-4xl w-fit mx-auto font-sf-pro-text font-semibold text-center">
            Data Wallet
          </div>
          <div className="text-2xl w-fit font-sf-pro-text  text-gray-400 p-5 ">
            By using DID technology, we empower users to directly own their
            personal data.
          </div>
        </div>
        <div id="Fast Auth">
          <img src={FastAuth} className="h-48 w-48 mx-auto p-5" alt="did" />
          <div className="text-4xl w-fit mx-auto font-sf-pro-text font-semibold text-center">
            Fast Auth
          </div>
          <div className="text-2xl w-fit font-sf-pro-text  text-gray-400 p-5">
            With user-centric authentication, the process becomes faster,
            eliminating the need for multi-server verification.
          </div>
        </div>
        <div id="ZKP">
          <img src={Store} className="h-48 w-48 mx-auto p-5" alt="did" />
          <div className="text-4xl w-fit mx-auto font-sf-pro-text font-semibold text-center">
            Data Selling
          </div>
          <div className="text-2xl w-fit font-sf-pro-text  text-gray-400 p-5">
            With ZKP, our targeted advertising services generate revenue while
            prioritizing data protection
          </div>
        </div>
      </div>
    </div>
  );
}
