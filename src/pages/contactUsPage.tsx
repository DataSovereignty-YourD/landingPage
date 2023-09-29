import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
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