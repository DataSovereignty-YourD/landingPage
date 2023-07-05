import DataWallet from "../assets/img/datawallet.png";
import FastAuth from "../assets/img/fast.png";
import Dataselling from "../assets/img/dataselling.png";
export default function YourDIntroPage() {

    const Solution = [
        {
            name: "Data Wallet",
            description: "By using DID technology, we empower users to directly own their personal data.",
            image: DataWallet
        }, {
            name: "Fast Auth",
            description: "With user-centric authentication, the process becomes faster, eliminating the need for multi-server verification.",
            image: FastAuth
        }, {
            name: "Data Selling",
            description: "With ZKP, our targeted advertising services generate revenue while prioritizing data protection",
            image: Dataselling
        },

    ]

    return (
        <div id="Solution" className="w-full flex flex-col px-16 pt-32 lg:px-32 md:px-20 sm:px-10 h-min-screen   justify-around ">
            <div className="w-full pt-10 pb-40">
                <div
                    id="title"
                    className="text-3xl sm:text-4xl md:text-5xl w-full mx-auto font-sf-pro-text font-bold sm:text-center sm:p-5 mb-10 text-custom-blue"
                >
                    Control Your Data
                </div>

                <div id="description">
                    <div className="text-xl sm:text-xl md:text-2xl w-fit mx-auto font-sf-pro-text text-gray-500 sm:text-center">
                        YourD uses DID and ZKP technologies, which means we cannot access
                        any of your data. <br/>You have direct control over your data and you even have the option
                        to sell it for profit.
                    </div>
                </div>
            </div>

            <div id="list" className="grid mb-5 sm:grid-cols-3 ">
                {Solution.map((item) => {
                    return (
                        <div className="flex flex-col items-start justify-start animate-fade-left animate-once animate-duration-1000 animate-ease-out">
                            <div className="w-36 h-36 my-2 sm:my-4 sm:mx-auto">
                                <img src={item.image} className="object-fill"/>
                            </div>
                            <div className="text-3xl w-fit font-sf-pro-text font-semibold text-start sm:text-center sm:mx-auto mb-4 sm:mb-0">
                                {item.name}
                            </div>
                            <div className="text-xl px-0 sm:text-center  sm:px-2 w-full font-sf-pro-text  text-gray-500 mb-10">
                                {item.description}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
