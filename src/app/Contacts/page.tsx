"use client";
import Myapp from "../components/atoms/myapp";
import ContactPage from "../components/templates/contact_page";

export default function Contact() {
    return <Myapp Component={ContactPage} pageProps={undefined} />;
}
