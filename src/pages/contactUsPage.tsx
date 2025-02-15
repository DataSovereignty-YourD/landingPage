import ContactUs from "../components/common/contactUs";
import { useEffect } from "react";
export default function ContactUsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
        <ContactUs/>
        </>
    );
}