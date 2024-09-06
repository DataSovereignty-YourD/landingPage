import React, { useEffect } from "react";
import Token2049 from "../../assets/img/popup/tezos_token2049_qr.webp";
import { IoClose } from "react-icons/io5";

interface PopupProps {
    onClose: (e: React.MouseEvent | boolean) => void;
    maskClosable?: boolean;
    closable?: boolean;
    visible: boolean;
    className?: string;
    expiryDate?: Date; 
}

const Popup: React.FC<PopupProps> = ({
    className = "",
    onClose,
    maskClosable = true,
    closable = true,
    visible,
    expiryDate,
}) => {
    const onMaskClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose(e);
        }
    };

    
    useEffect(() => {
        const currentDate = new Date();

        // 만료일이 지난 경우 팝업 닫기
        if (expiryDate && currentDate > expiryDate) {
            onClose(true);
            return;
        }

        const VISITED_BEFORE_TIMESTAMP = localStorage.getItem("VisitCookie");
        const VISITED_NOW_TIMESTAMP = new Date().setHours(0, 0, 0, 0);

        if (VISITED_BEFORE_TIMESTAMP !== null) {
            if (parseInt(VISITED_BEFORE_TIMESTAMP) >= VISITED_NOW_TIMESTAMP) {
                onClose(true);
            } else {
                localStorage.removeItem("VisitCookie");
            }
        }
    }, [ onClose]);

    const DayClose = (e: React.MouseEvent) => {
        onClose(e);
        const expiryDate = new Date().setHours(24, 0, 0, 0); // 다음 날 자정으로 설정
        localStorage.setItem("VisitCookie", expiryDate.toString());
    };

    const close = (e: React.MouseEvent) => {
        onClose(e);
    };

    if (!visible) return null;

    return (
        <div>
            <div
                className={`fixed inset-0 bg-black bg-opacity-60 z-50 ${visible ? "block" : "hidden"
                    }`}
            />
            <div
                className={`fixed inset-0 flex items-center justify-center z-50 ${visible ? "block" : "hidden"
                    } ${className}`}
                onClick={maskClosable ? onMaskClick : undefined}
            >
                <div className=" bg-opacity-70 border border-white rounded-lg shadow-lg w-[80%] sm:max-w-sm md:max-w-md max-h-[80%] relative">
                    <IoClose onClick={close} color="#ffffff" className="absolute right-2 top-2 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"/>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center flex-col">
                            <div className="flex flex-col  text-black">
                                <a
                                    href="https://lu.ma/1jhx4405"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <img
                                        src={Token2049}
                                        alt="token2049_tezos_event"
                                        className="rounded-t-2xl"
                                        
                                    />
                                </a>
                            </div>
                        </div>
                        {closable && (
                            <div className="flex justify-between bg-gray-800 w-full text-white px-2 py-1 md:px-3 md:py-2 xl:py-3 text-xs md:text-sm xl:text-[16px] rounded-b-lg">
                                <span className="cursor-pointer" onClick={DayClose}>
                                    Do not show again today
                                </span>
                                <span className="cursor-pointer " onClick={close}>
                                    Close
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Popup);
