import styles from "./OmMeg.module.css";
import { ReactNode } from "react";

type OmMegProps = {
  navn: string;
  bilde: string;
  omMegTekst: string | ReactNode;
};

const OmMeg = ({ navn, bilde, omMegTekst }: OmMegProps) => {
  return (
    <main>
      <h1 className={styles["name"]}>{navn}</h1>
      <img src={bilde} alt={bilde} />
      {typeof omMegTekst == "string" ? <p>{omMegTekst}</p> : omMegTekst}
    </main>
  );
};

export default OmMeg;
