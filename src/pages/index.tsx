import { Layout } from "@/components/Layouts/layout";
import CardsHome from "@/components/Homepage/cards-home";
import CarouselHome from "@/components/Homepage/carousel-home";
import { Video } from "@/components/video";

const LandingPage = () => {
  return (
    <>
      <Layout
        title=""
        description=""
        content=""
      >
        <CarouselHome />
        <CardsHome />
        <Video
          titleYoutube="Moradas do Pé Grande &amp; Tramandaí"
          embedId="FM3zxdSJX5g"
        />
      </Layout>
    </>
  );
};

export default LandingPage;
