import questionCardStyles from "../sass/questioncard.module.scss";

export default function QuestionCard() {
  return (
    <div className={questionCardStyles.container}>
      <div className={questionCardStyles.questionCard}>
        <h1>O que é o “Finder by CEP”?</h1>
        <p>
          Se voce está tendo problemas para achar um endereço pelo CEP esse site
          é para você!
        </p>
        <p>
          Finder by CEP é um sistema para encontrar informações completas de um
          endereço pelo CEP.
        </p>
        <h1>Como eu posso usar?</h1>
        <p>
          Para usar a aplicação é bem simples, basta inserir o CEP no “Finder”
          abaixo e aguardar o resultado.
        </p>
      </div>
      <div className={questionCardStyles.imageContainer}></div>
    </div>
  );
}
