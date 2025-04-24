import "../Resume_EN/Resume.css";
import "animate.css";
import React from "react";
import photo from "../../assets/photo.jpg";
import JScert from "../../assets/JScert.png";
import Frontcert from "../../assets/Frontcert.png";
import CV from "../../assets/Moje CV - Rafał Biliński.pdf";

const Resume = () => {
  return (
    <div className="container" id="resume">
      <div id="white-background" className="resume">
        <aside className="left-side">
          <img
            src={photo}
            alt="zdjęcie Rafał Biliński"
            width="350"
            className="photo"
            id="rafal-photo"
          />

          <section className="contacts">
            <div className="boxL">
              <h2 className="contacts-title">Kontakt</h2>
            </div>
            <ul className="contacts-list">
              <li className="contacts-item">
                Telefon: &nbsp;
                <a href="tel:+48784492400" className="contacts-link">
                  +48 784 492 400
                </a>
              </li>
              <li className="contacts-item">
                E-mail: &nbsp;
                <a
                  href="mailto:rafal.bilinski92@gmail.com"
                  className="contacts-link"
                >
                  {" "}
                  rafal.bilinski92@gmail.com
                </a>
              </li>
              <li className="contacts-item">
                LinkedIn:
                <a
                  href="https://www.linkedin.com/in/rafa%C5%82-bili%C5%84ski/"
                  className="contacts-link"
                >
                  in/rafał-biliński/
                </a>
              </li>
              <li className="contacts-item">
                GitHub: &nbsp;
                <a
                  href="https://github.com/RafalBilinski"
                  className="contacts-link"
                >
                  github.com/RafalBilinski
                </a>
              </li>
            </ul>
          </section>

          <section className="skills">
            <div className="boxL">
              <h2 className="skills-title">Języki</h2>
            </div>
            <ul className="skills-list">
              <li className="skills-item">Angielski B2+</li>
            </ul>
          </section>

          <section className="skills">
            <div className="boxL">
              <h2 className="skills-title">Tech Stack</h2>
            </div>
            <ul className="skills-list">
              <li className="skills-item">HTML + RWD, CSS/SAAS, JavaScript</li>
              <li className="skills-item">React framework</li>
              <li className="skills-item">Python Core, C++ basics</li>
              <li className="skills-item">PostgeSQL</li>
              <li className="skills-item">Chat GPT, MS CoPilot</li>
              <li className="skills-item">GitHub</li>
              <li className="skills-item">Visual Studio Code</li>
              <li className="skills-item">Jira, Canban</li>
              <li className="skills-item">MS Office</li>
            </ul>
          </section>

          <section className="skills">
            <div className="boxL">
              <h2 className="skills-title">Pozostałe Umiejętności</h2>
            </div>
            <ul className="skills-list">
              <li className="skills-item">
                Myślenie krytyczne, Analiza przyczyn źródłowych
              </li>
              <li className="skills-item">
                Analiza statystyczna danych i projektów &nbsp;biznesowych
              </li>
              <li className="skills-item">Zarządzanie zespołem</li>
              <li className="skills-item">Metodologia Agile: SCRUM</li>
            </ul>
          </section>

          <section className="widget">
            <a
              className="widget-link"
              href={CV}
              download="Rafal Bilinski CV PL.pdf"
            >
              Pobierz CV
            </a>
          </section>

          <section className="rodo">
            <h6>
              Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w
              tym dokumencie dla potrzeb obecnego jak i przyszłych procesów
              rekrutacji
            </h6>
          </section>
        </aside>

        <div className="right-side">
          <section className="bio">
            <div className="boxR">
              <h1 className="bio-title">Rafał Biliński</h1>
            </div>

            <p className="bio-about">
              Od zawsze interesuję się komputerami i kontrolerami. Posiadam
              <b>doświadczenie w tworzeniu aplikacji</b> dla techników
              serwisowych do obsługi zleceń.
              <b>
                Korzystam z MS CoPilot i Chat GPT, zachowując krytyczne
                podejście do uzyskanych wyników.
              </b>
              <br />
              Moją mocną stroną jest
              <b>umiejętność kreatywnego rozwiązywania problemów</b>i
              prowadzenie dokumentacji moich działań w zorganizowany sposób.
              Potrafię <b>zarządzać zespołem</b>i prezentować wyniki jego pracy,
              rozwiązując konflikty, gdy się pojawiają. Jestem
              <b>otwarty na nowe wyzwania</b>. Mam doświadczenie w rozmowach z
              klientem korporacyjnym
              <br />
              Moim obecnym celem zawodowym jest zdobycie doświadczenia w
              dziedzinie <b>analizy danych,</b> <b>uczenia maszynowego</b>i
              <b>frontendu</b>, aby rozwijać narzędzia związane z AI, które
              poprawią wskaźnik efektywności energetycznej i optymalizację
              procesów w przemyśle.
            </p>
          </section>

          <section className="projects">
            <div className="boxR">
              <h2 className="projects-title">Projekty i Certyfikaty</h2>
            </div>
            <ul>
              <li className="projects-item">
                <span className="accent">
                  <b>
                    Własny projekt pompy ciepła z pełnym sterowaniem inwerterowym
                  </b>
                </span>
              </li>
              <li className="projects-item">
                <span className="accent">
                  <b>Platforma do zarządzania i raportowania zleceń serwisowych </b>
                </span>
              </li>

              <li id="certificate-grid">
                <p>
                  <span className="accent">JavaScript</span>
                </p>
                <a
                  href="https://www.freecodecamp.org/certification/Bilinski_Rafal/javascript-algorithms-and-data-structures-v8"
                  title="Przejdź do https://www.freecodecamp.org aby zobaczyć więcej"
                >
                  <img
                    src={JScert}
                    alt="Certyfikat JS Kod QR"
                    width="80"
                    className="photo"
                    id="js-cert"
                  />
                </a>
                <p>
                  <span className="accent">Frontend</span>
                </p>
                <a
                  href="https://www.freecodecamp.org/certification/Bilinski_Rafal/front-end-development-libraries"
                  title="Przejdź do https://www.freecodecamp.org aby zobaczyć więcej"
                >
                  <img
                    src={Frontcert}
                    alt="Certyfikat Frontend Kod QR"
                    width="80"
                    className="photo"
                    id="Frontend-cert"
                  />
                </a>
                <p>
                  <span className="accent">Azure AZ900</span>
                </p>
                <p>
                  <span className="accent">W trakcie realizacji</span>
                </p>
              </li>
            </ul>
          </section>

          <section className="jobs">
            <div className="boxR">
              <h2 className="education-title">Doświadczenie zawodowe</h2>
            </div>

            <h3 className="jobs-occupation">
              Inżynier automatyk / analityk / doradca techniczny <br />
              <span className="accent">
                Automatyka chłodnicza ZRO-BILI Rafał Biliński
              </span>
            </h3>
            <p className="jobs-time">Listopad 2018 - Obecnie</p>

            <ul className="experience">
              <li className="experience-item">
                Tworzenie aplikacji, która pomaga przydzielać zadania technikom
                serwisowym
              </li>
              <li className="experience-item">
                Tworzenie aplikacji, która pomaga w obsłudze zleceń przez
                techników serwisowych
              </li>
              <li className="experience-item">
                Rozwój algorytmów sterowania i optymalizacja procesów
              </li>
              <li className="experience-item">
                Praca na zbiorach danych z czujników fizycznych i korekta błędów
                warstwy programowej sterowników BMS
              </li>
              <li className="experience-item">
                Prowadzenie rozmów technicznych i biznesowych z klientami
                korporacyjnymi, kosztorysowanie projektów
              </li>
              <li className="experience-item">
                Prowadzenie szkoleń dla pracowników technicznych i biurowych
              </li>
              <li className="experience-item">
                Współpraca z: <em>Carel, Orlen, Jeronimo Martins, Amrest</em>
              </li>
            </ul>

            <h3 className="jobs-occupation">
              Główny Elektryk / inżynier automatyk
              <br />
              <span className="accent">
                Naprawa Urządzeń Chłodniczych Czesław Biliński
              </span>
            </h3>
            <p className="jobs-time">Czerwiec 2016 - Październik 2018</p>

            <ul className="experience">
              <li className="experience-item">
                Budowa projektów od podstaw: analiza biznesowa, wdrożenie,
                wprowadzanie poprawek i dokumentacja powykonawcza
              </li>
              <li className="experience-item">
                Cyfryzacja obiegu danych i dokumentacji oraz szkolenie personelu
              </li>
              <li className="experience-item">
                Analiza danych dotyczących działania systemów chłodniczych i
                korekta parametrów systemu
              </li>
              <li className="experience-item">
                Koordynacja działań serwisowych i logistycznych w województwach
                dolnośląskim i opolskim
              </li>
              <li className="experience-item">
                Diagnostyka i serwis automatyki zabezpieczeń wraz z
                monitoringiem
              </li>
            </ul>
          </section>

          <section className="education">
            <div className="boxR">
              <h2 className="education-title">Wykształcenie</h2>
            </div>

            <h3 className="education-degree">
              Magister inżynier - Elektrotechnika: Automatyka przemysłowa
              <br />
              <span className="accent">Politechnika Wrocławska</span>
            </h3>
            <p className="education-time">Październik 2014 - Czerwiec 2016</p>

            <h3 className="education-degree">
              Inżynier: Elektrotechnika
              <br />
              <span className="accent">Politechnika Wrocławska</span>
            </h3>
            <p className="education-time">Październik 2011 - Czerwiec 2014</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
