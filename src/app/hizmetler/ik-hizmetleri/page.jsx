import React from "react";
import { FeaturedSection } from "../../components/featuredSection/featuredSection";
import { ParagraphHeading, SectionParagraph } from "../../components/sectionComponents/sectionComponents";
import { mainNavigation } from "../../navigation";
import featured from "@pub/images/management.png";
import img1 from "@pub/images/2150169847.jpg";
import img2 from "@pub/images/2150038840.jpg";
import accImg from '@pub/images/2149034544.jpg';
import Accordion from "../../components/accordion/accordion";
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(mainNavigation.hizmetler.sub["ik-hizmetleri"]);
const IkHizmetleri = () => {
  const route = ["hizmetler", "ik-hizmetleri"];
  return (
    <>
      <section>
        <FeaturedSection route={route} nav={mainNavigation} image={featured} firstWidth="6" secondWith="6" className="animated fadeInDown animate-helper">
          <ParagraphHeading>
            <h6>Uzman Ekip, Kusursuz Sonuçlar</h6>
            <h4>Proje Yönetimi</h4>
          </ParagraphHeading>
          <p>Firmamız, proje yönetimi alanında uzmanlaşmış bir ekip tarafından yönetilen kapsamlı hizmetler sunmaktadır. Proje yönetimi sürecimiz, projenin başlangıcından sonuna kadar olan tüm aşamaları kapsayarak müşterilerimizin proje hedeflerine ulaşmalarında yardımcı olur. Hizmetlerimiz arasında proje planlama ve yönetimi, bütçe yönetimi ve maliyet kontrolü, kaynak yönetimi, risk yönetimi, ilerleme takibi ve raporlama, proje kapanışı ve değerlendirmesi yer almaktadır.</p>
        </FeaturedSection>
      </section>
      <section>
        <Accordion
        img={accImg}
          headers={["Seçme ve Yerleştirme Danışmanlığı", "Koçluk ve Kariyer Danışmanlığı Hizmetleri", "İnsan Kaynakları Organizasyonel Yapılanma Projeleri", "Teknik Analiz ve Uygulama Testleri"]}
          contents={[
            <ul>
              <li>Müşteri Talebi</li>
              <li>Analiz ve Pozisyonu Tamamlama</li>
              <li>Araştırma ve Uzun Liste Oluşturma</li>
              <li>Kısa Liste Oluşturma</li>
              <li>Adaylarla Öngörüşme ve Değerlendirme</li>
              <li>SoftXpress Mülakat Organizasyonları ( Birebir görüşmeler)</li>
              <li>Seçilen uygun adayları Müşteriye Raporlama</li>
              <li>Müşteri Görüşmeleri & Organizasyonu</li>
              <li>Müşteri geri bildirimlerine göre süreç takibi</li>
              <li>Referans Süreci</li>
              <li>Aday ve Müşteri Danışmanlığı</li>
              <li>Teklif Sürec Yönetimi</li>
              <li>Adayın İşe Giriş Süreci</li>
              <li>SoftXpress danışmanlık desteği</li>
            </ul>,
            <ul>
              <li>Yaşam Koçluğu</li>
              <li>Kariyer Koçluğu</li>
              <li>Vizyon ve Hedef Belirleme</li>
              <li>Kariyer Planlama</li>
              <li>Kariyer Yönetimi</li>
              <li>Kişisel Gelişim ve imaj</li>
              <li>İş ve Özel Yaşam Dengesi</li>
            </ul>,
            <ul>
              <li>Kurum Analizi / Çalışan Profili</li>
              <li>Kurumsal Yetkinliklerin Belirlenmesi</li>
              <li>İş Analizi ve İş Tanımları</li>
              <li>Seçme Yerleştirme Standartlarının Oluşturulması</li>
              <li>Personel Özlük işlerinin Standardizasyonu</li>
              <li>Ücret Yönetim Sistemi Oluşturulması</li>
              <li>Performans Yönetim Sistemi</li>
              <li>Yetenek Yönetimi ve Kariyer Planlama Sistemi</li>
              <li>Eğitim Sistemi</li>
              <li>Çalışan Memnuniyeti Değerlendirme Sistemi</li>
              <li>Organizasyonel Yedekleme</li>
              <li>Outplacement / Re-sizing / Downsizing</li>
            </ul>,
            <ul>
              <li>Yazılım Kod Analiz ve Yeterlilik Testleri</li>
              <li>Teknik Sorgulama</li>
            </ul>,
          ]}
        />
      </section>
    </>
  );
};

export default IkHizmetleri;
