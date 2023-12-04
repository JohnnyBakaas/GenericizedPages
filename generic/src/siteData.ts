import { FooterProps } from "./components/footer/Footer";
import { HeaderProps } from "./components/header/Header";
import { PageData } from "./contracts/pageData";

type SiteDataPrps = {
  header: HeaderProps;
  footer: FooterProps;
};

export const siteData: SiteDataPrps = {
  header: {
    pageName: "Johnny Bakaas",
    logo: "https://media.licdn.com/dms/image/D4D35AQFJ3DVV699emA/profile-framedphoto-shrink_200_200/0/1695090205913?e=1701831600&v=beta&t=XHxBdIQdOpnTnE-9_mVEm9t5ibGnvCBfAc7oRcSLqjE",
    pages: [
      { name: "Om oss" },
      { name: "Om meg" },
      { name: "Hva vi har gjort" },
      { name: "Jobb for oss" },
    ],
  },
  footer: {
    sosialeMedier: {
      facebook: "/",
      instagram: "/",
      snapchat: "johnny-bakaas",
      linkedIn: "/",
      twitterX: "/",
    },
    adresse: "Øvreveg 14, 3801 Bø",
    adresseLink:
      "https://www.google.com/maps/place/%C3%98vreveg+14,+3801+B%C3%B8/@59.4030962,9.0788013,17z/data=!3m1!4b1!4m6!3m5!1s0x4647493df2f92609:0x8df3ed4069144baf!8m2!3d59.4030962!4d9.0788013!16s%2Fg%2F11cplb7b9t?entry=ttu",
    tlf: 90732947,
    epost: "Johnny@bakaas-cadconsult.no",
  },
};
