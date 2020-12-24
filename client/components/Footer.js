import footerStyles from "../sass/footer.module.scss";

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerWave}></div>
      <div className={footerStyles.footerContainer}>
        <div className={footerStyles.footerContent}>
          <h1>@mathmorais</h1>
          <a title="github" href="https://github.com/mathmorais">
            <div className={footerStyles.icon}></div>
          </a>
        </div>
      </div>
    </footer>
  );
}
