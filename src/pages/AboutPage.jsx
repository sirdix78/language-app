import React from "react";
import aboutKristi from "../images/about-kristi.webp";
import aboutAlfonso from "../images/about-alfonso.webp";

const AboutPage = () => {
  return (
    <>
      <div className="about-container">
        <div className="albanian-about">
          <img src={aboutKristi} className="about-img"></img>
          <h3>Pershendetje miq! </h3>
          <p>
            Unë jam Kristi, mesuesja juaj e gjuhes Shqipe. Aventura e të
            mësuarit të një gjuhe mund të jetë e vështirë, por dyert që hapen
            kur e arrini, bën që të vleje përpjekja. Kam më shumë se 7 vjet që
            udhëtoj nëpër botë dhe mësoj gjuhën time amtare, shpresoj që të
            inkurajoheni të filloni kursin, nuk do të pendoheni. Shkoni për të!
          </p>
        </div>

        <div className="spanish-about">
          <img src={aboutAlfonso} className="about-img"></img>
          <h3>Hey, ¿cómo lo llevas? </h3>
          <p>
            Soy Alfonso, tu profesor de español. Siempre he tenido vocación por
            los idiomas, y por enseñar a los demás la mejor manera de
            aprenderlos. Por eso llevo más de 10 años trabajando duro para que
            aprender un nuevo idioma no se convierta en una pesadilla. Démosle
            caña y nos vemos en las clases. ¡Vamos allá!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
