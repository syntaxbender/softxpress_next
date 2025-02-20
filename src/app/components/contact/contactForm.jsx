"use client"
import React from 'react'
import styles from "./contactForm.module.css"
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { setField, resetFields, getContactState } from "@/app/components/contact/contactSlice";
import { setForm } from "@/app/components/contact/contactActions";
import withReactContent from "sweetalert2-react-content";
import ButtonSet from '../buttonSet/buttonSet';
const ContactForm = () => {
  const dispatch = useDispatch();
  const { name, surname, phone, email, message } = useSelector(getContactState);
  const type = "1";
  const handleField = (field, value) => {
    dispatch(setField({ field, value }));
  };
  const resetForm = () => {
    dispatch(resetFields());
  };
  async function handleSubmit() {
    let title, statusIcon, message;
    try {
      const response = await setForm({ name, surname, email, phone, type });
      statusIcon = response.status ? "success" : "error";
      title = response.status ? "İşlem Başarılı" : "Sistemsel Hata";
      message = response.messages.join("<br/>");
      if (response.status) resetForm();
    } catch (error) {
      statusIcon = "error";
      title = "Sistemsel Hata";
      message = "Sistemsel bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.";
    }
    reactSwal.fire({
      icon: statusIcon,
      title: title,
      html: message,
      showConfirmButton: true,
      timer: 3000,
    });
  }
  const reactSwal = withReactContent(Swal);

  return (
    <div className={styles.contactFormSection}>
    <div className={styles.contactFormHeading}>
      <h6>En kısa sürede size dönüş yapacağız</h6>
      <h4>Bize yazın</h4>
    </div>
    <div className={styles.contactFormContainer}>
      <div className="row">
        <div className="col-lg-6 col-12 pb-3 pt-3">
          <input
            type="text"
            value={name}
            onChange={(e) => {
              handleField("name", e.target.value);
            }}
            placeholder="Adınız"
            className={styles.contactFormInput}
          />
        </div>
        <div className="col-lg-6 col-12 pb-3 pt-3">
          <input
            type="text"
            value={surname}
            onChange={(e) => {
              handleField("surname", e.target.value);
            }}
            placeholder="Soyadınız"
            className={styles.contactFormInput}
          />
        </div>
        <div className="col-12 pb-3 pt-3">
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              handleField("phone", e.target.value);
            }}
            placeholder="Telefon"
            className={styles.contactFormInput}
          />
        </div>
        <div className="col-12 pb-3 pt-3">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              handleField("email", e.target.value);
            }}
            placeholder="E-mail"
            className={styles.contactFormInput}
          />
        </div>
        <div className="col-12 pb-3 pt-3">
          <textarea
            value={message}
            onChange={(e) => {
              handleField("message", e.target.value);
            }}
            placeholder="Lütfen talebinizi belirtiniz."
            className={styles.contactFormInput}
          />
        </div>
        <div className="col-12 pb-3 pt-3">
        <ButtonSet  onClick={handleSubmit}>Gönder</ButtonSet>

        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactForm