import React from 'react';
import Heading from "../atoms/heading";
import Section2 from "../atoms/section2";

const ContactPage = () => {
    return (
        <Section2 isFancy={true}>
            <Heading>Contact Us</Heading>
            <p>Feel free to reach out to us via email, phone, or visit our office.</p>
            <p>We are happy to assist you with any inquiries you may have.</p>
        </Section2>
    );
}

export default ContactPage;
