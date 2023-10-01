import ContactUs from "../components/common/contactUs";
import Footer from "../components/common/footer";
import { useEffect } from "react";
export default function ContactUsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
        <ContactUs/>
        <Footer/>
        </>
    );
}