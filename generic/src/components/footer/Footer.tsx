import styles from "./Footer.module.css";
import SosialeMedierColection, {
  SosialeMedierColectionProps,
} from "../sosialeMedierColection/SosialeMedierColection";

export type FooterProps = {
  sosialeMedier?: SosialeMedierColectionProps;
  adresse?: string;
  adresseLink?: string;
  tlf?: number;
  epost?: string;
};

const Footer = ({
  sosialeMedier,
  adresse,
  adresseLink,
  epost,
  tlf,
}: FooterProps) => {
  return (
    <footer className={styles["wrapper"]}>
      {sosialeMedier && (
        <SosialeMedierColection
          facebook={sosialeMedier.facebook}
          instagram={sosialeMedier.instagram}
          snapchat={sosialeMedier.snapchat}
          linkedIn={sosialeMedier.linkedIn}
          twitterX={sosialeMedier.twitterX}
        />
      )}

      {adresse && (
        <div className={styles["sub-wrapper"]}>
          <h2>Adresse:</h2>
          <a href={adresseLink}>
            <h2>{adresse}</h2>
          </a>
        </div>
      )}

      {epost && (
        <div className={styles["sub-wrapper"]}>
          <h2>Epost:</h2>
          <a href={`mailto:${epost}`}>{makeEmailList(epost)}</a>
        </div>
      )}

      {tlf && (
        <div className={styles["sub-wrapper"]}>
          <h2>Tlf:</h2>
          <a href={`tel:+47${tlf}`}>
            <h2>{makePhoneNumber(tlf)}</h2>
          </a>
        </div>
      )}
    </footer>
  );
};

export default Footer;

const makeEmailList = (epost: string) => {
  const elements = [];
  let keyCounter = 0;

  for (let i = 0; i < epost.length; i++) {
    if (!/[a-åA-Å]/.test(epost[i])) elements.push(<wbr key={keyCounter++} />);
    elements.push(epost[i]);
    if (!/[a-åA-Å]/.test(epost[i])) elements.push(<wbr key={keyCounter++} />);
  }

  return <h2>{elements}</h2>;
};

const makePhoneNumber = (tlf: number) => {
  const tlfString = `${tlf}`;
  let outString = "+47 ";
  for (let i = 0; i < tlfString.length; i++) {
    if (!(i % 2)) outString += " ";
    outString += tlfString[i];
  }
  return outString;
};
