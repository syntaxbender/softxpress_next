'use server';
import mailConfig from "@/app/configs/nodeMailer.js"
import _ from "lodash"
import { headers } from "next/headers";
const setForm = async (props) => {

  const { name, surname, email, phone, message, type } = props;
  if (!name || !surname || !email || !phone || !type)

    return { status: false, messages: ["Lütfen tüm alanları doldurunuz"] }

  const validation = {
    name: /^.{3,30}$/,
    surname: /^.{3,30}$/,
    phone: /^05[0-9]{9}$/,
    email: /^.+@.+\..+$/,
    message: /.+$/,
    type: /^[0-9]+$/
  };
  const valMap = {
    name: "İsim",
    surname: "Soyisim",
    phone: "Telefon",
    email: "Email",
    message: "Talep Mesajı",
    type: "Type",
  };
  const messages = {
    phone: "Lütfen telefon numaranızı başında 0 olacak şekilde yeniden yazınız."
  };
  const errors = [];
  for (const i in validation) {
    if (typeof props[i] !== "string" || !validation[i].test(props[i])) {
      if (i === "message" && props[i] === undefined)
        continue;
      errors.push(i);
    }
  }
  if (errors && errors.length > 0) {
    const errorMessages = errors.map((data) => (messages[data]) ? messages[data] : valMap[data] + " alanını hatalı girdiniz lütfen kontrol ediniz.");
    return { status: false, messages: errorMessages }
  }
  try {
    const headersList = await headers();
    const forwarded = headersList.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : headersList.get("x-real-ip") || "IP Bulunamadı";
    //const ip = req.headers['x-forwarded-for'] ?? _.escape(req.socket.remoteAddress) ?? null;
    const subject = (type === "1") ? "Beni Arayın Form Bildirimi" : "İletişim Formu Bildirimi";
    const escape = {
      name: _.escape(name),
      surname: _.escape(surname),
      email: _.escape(email),
      phone: _.escape(phone),
    }
    if(message) escape.message = _.escape(message)
      
    const mailOptions = {
      from: 'info@softxpress.com.tr', // Gönderenin email adresi
      to: 'info@softxpress.com.tr', // Alıcının email adresi
      subject: subject, // E-posta konusu
      text: `
      Isim: ${name}\n
      Soyisim: ${surname}\n
      Email: ${email}\n
      Telefon: ${phone}\n
      IP: ${ip}\n
      ${(message) ? `Talep: ${message}` : ""}`,
      html: `<div>\
      <p><strong>İsim:</strong> ${name}</p><br>\
      <p><strong>Soyisim:</strong> ${surname}</p><br>\
      <p><strong>Email:</strong> ${email}</p><br>\
      <p><strong>Telefon:</strong> ${phone}</p><br>\
      <p><strong>IP:</strong> ${ip}</p><br>\
      ${(message) ? `<p><strong>Talep:</strong> ${message}</p>` : ""}
    </div>` // HTML içerik
    };
    //const info = await mailConfig.sendMail(mailOptions);
    return { status: true, messages: ["Başvurunuz alındı. En kısa sürede iletişime geçeceğiz."] };
  } catch (error) {
    return { status: false, messages: ["Sistemsel bir hata oluştu lütfen tekrar deneyiniz."] };
  }
}

export { setForm }
