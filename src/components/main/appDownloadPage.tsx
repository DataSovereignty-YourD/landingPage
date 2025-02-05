import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function AppDownloadPage() {
    const navigate = useNavigate();

    const openStore = () => {
        const iosAppStoreUrl = 'https://apps.apple.com/us/app/yourd/id6477564824'; // iOS 앱 스토어 URL
        const androidPlayStoreUrl = 'market://details?id=com.yourd.yourdapp'; // Android 플레이 스토어 URL
        const androidPlayStoreIntentUrl = 'intent://details?id=com.yourd.yourdapp#Intent;scheme=market;package=com.android.vending;end';

        const userAgent = navigator.userAgent || navigator.vendor

        // window.MSStream의 타입을 명시적으로 정의
        const hasMSStream = (window as any).MSStream;
        if (/iPad|iPhone|iPod/.test(userAgent) && !hasMSStream) {
            // iOS인 경우 App Store로 연결
            window.location.href = iosAppStoreUrl;
        } else if (/android/i.test(userAgent)) {
            // Android인 경우 Play Store로 연결
            window.open(androidPlayStoreIntentUrl);
        } else {
            // 그 외의 경우: 웹사이트나 다른 페이지로 연결할 수 있습니다.
            navigate("/")
        }
    };

    useEffect(() => {
        openStore();
    }, [])

    return (
        <div className="flex-1 bg-white">
            <h1>Redirecting to the store...</h1>
        </div>
    )
}