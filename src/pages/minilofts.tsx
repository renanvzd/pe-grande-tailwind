import { Layout } from "@/components/Layouts/layout";
import CarouselMinilofts from "@/components/Moradas/carousel-moradas";
import Description from "@/components/Moradas/description";
import Information from "@/components/Moradas/information";
import Introduction from "@/components/Moradas/introduction";
import { HeaderSubpage } from "@/components/header-subpages";

const Minilofts = () => {
  return (
    <>
      <Layout
        title=""
        description=""
        content=""
      >
        <HeaderSubpage title="Minilofts" />
        <div className="bg-[#cae0fc]">
          {/* <Introduction /> */}
          <Description />
          <CarouselMinilofts />
          <Information />
        </div>
      </Layout>
    </>
  );
};

export default Minilofts;
