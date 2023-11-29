type ImageWithTextProps = {
  imgLink: string;
  text: string;
  textType: "h1" | "h2" | "p";
};

const ImageWithText = ({ imgLink, text, textType }: ImageWithTextProps) => {
  return (
    <div>
      <img src={imgLink} alt={imgLink} />
      {textType == "h1" ? (
        <h1>{text}</h1>
      ) : textType == "h2" ? (
        <h2>{text}</h2>
      ) : textType == "p" ? (
        <p>{text}</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default ImageWithText;
