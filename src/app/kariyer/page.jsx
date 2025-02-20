import React from 'react';
import { FeaturedSection } from '@/app/components/featuredSection/featuredSection';
import { ParagraphHeading, SectionParagraph } from '@/app/components/sectionComponents/sectionComponents';
import { mainNavigation, topNavigation } from '@/app/navigation';
import featured from '@pub/images/kariyer.png';
import img1 from '@pub/images/15774.jpg';
import img2 from '@pub/images/14936.jpg';
import img3 from '@pub/images/17063.jpg';
import office from '@pub/images/2149034544.jpg';
import { MiniParagraph, MiniParagraphContainer } from '@/app/components/sectionComponents/sectionComponents';
import Seo from '@/app/components/seo/seo';
export const metadata = Seo(topNavigation.kariyer);
const Kariyer = () => {
  const route = ['kariyer'];
  return (
    <>
      <section>
        <FeaturedSection route={route} nav={topNavigation} image={featured} firstWidth="6" secondWith="6" className="animated fadeInDown animate-helper">
          <ParagraphHeading>
            <h6>Kariyerinize Softxpress ile Yön Verin</h6>
            <h4>Neden Softxpress?</h4>
          </ParagraphHeading>
          <p>Softxpress'te, yenilikçi fikirler ve çözümler üreten, sektörün öncü isimleriyle çalışma fırsatı bulacaksınız. Veri analizi, süreç yönetimi, yazılım geliştirme ve daha birçok alanda faaliyet gösteren şirketimiz, sizlere kariyer yolculuğunuzda rehberlik edecek zengin deneyimler vaat ediyor. Şirketimizde çalışarak, en güncel teknolojileri kullanma ve kendinizi sürekli geliştirme şansına sahip olacaksınız. Softxpress, çalışanlarına eğitim programları ve mentorluk desteği sunarak profesyonel gelişimlerini destekler. Softxpress'te, yaratıcılığınızı ve girişimci ruhunuzu teşvik eden bir kültürde yer alarak, kariyerinizi bir üst seviyeye taşıyabilirsiniz.</p>
        </FeaturedSection>
      </section>
      <section>
        <SectionParagraph image={img1} firstWidth="5" secondWith="7" className="animated fadeInLeft animate-helper">
          <ParagraphHeading>
            <h6>En büyük değerimiz ekibimiz</h6>
            <h4>Biz Kimiz?</h4>
          </ParagraphHeading>
          <p>Biz, sürekli öğrenen, büyüyen ve gelişen bir topluluk olarak, teknolojinin ve verinin gücüne inanıyoruz. Ekip çalışmasına ve karşılıklı büyümeye dayalı kültürümüzle her bir çalışanımızın kariyer hedeflerine ulaşmasını sağlıyoruz. Kariyer Fırsatları Softxpress, her seviyeden profesyonelin kendi yolunu çizebileceği çeşitli kariyer fırsatları sunar. Giriş seviyesinden üst düzey yöneticilere kadar herkes için bir yer var.</p>
        </SectionParagraph>
        <SectionParagraph image={img2} firstWidth="5" secondWith="7" className="animated fadeInRight animate-helper" reverse>
          <ParagraphHeading>
            <h6>Ekibimizin Gözünden Softxpress</h6>
            <h4>Çalışanlarımız Ne Diyor? </h4>
          </ParagraphHeading>
          <p>Ekibimiz, yenilikçi projeler üzerinde çalışmanın, kariyerlerini ileriye taşıyan deneyimler kazandıklarını ve şirketin kendilerine sunduğu gelişim olanaklarından memnun olduklarını belirtiyor. Eğitim ve Gelişim Kariyerinizin her aşamasında, sizlere eğitim ve kişisel gelişim programları sunuyoruz. Böylece hem profesyonel becerilerinizi hem de kişisel yeteneklerinizi geliştirebilirsiniz.</p>
        </SectionParagraph>
        <SectionParagraph image={img3} firstWidth="5" secondWith="7" className="animated fadeInLeft animate-helper">
          <ParagraphHeading>
            <h6>Sizi de aramıza Bekliyoruz</h6>
            <h4>Bizimle Nasıl İlgili Olabilirsiniz?</h4>
          </ParagraphHeading>
          <p>Kariyer sayfamızı ziyaret ederek açık pozisyonlarımıza göz atabilir, ilginizi çeken roller için başvuruda bulunabilirsiniz. Biz, Softxpress olarak, siz değerli profesyonelleri aramızda görmek için sabırsızlanıyoruz. Kariyer yolculuğunuzda sizlere eşlik etmek ve birlikte büyümek için buradayız. İletişim ve Başvuru İçin: Kariyer fırsatlarımız hakkında daha fazla bilgi almak ve başvurularınızı yapmak için Softxpress Kariyer Sayfası adresini ziyaret edebilirsiniz.</p>
        </SectionParagraph>
      </section>
      <section className="blue-bg">
        <MiniParagraphContainer image={office} firstWidth={4} secondWith={8}>
          <MiniParagraph>
            <h6>Açık Pozisyonlar </h6>
            <ul>
              <li>Veri Bilimci</li>
              <li>Yazılım Mühendisi</li>
              <li>Proje Yöneticisi</li>
              <li>Ürün Yöneticisi</li>
              <li>Müşteri İlişkileri Uzman</li>
            </ul>
          </MiniParagraph>
          <MiniParagraph>
            <h6>Softxpress'te Kariyer Yapmak İçin</h6>
            <ul>
              <li>Yenilikçi ve dinamik bir çalışma ortamı </li>
              <li>Kariyerinizi ileriye taşıyacak projeler </li>
              <li>Mesleki ve kişisel gelişim imkanları </li>
              <li>Takım çalışmasına ve çeşitliliğe önem veren bir kültür</li>
            </ul>
          </MiniParagraph>
        </MiniParagraphContainer>
      </section>
    </>
  );
};

export default Kariyer;
