import styles from "./SosialeMedierColection.module.css";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Snapchat,
  TwitterX,
} from "./SosialeMedierIcons";

export type SosialeMedierColectionProps = {
  facebook?: string;
  instagram?: string;
  snapchat?: string;
  linkedIn?: string;
  twitterX?: string;
};

const SosialeMedierColection = ({
  facebook,
  instagram,
  snapchat,
  linkedIn,
  twitterX,
}: SosialeMedierColectionProps) => {
  const [snapClicked, setSnapClicked] = useState(false);
  const size = 100;

  const copyToClipboard = (snapNavn: string) => {
    navigator.clipboard.writeText(snapNavn);
    setSnapClicked(true);

    setTimeout(() => {
      setSnapClicked(false);
    }, 2000);
  };

  return (
    <div className={styles["wrapper"]}>
      {facebook && (
        <a href={facebook}>
          <Facebook dimentions={size} />
        </a>
      )}
      {instagram && (
        <a href={instagram}>
          <Instagram dimentions={size} />
        </a>
      )}
      {snapchat && (
        <div onClick={() => copyToClipboard(snapchat)}>
          <div
            className={
              snapClicked
                ? [styles["snap-copy"], styles["snap-show"]].join(" ")
                : [styles["snap-copy"], styles["snap-no-show"]].join(" ")
            }
          >
            <h2>Snap navn kopiert</h2>
          </div>

          <Snapchat dimentions={size} />
        </div>
      )}
      {linkedIn && (
        <a href={linkedIn}>
          <LinkedIn dimentions={size} />
        </a>
      )}
      {twitterX && (
        <a href={twitterX}>
          <TwitterX dimentions={size} />
        </a>
      )}
    </div>
  );
};

export default SosialeMedierColection;
