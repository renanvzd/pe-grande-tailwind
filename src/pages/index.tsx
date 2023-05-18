import { Layout } from "@/components/Layouts/layout";
import { HeaderHomepage } from "@/components/Homepage/header";
import { FirstSectionHomePage } from "@/components/Homepage/first-section";

const LandingPage = () => {
  return (
    <>
      <Layout
        title=""
        description=""
        content=""
      >
        <HeaderHomepage />
        <FirstSectionHomePage />
      </Layout>
    </>
  );
};

export default LandingPage;
