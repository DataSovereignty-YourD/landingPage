import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";


// 한글 버전 사업자 정보
const BusinessInfoKo = () => (
    <div className="text-[13px] font-normal text-gray-500 mb-5 text-center">
        <p>
            사업자등록번호 805-29-01574 | 통신판매신고 2024-서울서대문-1048 | 대표: 김지황
            서울특별시 서대문구 세무서2길 64, 101동 8층 | 연락처: 0507-1855-5086,{" "}
            <a href="mailto:0xcatbox@gmail.com">0xcatbox@gmail.com</a>
        </p>
    </div>
);

// 영어 버전 사업자 정보 (간단하게 처리)
const BusinessInfoEn = () => (
    <div className="text-[13px] font-normal text-gray-500 mb-5 flex flex-col sm:flex-row text-center">
        <p>2024 YourD.
            <span className="text-gray-300 mx-2">|</span>
            8th Floor, Building 101, 64 Saeumseo 2-gil, Seodaemun-gu, Seoul, South Korea
            <span className="text-gray-300 mx-2">|</span>
        </p>
        <p>
            <a href="mailto:0xcatbox@gmail.com">0xcatbox@gmail.com</a>
        </p>
    </div>
);

// 한글 버전 정책 링크
const PolicyLinksKo = () => (
    <div className="flex flex-row gap-2 sm:gap-x-4 items-center justify-center">
        <Link
            to="/policy/terms?lang=ko"
            className="text-[13px] font-medium hover:underline text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
        >
            이용약관
        </Link>
        <span className="text-gray-300">|</span>
        <Link
            to="/policy/privacy?lang=ko"
            className="text-[13px] font-medium hover:underline text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
        >
            개인정보 처리방침
        </Link>
    </div>
);

// 영어 버전 정책 링크
const PolicyLinksEn = () => (
    <div className="flex flex-row gap-2 sm:gap-x-4 items-center justify-center">
        <Link
            to="/policy/terms?lang=en"
            className="text-[13px] font-medium hover:underline text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
        >
            Terms of Service
        </Link>
        <span className="text-gray-300">|</span>
        <Link
            to="/policy/privacy?lang=en"
            className="text-[13px] font-medium hover:underline text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
        >
            Privacy Policy
        </Link>
    </div>
);

const Footer = () => {
    const lang = navigator.language || "en";
    const BusinessInfo = lang.startsWith("ko") ? BusinessInfoKo : BusinessInfoEn;
    const PolicyLinks = lang.startsWith("ko") ? PolicyLinksKo : PolicyLinksEn;

    return (
        <footer className="flex flex-col h-fit items-center relative pt-10 pb-5 bg-white px-5 sm:px-10 md:px-16 lg:px-[136px] gap-0 border-t">
            {/* 사업자 정보 (언어에 따라 다르게 표시) */}
            <BusinessInfo />
            {/* 이용약관, 개인정보 처리방침 링크 */}
            <PolicyLinks />

            <p className="mt-5 text-gray-800 text-sm">© 2024 YourD. All rights reserved.</p>

            <div className="flex gap-x-2 mt-5 ">
                <a
                    href="https://www.linkedin.com/company/yourd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-300 ease-in-out text-slate-500  hover:text-yellow-500"
                >
                    <FaLinkedin size={32} />
                </a>
                <a
                    href="https://x.com/YourD_ata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-300 ease-in-out text-slate-500  hover:text-yellow-500"
                >
                    <FaSquareXTwitter size={32} />
                </a>
            </div>
        </footer>
    );
};



export default Footer;
