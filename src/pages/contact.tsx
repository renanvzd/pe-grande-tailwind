import { Layout } from "@/components/Layouts/layout";
import { HeaderSubpage } from "@/components/header-subpages";
import { HeaderHomepage } from "@/components/Homepage/header";

const ContactPage = () => {
  return (
    <>
      <Layout
        title=""
        description=""
        content=""
      >
        <HeaderSubpage title="Contact" />
        <HeaderHomepage />

      </Layout>
    </>
  );
};

export default ContactPage;
