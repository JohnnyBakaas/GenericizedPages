import Header from "./components/header/Header";
import { siteData } from "./siteData";
import ScrollToTop from "./components/ScrollToTop";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  const data = siteData;

  return (
    <>
      <ScrollToTop /> {/*hvis man vil ha det*/}
      <Header
        pageName={data.header.pageName}
        logo={data.header.logo}
        pages={data.header.pages}
      />
      <Outlet />
      <Footer
        sosialeMedier={data.footer.sosialeMedier}
        adresse={data.footer.adresse}
        adresseLink={data.footer.adresseLink}
        tlf={data.footer.tlf}
        epost={data.footer.epost}
      />
    </>
  );
}

export default App;
