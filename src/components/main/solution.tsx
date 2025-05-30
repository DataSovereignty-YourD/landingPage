import { useState } from 'react';
import { Link } from 'react-router-dom';
import LearnMoreHover from '../../assets/icon/fillcircle.png';
import LearnMore from '../../assets/icon/learnMoreIcon.png';
import Analytics from '../../assets/img/analytics.png';
import YourDSaaS from '../../assets/img/dataPass.png';
import DataSelling from '../../assets/img/dataSelling.png';

export default function Solution() {
    const [isHover, setIsHover] = useState(null);
    const solutions = [
        {
            id: 1,
            title: 'Web 3.0 Data Ownership Solution',
            subtitle: 'Implement User-Centric Data Management with YourD App',
            description:
                'YourD App is a solution conceived around the principle of user data ownership. It is versatile, finding applications in a wide array of fields from online digital identity to offline. This enables users to manage and utilize their data effectively, representing a genuine Web 3.0 solution.',
            image: YourDSaaS,
            path: '/yourd_app',
        },
        {
            id: 2,
            title: 'YourD Studio – All-in-One Digital Verification & Analytics',
            subtitle: 'Manage and verify your verifiable credentials effortlessly with YourD Studio',
            description:
                'YourD Studio is a comprehensive platform that simplifies verifiable credential management and delivers advanced data analytics for the Web 3.0 era. Businesses can issue, manage, and verify credentials without the complexity of a dedicated DID system—while gaining insights that comply with GDPR, CCPA, and other international standards. Leveraging decentralized identity technology, we protect personal data and foster a trusted digital ecosystem for seamless interactions and sustainable growth.',
            image: Analytics,
            path: '/yourd_studio',
        },
        // {
        //   id: 2,
        //   title: 'Web 3.0 Simplified Authentication Solution',
        //   subtitle: 'Start your project without the complexity with YourD Web Auth',
        //   description:
        //     'YourD Auth introduces a passwordless Auth approach, addressing the complexities of conventional wallet logins and simplifying the building of Web 3.0 projects. This makes it a true Web 3.0 Authentication solution that opens up real-world possibilities.',
        //   image: FastAuth,
        //   path: '/yourd_web_auth',
        // },

        // {
        //     id: 3,
        //     title: 'YourD Pay: Web 3.0 Integrated Payment Solution',
        //     subtitle: 'Efficient and Easy Payments with YourD Pay',
        //     description:
        //         'YourD Pay is a non-custodial cryptocurrency payment module that provides a quick and easy payment experience with full transaction-based QR payments and a one-touch process. Supporting a variety of blockchains, YourD Pay enables easy cryptocurrency payments in a Web 2.0 environment and is flexible enough for the transition to Web 3.0.',
        //     image: Payment,
        //     path: '/yourd_payment',
        // },
        // {
        //     id: 3,
        //     title:
        //         'YourD Analytics: The Next-Generation User Analysis Tool for Web 3.0',
        //     subtitle:
        //         'Conduct Effective Analysis while Upholding Data Sovereignty with YourD Analytics',
        //     description:
        //         'The implementation of YourD Web Auth and YourD App makes user analysis in adherence to laws such as GDPR and CCPA feasible in the Web 3.0 framework. This offers companies the capability to honor user data sovereignty and explore avenues for continuous service enhancement and novel growth.',
        //     image: Analytics,
        //     path: '/yourd_analytics',
        // },
        {
            id: 3,
            title: 'YourD Data Leverage Infra',
            subtitle:
                'Maximizing Data Value: YourD Paving the Way for Emerging Business Models in a Web 3.0 Landscape',
            description:
                'YourD enables users and service providers to co-create the value of their data in a Web 3.0 environment. By incorporating zero-knowledge proof (ZKP), users can selectively disclose certain information, ensuring data privacy while increasing the value of their data. This approach not only preserves data sovereignty, but also provides freedom to explore and discover new business models and opportunities in a variety of fields.',
            image: DataSelling,
            path: '/yourd_infra',
        },
    ];

    const solutionBox = ({ solution, index }: any) => (
        <div
            key={solution.id}
            className={` md:col-span-1 flex my-3 flex-col h-fit items-center justify-start p-3 sm:p-5 sm:pb-0 md:p-10 md:pb-0 rounded-[32px] grid-auto-rows-1fr  backdrop-blur-sm bg-[#FFE9B1] bg-opacity-20 overflow-hidden ${index === 3 ? 'sm:translate-y-[136px]' : ''
                } ${index === 1 ? 'sm:translate-y-[176px]' : ''}`}
        >
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <span className="font-pre-bold text-lg sm:text-xl sm:leading-6 md:leading-7 md:text-2xl leading-5 text-transparent bg-clip-text bg-gradient-to-r from-gradient1 to-gradient2">
                        {solution.id}.&nbsp;&nbsp;{solution.title}
                    </span>
                    <span className="font-pre-regular font-bold text-lg sm:text-lg md:text-xl text-gray400">
                        {solution.subtitle}
                    </span>
                    <span className="font-pre-regular font-bold text-gray300 text-[14px] sm:text-[16px] md:text-lg leading-7 mt-4">
                        {solution.description}
                    </span>
                </div>

                <div className="flex flex-shrink justify-between ">
                    <Link
                        onMouseEnter={() => setIsHover(index)}
                        onMouseLeave={() => setIsHover(null)}
                        to={solution.path}
                        className="w-fit h-fit hover:scale-110 transition-all duration-300"
                    >
                        <div className="flex items-center justify-center border font-semibold bg-[#474747] rounded-full mt-5">
                            <img
                                src={isHover === index ? LearnMoreHover : LearnMore}
                                alt={solution.title}
                                className="object-contain min-w-[32px] w-7 sm:w-[40px] md:w-[50px] "
                            />
                            <div className={`text-xs sm:text-sm md:text-md pr-5 whitespace-nowrap ${isHover === index ? "gradientText" : "text-white"}`}>Learn More</div>
                        </div>
                    </Link>

                    <img
                        src={solution.image}
                        alt={solution.title}
                        className="relative w-[260px] sm:w-[260px] lg:w-[300px] object-contain "
                    />
                </div>
            </div>
        </div>
    );

    return (
        <div className="mx-5 sm:mx-10 md:mx-16 lg:mx-[136px] mt-20 min-h-screen h-min  flex flex-col items-start justify-start font-sf-pro-text relative transition-all duration-300">
            <div className=" w-full flex flex-col md:grid md:grid-cols-2 gap-3 sm:gap-5 lg:gap-10 ">
                {solutions.map((solution, index) => solutionBox({ solution, index }))}
            </div>
        </div>
    );
}
