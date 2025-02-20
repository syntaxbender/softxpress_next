import React from "react";

import BreadCrumbs from "@/app/components/breadCrumb/breadCrumb";
import styles from "./page.module.css";
import ContactForm from "../components/contact/contactForm";
import { FaPhone, FaMapLocation, FaEnvelope } from "react-icons/fa6";
import { topNavigation } from "@/app/navigation";
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(topNavigation.iletisim);
const Iletisim = () => {
  const route = ["iletisim"];

  return (
      <section className={styles.contactsSection}>
        <BreadCrumbs route={route} nav={topNavigation} />

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className={styles.contactDescription}>
                <h4 className={styles.contactTitle}>İletişim</h4>
                <p className={styles.contactText}>Bizimle iletişime geçmekten çekinmeyin! Sorularınız, önerileriniz veya herhangi bir konuda destek almak için aşağıdaki kanallardan bize ulaşabilirsiniz. Müşteri Hizmetleri: İhtiyacınız olan yardımı almak için müşteri hizmetleri ekibimize her zaman ulaşabilirsiniz.</p>
              </div>
              <div className={styles.contactDetails}>
                <div className={styles.contactDetail}>
                  <div className={styles.contactDetailImage}>
                    <FaPhone />
                  </div>
                  <div className={styles.contactDetailContainer}>
                    <div className={styles.contactDetailHead}>
                      <h4>Telefon</h4>
                    </div>
                    <div className={styles.contactDetailText}>
                      <p>0850 444 4444</p>
                    </div>
                  </div>
                </div>
                <div className={styles.contactDetail}>
                  <div className={styles.contactDetailImage}>
                    <FaMapLocation />
                  </div>
                  <div className={styles.contactDetailContainer}>
                    <div className={styles.contactDetailHead}>
                      <h4>Adres</h4>
                    </div>
                    <div className={styles.contactDetailText}>
                      <p>İstanbul/Türkiye, 35000</p>
                    </div>
                  </div>
                </div>
                <div className={styles.contactDetail}>
                  <div className={styles.contactDetailImage}>
                    <FaEnvelope />
                  </div>
                  <div className={styles.contactDetailContainer}>
                    <div className={styles.contactDetailHead}>
                      <h4>E-mail</h4>
                    </div>
                    <div className={styles.contactDetailText}>
                      <p>info@softxpress.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Iletisim;
