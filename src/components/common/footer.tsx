import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Footer = () => {
    return (
        <footer className="flex flex-col sm:flex-row h-fit justify-between items-center sm:items-start relative pt-10 pb-16 bg-white px-5 sm:px-10 md:px-16 lg:px-[136px] gap-10 sm:gap-0 border-t">
            <div className="flex flex-col sm:flex-row justify-between gap-10 w-full">
                {/* 왼쪽 열: 로고, 기본 정보, 사업자 정보 */}
                <div className="w-full sm:w-2/3 text-center sm:text-left">
                    {/* 로고 및 기본 정보 */}
                    <div className="flex flex-col mb-6">
                        <p className="text-xs sm:text-[14px] font-normal mb-2">
                            CopyRight © 2024 YourD, All rights reserved.
                        </p>
                    </div>
                    {/* 사업자 정보 */}
                    <div className="text-xs sm:text-sm font-normal text-gray-500 mb-5">
                        <p>
                            사업자등록번호 805-29-01574 | 통신판매신고 2024-서울서대문-1048 | 대표: 김지황
                        </p>
                        <p>
                            서울특별시 서대문구 세무서2길 64, 101동 8층 | 연락처: 0507-1855-5086
                        </p>
                    </div>
                    {/* 이용약관, 개인정보 처리방침 링크 */}
                    <div className="flex flex-row gap-2 sm:gap-x-4 justify-center sm:justify-start">
                        <Link
                            to="/policy/terms"
                            className="text-[14px] font-medium hover:underline text-gray-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            to="/policy/privacy"
                            className="text-[14px] font-medium hover:underline text-gray-800"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>

                <div className="w-full sm:w-1/3 flex flex-col items-center sm:items-end justify-end">
                    <div className="flex gap-2">
                        <a
                            href="https://www.linkedin.com/company/yourd/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-300 ease-in-out hover:bg-yellow-500 hover:text-white rounded-full p-2"
                        >
                            <FaLinkedin size={32} />
                        </a>
                        <a
                            href="https://x.com/YourD_ata"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-300 ease-in-out hover:bg-yellow-500 hover:text-white rounded-full p-2"
                        >
                            <FaSquareXTwitter size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};



export default Footer;
