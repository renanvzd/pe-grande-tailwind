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
        <div className="bg-[#090a46] w-screen">
          <Video
            titleYoutube="Moradas do Pé Grande &amp; Tramandaí"
            embedId="FM3zxdSJX5g"
          />
        </div>
      </Layout>
    </>
  );
};

export default LandingPage;
