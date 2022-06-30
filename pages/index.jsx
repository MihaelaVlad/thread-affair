import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CatalogPreviews from '../components/homepage/CatalogPreviews';
import ContentBanner from '../components/Homepage/ContentBanner';
import HomeNewsletter from '../components/homepage/HomeNewsletter';
import HomePayment from '../components/homepage/HomePayment';
import HomeSocial from '../components/homepage/HomeSocial';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thread Affair</title>
      </Head>

      <Header></Header>

      <main className="content">
        <header className="content-header mb-5">
          <ContentBanner></ContentBanner>
        </header>

        <secction className="content-main">
          <CatalogPreviews></CatalogPreviews>

          <HomeNewsletter></HomeNewsletter>

          <HomeSocial></HomeSocial>

          <HomePayment></HomePayment>
        </secction>
      </main>

      <Footer></Footer>
    </div>
  );
}
