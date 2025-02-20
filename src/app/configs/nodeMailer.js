import nodemailer from "nodemailer";
const config = nodemailer.createTransport({
    host: 'mail.kurumsaleposta.com', // SMTP sunucusunun host adresi
    port: 587, // SMTP sunucusunun port numarası (örneğin 587 veya 465)
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'info@softxpress.com.tr', // SMTP sunucusunda oturum açmak için kullandığınız email
        pass: 'yD2pAb75BvJ@@@_7' // SMTP sunucusunda oturum açmak için kullandığınız şifre
    },
    tls: {rejectUnauthorized: false}
});

export default config