"use client";
import React from "react";
import style from "./callMe.module.css";
import deal from "@pub/images/deal.png";
import { setForm } from "./contactActions";
import Image from "next/image";
import { setField, resetFields, getContactState } from "@/app/components/contact/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ButtonSet from "../buttonSet/buttonSet";
const reactSwal = withReactContent(Swal);

const CallMe = () => {
  const dispatch = useDispatch();
  const { name, surname, email, phone } = useSelector(getContactState);
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
  return (
    <div className="container">
      <div className={`row ${style.containerRow}`}>
        <div className="col-lg-6">
          <div className={style.leftImage}>
            <Image src={deal} alt=""></Image>
          </div>
        </div>
        <div className="col-lg-6">
          <div className={style.sectionHeading}>
            <h6>En uygun çözümler için size ulaşalım</h6>
            <h4>Sizi Arayalım</h4>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}>
            <div className="row">
              <div className="col-lg-6">
                <fieldset>
                  <label className={style.callMeLabel} htmlFor="name">
                    Adınız
                  </label>
                  <input
                    value={name}
                    onChange={(e) => {
                      handleField("name", e.target.value);
                    }}
                    className={style.callMeInput}
                    type="text"
                    name="name"
                    required
                  />
                </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                  <label className={style.callMeLabel} htmlFor="surname">
                    Soyadınız
                  </label>
                  <input
                    value={surname}
                    onChange={(e) => {
                      handleField("surname", e.target.value);
                    }}
                    className={style.callMeInput}
                    type="text"
                    name="surname"
                    required
                  />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <label className={style.callMeLabel} htmlFor="phone">
                    Telefon
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => {
                      handleField("phone", e.target.value);
                    }}
                    className={style.callMeInput}
                    type="tel"
                    name="phone"
                    required
                  />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <label className={style.callMeLabel} htmlFor="email">
                    Mail Adresiniz
                  </label>
                  <input
                    value={email}
                    onChange={(e) => {
                      handleField("email", e.target.value);
                    }}
                    className={style.callMeInput}
                    type="email"
                    name="email"
                    required
                  />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <ButtonSet className="mini square bright" onClick={handleSubmit}>
                  Gönder
                </ButtonSet>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallMe;
