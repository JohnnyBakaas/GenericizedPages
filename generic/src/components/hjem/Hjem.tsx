import styles from "./Hjem.module.css";

export type HjemProps = {
  hjemImg: string;
  hjemImgTekst: string;
};

const Hjem = () => {
  return (
    <main>
      <div className={styles["hjem-img-wrapper"]}>
        <div className={styles["tekst-wrapper"]}>
          <div className={styles["tekst-container"]}>
            <h2>[Ditt slag ord her!]</h2>
            <p>[Har du noe mer å si? La oss høre det!]</p>
          </div>
        </div>
        <img
          src="https://64.media.tumblr.com/890dbb3579d662c3f85d63b092a01498/tumblr_msjepeJzfg1ru39xmo1_500.gif"
          alt=""
          className={styles["hjem-img"]}
        />
      </div>
    </main>
  );
};

export default Hjem;

/* 

*/
