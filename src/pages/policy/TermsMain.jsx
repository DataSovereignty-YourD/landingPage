import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import TopBar from "../../components/common/topBar";
import PrivacyV1EN from "./privacy/v1/en";
import PrivacyV1KO from "./privacy/v1/ko";
import TermsV1EN from "./terms/v1/en";
import TermsV1KO from "./terms/v1/ko";

const validLangs = ['ko', 'en'];
const tabItems = [
    {
        key: 'terms',
        label: {
            ko: '이용약관',
            en: 'Terms of Service',
        },
        children: {
            ko: <TermsV1KO />,
            en: <TermsV1EN />, // 영어 버전 컴포넌트 (추후 제작)
        },
    },
    {
        key: 'privacy',
        label: {
            ko: '개인정보 처리방침',
            en: 'Privacy Policy',
        },
        children: {
            ko: <PrivacyV1KO />,
            en: <PrivacyV1EN />, // 영어 버전 컴포넌트 (추후 제작)
        },
    },
];

const TermsMain = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // 경로에 따라 탭 설정
    const getTabFromPath = (pathname) => {
        const pathKey = pathname.split('/').pop(); // 경로의 마지막 부분 가져오기
        return tabItems.find((tab) => tab.key === pathKey)?.key || tabItems[0].key;
    };

    // URL 쿼리에서 lang 파라미터 읽기 (기본값 "ko")
    const initialLang = validLangs.includes(searchParams.get("lang")) ? searchParams.get("lang") : "en";

    const [activeTab, setActiveTab] = useState(getTabFromPath(location.pathname));
    const [activeLanguage, setActiveLanguage] = useState(initialLang);

    useEffect(() => {
        setActiveTab(getTabFromPath(location.pathname));
        // URL 쿼리에서 lang 값을 읽어 activeLanguage 업데이트
        const lang = validLangs.includes(searchParams.get("lang")) ? searchParams.get("lang") : "en";
        setActiveLanguage(lang);
    }, [location.pathname, searchParams]);

    // 탭 클릭 시 현재 언어 쿼리 파라미터를 함께 유지하며 이동
    const handleTabChange = (key) => {
        setActiveTab(key);
        navigate({
            pathname: `/policy/${key}`,
            search: `?lang=${activeLanguage}`
        });
    };

    // 언어 전환 시 현재 경로를 유지하며 쿼리 파라미터를 업데이트
    const handleLanguageChange = (lang) => {
        setActiveLanguage(lang);
        navigate({
            pathname: location.pathname,
            search: `?lang=${lang}`
        });
    };


    return (
        <>
            <TopBar />
            <div className="flex flex-col flex-1 max-w-6xl px-6 lg:px-0 mx-auto bg-white gap-y-10">
                <div className="flex items-center justify-between w-full border-b border-gray-200 mt-10">
                    <div className="flex">
                        {tabItems.map((tab) => (
                            <button
                                key={tab.key}
                                className={`px-4 py-2 text-center text-lg font-medium border-b-2 ${activeTab === tab.key ? "border-blue-500 text-blue-500" : "text-gray-600 border-transparent"
                                    } hover:text-blue-500`}
                                onClick={() => handleTabChange(tab.key)}
                            >
                                {tab.label[activeLanguage]}
                            </button>
                        ))}
                    </div>
                    {/* 언어 전환 탭 */}
                    <div className="flex gap-x-2">
                        <button
                            className={`p-1 text-base font-medium  ${activeLanguage === "ko" ? " text-black" : " text-gray-500"}`}
                            onClick={() => handleLanguageChange("ko")}
                        >
                            KOR
                        </button>
                        <button
                            className={`p-1 text-base font-medium  ${activeLanguage === "en" ? " text-black" : " text-gray-500"}`}
                            onClick={() => handleLanguageChange("en")}
                        >
                            ENG
                        </button>
                    </div>
                </div>

                {/* 탭 콘텐츠 */}
                <div className="max-w-6xl py-6 px-6 lg:px-0 mx-auto bg-white">
                    {tabItems.find((tab) => tab.key === activeTab).children[activeLanguage]}
                </div>

            </div>
        </>
    )
}

export default TermsMain;