import React from 'react';
import Heading from "../atoms/heading";
import Section2 from "../atoms/section2";

const ContactPage = () => {
    return (
        <Section2 isFancy={true}>
            <Heading>Hubungi Kami</Heading>
            <div>
                <p>Jika Anda memiliki pertanyaan atau ingin berbicara dengan kami, jangan ragu untuk menghubungi kami melalui salah satu cara berikut:</p>
                <ul>
                    <li>Email: daraprasasty10@gmail.com</li>
                    <li>Telepon: +123456789</li>
                    <li>Alamat: Jl. Kembang Turi No.21</li>
                </ul>
            </div>
            <div>
                <form>
                    <label htmlFor="name">Nama:</label><br />
                    <input type="text" id="name" name="name" /><br />
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" /><br />
                    <label htmlFor="message">Pesan:</label><br />
                    <textarea id="message" name="message"></textarea><br />
                    <button type="submit">Kirim</button>
                </form>
            </div>
        </Section2>
    );
}

export default ContactPage;
