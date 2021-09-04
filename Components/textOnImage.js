import styles from "../styles/Component.module.css";
const TextOnImage = ({ mainHeading, para, link, backgroundImage }) => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={styles.intro}
    >
      <div className={styles.overlay}>
        {/* <div className={styles.container}> */}
        <div className={styles.row}>
          <div className={styles.intro_text}>
            <h1>
              {mainHeading}
              <span></span>
            </h1>
            <p>{para}</p>
            <a href="#features" className="btn btn-custom btn-lg page-scroll">
              {link}
            </a>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default TextOnImage;
