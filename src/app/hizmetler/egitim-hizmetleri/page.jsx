import React from 'react';
import { FeaturedSection } from '../../components/featuredSection/featuredSection';
import { ParagraphHeading, SectionParagraph } from '../../components/sectionComponents/sectionComponents';
import { mainNavigation } from '../../navigation';
import featured from '@pub/images/16433.jpg';
import img1 from '@pub/images/42716.jpg';
import img2 from '@pub/images/16288.jpg';
import img3 from '@pub/images/5218.jpg';
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(mainNavigation.hizmetler.sub['egitim-hizmetleri']);
const EgitimHizmetleri = () => {
  const route = ['hizmetler', 'egitim-hizmetleri'];
  return (
    <>
      <section>
        <FeaturedSection route={route} nav={mainNavigation} image={featured} firstWidth="6" secondWith="6" className="animated fadeInDown animate-helper">
          <ParagraphHeading>
            <h6>Veri Dünyasında Uzmanlaşın</h6>
            <h4>Veritabanı ve İş Zekası Eğitimleri</h4>
          </ParagraphHeading>
          <p>Veritabanı ve iş zekası konularında yetkin eğitimler sunuyoruz. Oracle, SQL Server, MySQL ve PostgreSQL veritabanları üzerine yoğunlaşıyoruz. Eğitimlerimiz, veri ambarı ve iş zekası konularını kapsamlı bir şekilde ele alır. Katılımcılar, bu popüler veritabanı sistemleri ile çalışmayı öğrenirler. Ayrıca, veri analizi ve raporlama becerilerini geliştirirler. Eğitimlerimizle, iş süreçlerini daha verimli hale getirmenize yardımcı olmayı amaçlıyoruz.</p>
        </FeaturedSection>
      </section>
      <section>
        <SectionParagraph image={img1} firstWidth="5" secondWith="7" className="animated fadeInLeft animate-helper">
          <ParagraphHeading>
            <h6>Geleceğinizi Şekillendirin</h6>
            <h4>Yazılım Teknolojileri Eğitimleri</h4>
          </ParagraphHeading>
          <p>Yazılım teknolojileri konusunda geniş kapsamlı eğitim programları düzenliyoruz. Eğitimlerimiz, orta katman ürünlerine odaklanarak katılımcılara derinlemesine bilgi sağlar. Programlarımız, modern yazılım teknolojilerinin tüm yönlerini kapsar. Katılımcılar, bu teknolojileri etkili bir şekilde kullanmayı öğrenirler. Eğitimlerimizle, yazılım geliştirme süreçlerinde becerilerinizi üst düzeye taşıyabilirsiniz. Hedefimiz, geleceğin yazılım profesyonellerini yetiştirmektir.</p>
        </SectionParagraph>
        <SectionParagraph image={img2} firstWidth="5" secondWith="7" className="animated fadeInRight animate-helper" reverse>
          <ParagraphHeading>
            <h6>Özgür Teknolojiler ve DevOps Kültürü</h6>
            <h4>Açık Kaynak ve DevOps Eğitimleri</h4>
          </ParagraphHeading>
          <p>Açık kaynak ve DevOps konularında profesyonel eğitimler sunuyoruz. Eğitimlerimiz, başarılı bir şekilde açık kaynaklı yazılım çözümlerini öğrenmenizi ve uygulamanızı sağlar. Katılımcılar, bu alandaki en iyi uygulamaları keşfederler. Programlarımız, DevOps süreçlerinin etkin yönetimini de kapsar. Böylece, yazılım geliştirme ve dağıtım süreçlerini optimize edebilirsiniz. Amacımız, katılımcıları geleceğin teknoloji dünyasına hazırlamaktır.</p>
        </SectionParagraph>
        <SectionParagraph image={img3} firstWidth="5" secondWith="7" className="animated fadeInLeft animate-helper">
          <ParagraphHeading>
            <h6>Bilgi Sistemlerinizi Güçlendirin</h6>
            <h4>Sistem Analizi</h4>
          </ParagraphHeading>
          <p>Sistem analizi eğitimleri, katılımcılara bilgi sistemlerini planlama, geliştirme ve iyileştirme konularında gerekli becerileri kazandırmayı amaçlar. Sistem Analizi Eğitiminde, "iş süreçlerinin anlaşılması ve belirlenmesi", "proje tabanlı öğrenme ve uygulama","İş zekası ve veri analitiği kavramları.","Modelleme araçları, gereksinim yönetimi yazılımları ve veritabanı araçları" gibi başlıklar üzerinden ilerliyor olacağız.</p>
        </SectionParagraph>
      </section>
    </>
  );
};

export default EgitimHizmetleri;
