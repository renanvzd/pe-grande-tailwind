import { Layout } from "@/components/Layouts/layout";
import CardsHome from "@/components/cards-home";
import CarouselHome from "@/components/carousel-home";

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
      </Layout>
    </>
  );
};

export default LandingPage;
