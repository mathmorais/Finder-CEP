import headerStyles from "../sass/header.module.scss";

export default function Header() {
  return (
    <header className={headerStyles.container}>
      <div className={headerStyles.headerContent}>
        <h1>Finder by CEP</h1>
      </div>
    </header>
  );
}
