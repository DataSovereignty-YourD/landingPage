import { FaCheck } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import "../../assets/css/describe1.css";
import PricingPage from "./Pricing";

const features = [
    {
        title: "Unified Credential Management",
        description: [
            "Centralize issuance, management, and verification of digital credentials.",
            "Manage digital credentials seamlessly with an intuitive dashboard."
        ],
        //   icon: access // Use an icon that represents management (e.g., an access icon)
    },
    {
        title: "Seamless Integration & Customization",
        description: [
            "Quickly integrate our APIs and SDKs with your existing systems.",
            "Customize verification workflows to perfectly match your business needs."
        ],
        //   icon: intergrationIcon // Use an icon that conveys integration
    },
    {
        title: "Decentralized Identity Infrastructure",
        description: [
            "Utilize OIDC4VC and VP protocols for trustworthy credential management.",
            "Empower secure identity verification with a globally recognized framework."
        ],
        //   icon: standard // Use an icon that represents standards or decentralization
    }
];


export default function YourDHubPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col relative pt-16 items-center w-full justify-center">
            <div className="px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px] ">
                <div className="relative w-full sm:text-center md:text-start flex flex-col md:flex-row justify-between items-center  bg-white bg-opacity-70">
                    <div className="h-fit pt-10 sm:pt-20  sm:pb-20 z-10">
                        <div className="text-2xl sm:text-[32px] font-pre-bold">
                            Your<span className="text-[#fccc00]">D</span> Hub
                        </div>
                        <div className="font-pre-bold text-3xl sm:text-[32px] md:text-[36px] lg:text-[56px] gradientText mt-3 leading-none pb-1">
                            Empowering Digital Trust
                        </div>
                        <p className="font-pre-reqular text-xl md:text-[14px] lg:text-xl mt-10 ">
                            Simplify the verification of digital credentials and build your Web 3.0 future effortlessly.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-start items-center">
                            <a
                                href="https://studio.yourd.xyz/login"
                                className="px-6 py-3 bg-[#fccc00] text-black rounded-full font-bold hover:bg-[#fcbf00] transition-colors"
                            >
                                Get Started
                            </a>
                            <a
                                href="/contact"
                                className="px-6 py-3 border border-[#fccc00] text-[#fccc00] rounded-full font-bold bg-white hover:bg-[#fccc00] hover:text-black transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                    {/* <PreloadImage
                        src={YourDHub}
                        alt="YourDHub"
                        className="mb-10 sm:mb-0 md:mb-10 md:top-14 sm:pb-0 md:absolute -right-20 w-3/4 sm:w-[45%] md:w-[40%] lg:w-[50%] z-0  object-contain"

                    /> */}

                </div>


            </div>

            {/* Main Content */}




            <div className="bg-[#FFF6E0] w-full items-center justify-center flex">
                <div className=" px-5 w-full sm:px-10 md:px-16 lg:px-[136px] max-w-[1600px]">
                    <div className="h-fit w-full flex flex-col relative py-20 sm:py-24 gap-16 justify-center items-center ">
                        <div className="w-full ">
                            <div className="w-fit text-lg sm:text-[28px] font-pre-bold text-transparent pb-1 bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
                                Unlock a New Era of Digital Identity
                            </div>
                            <div className="text-xl sm:text-4xl mt-3 font-pre-bold ">
                                Build and scale your Web 3.0 infrastructure effortlessly with a secure,
                                decentralized authentication system.
                            </div>
                            {/* <div className=" sm:text-lg font-medium mt-5 sm:w-3/5 text-gray400">
                                Embrace the future with an effortless Auth using QR code scanning,
                                integrated with Web 3.0's decentralized identity. Simplify user
                                experience and enhance platform versatility for developers.
                            </div> */}
                        </div>
                        <div className="flex flex-col  sm:flex-row sm:grid sm:grid-cols-6 gap-3  w-full mt-10">
                            {features.map((feature) => (
                                <div
                                    key={feature.title}
                                    className=" rounded-2xl sm:col-span-2 flex flex-col gap-2 bg-white px-5 py-7  lg:p-10 shadow-all-around bg-opacity-70 items-center"
                                >
                                    {/* <img src={feature.icon} alt={feature.title} className="object-contain w-[70px] h-[70px]" /> */}
                                    <div className="font-pre-bold text-lg sm:text-xl mb-2 text-center">
                                        {feature.title}
                                    </div>
                                    <ul className="list-disc pl-3 text-gray300">
                                        {feature.description.map((description, idx) => (
                                            <li key={idx} className="text-md">
                                                {description}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-r from-blue-100 to-green-100 py-20 w-full">
                <div className="max-w-5xl mx-auto text-center flex flex-col gap-y-20">
                    <h2 className="text-4xl font-extrabold text-gray-900">Why YourD Hub</h2>
                    <p className="text-lg text-gray-700 font-normal">
                        YourD Hub transforms digital identity management with a secure, decentralized platform for seamless interactions.
                        We build a trusted, hyper-connected ecosystem that empowers businesses to simplify credential management and verification.
                    </p>
                </div>
            </section>

            <main className="flex-grow max-w-6xl mx-auto px-4 py-12 bg-white">
                {/* Pricing Section */}
                <section className="py-12 text-center ">
                    <h2 className="text-4xl font-extrabold text-gray-800 pb-6">
                        Pricing
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Basic Plan */}
                        <div className="bg-white p-8 rounded-xl shadow-md flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Basic</h3>
                            <p className="text-4xl font-extrabold text-gray-900 mb-4">$49<span className="text-lg font-normal">/mo</span></p>
                            <button onClick={() => window.location.href = "https://studio.yourd.xyz/login"} className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-6">
                                Get Started
                            </button>
                            <ul className="flex-grow text-left text-gray-600 space-y-2 mb-6 text-sm">
                                <li className="flex gap-x-2 items-center">
                                    <FaCheck className="text-maincolor" />
                                    VC issuance for small project
                                </li>
                                <li className="flex gap-x-2 items-center">
                                    <FaCheck className="text-maincolor" />
                                    Up to 1,000 verifications per month</li>
                                <li className="flex gap-x-2 items-center">
                                    <FaCheck className="text-maincolor" />
                                    Email support
                                </li>
                            </ul>

                        </div>
                        {/* Pro Plan */}
                        <div className="bg-white p-8 rounded-xl shadow-md flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Pro</h3>
                            <p className="text-4xl font-extrabold text-gray-900 mb-4">$329<span className="text-lg font-normal">/mo</span></p>
                            <button onClick={() => window.location.href = "https://studio.yourd.xyz/login"} className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-6">
                                Get Started
                            </button>
                            <ul className="flex-grow text-left text-gray-600 space-y-2 mb-6 text-sm">
                                <li className="flex gap-x-2 items-center">
                                    <FaCheck className="text-maincolor" />
                                    Advanced VC issuance & verification
                                </li>
                                <li className="flex gap-x-2 items-center">
                                    <FaCheck className="text-maincolor" />
                                    Up to 10,000 verifications per month
                                </li>
                                <li className="flex gap-x-2 items-center">
                                    <FaCheck className="text-maincolor" />
                                    Mobile SDK
                                </li>
                            </ul>
                        </div>
                        {/* Enterprise Plan */}
                        <div className="bg-white p-8 rounded-xl shadow-md flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Enterprise</h3>
                            <p className="text-4xl font-extrabold text-gray-900 mb-4">Custom</p>
                            <button onClick={() => navigate('/contact')} className=" bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-6">
                                Contact
                            </button>
                            <ul className="flex-grow text-left text-gray-600 space-y-2 mb-6 text-sm">
                                <li className="flex gap-x-2 items-center">
                                    <FaCheck className="text-maincolor" />
                                    Unlimited VC issuance & verification
                                </li>

                                <li className="flex gap-x-2 items-center">
                                    <FaCheck className="text-maincolor" />
                                    Custom contact
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
