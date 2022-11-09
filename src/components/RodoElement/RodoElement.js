import Title from '../UI/Title';
import classes from './RodoElement.module.css';

const RodoElement = () => {
  return (
    <>
      <Title text="Dane osobowe / Rodo" />
      <div className={classes.rodo}>
        <p>
          Wykonując obowiązek opisany w art. 13 ust. 1 i 2 Rozporządzenie
          Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016
          r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
          osobowych i w sprawie swobodnego przepływu takich danych oraz
          uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)
          (Dz. U. UE. L. z 2016 r. Nr 119, str. 1 z późn. zm.). (RODO)
          informuję, że:
        </p>
        <ol className={classes.rodoOrderList}>
          <li className={classes.rodoList}>
            1. Administratorem Państwa danych osobowych jest: radca prawny
            Maciej Sadłek ul. Słoneczna 626, 43-384 Jaworze.
          </li>
          <li className={classes.rodoList}>
            2. Państwa dane osobowe będą przetwarzane w celu wykonania umowy o
            udzielenie pomocy prawnej, w tym udzielenia porady prawnej,
            sporządzenia opinii prawnych oraz dochodzenia roszczeń, zgodnie z
            zasadami określonymi przez przepisy powszechnie obowiązującego
            prawa. Przetwarzamy Państwa dane osobowe w oparciu o zasady
            przetwarzania danych osobowych określone w art. 5 RODO.
          </li>
          <li className={classes.rodoList}>
            3. Przetwarzanie danych osobowych odbywa się na podstawie :
            <ol>
              <li className={classes.rodoSubList}>
                3.1. art. 6 ust. 1 lit. b RODO, który stanowi, że dozwolone jest
                przetwarzanie danych osobowych w zakresie, w jakim jest to
                niezbędne do wykonania umowy albo jest to niezbędne do podjęcia
                działań na żądanie osoby, której dane dotyczą, przed zawarciem
                umowy. W danym przypadku zgoda obejmuje przetwarzanie Państwa
                danych osobowych w celu świadczenia pomocy prawnej.
              </li>
              <li className={classes.rodoSubList}>
                3.2. na podstawie art. 6 ust. 1 lit. c RODO tj.: przetwarzanie
                jest niezbędne do wypełnienia obowiązku prawnego ciążącego na
                Administratorze np. wystawienie faktury w zakresie świadczonych
                usług, konieczność przechowywania dokumentacji
                finansowo-księgowej przez określony przepisami prawa okres
                czasu.
              </li>
              <li className={classes.rodoSubList}>
                3.3. art. 6 ust. 1 lit. f RODO (cele wynikające z prawnie
                uzasadnionych interesów realizowanych przez Administratora:
                dochodzenie, ustalenie i obrona przed roszczeniami, udzielanie
                odpowiedzi na pytania/wnioski Klienta, archiwizowanie danych).
                Jeżeli podstawą prawną przetwarzania danych jest art. 6 ust. 1
                lit. f RODO, macie Państwo możliwość wniesienia sprzeciwu wobec
                przetwarzania Państwa danych osobowych. Przyczyną złożonego
                sprzeciwu powinna być Państwa szczególna sytuacja. Po otrzymaniu
                takiego żądania przestaniemy przetwarzać Państwa dane w
                powyższych celach, co do których został wyrażony sprzeciw, o ile
                nie wykażemy istnienia ważnych prawnie uzasadnionych podstaw do
                przetwarzania, nadrzędnych wobec Państwa interesów, praw i
                wolności lub podstaw do ustalenia, dochodzenia lub obrony przed
                roszczeniami.
              </li>
            </ol>
          </li>
          <li className={classes.rodoList}>
            4. Dane, które mogą być przetwarzane to imię i nazwisko, firma, dane
            adresowe, numery identyfikacyjne PESEL, REGON lub NIP, nr telefonu,
            adres email, nr konta bankowego.
          </li>
          <li className={classes.rodoList}>
            5. Podanie przez Państwa danych osobowych jest dobrowolne ale
            jednocześnie jest konieczne dla świadczenia pomocy prawnej.
          </li>
          <li className={classes.rodoList}>
            6. Odbiorcami danych osobowych mogą być pracownicy Administratora
            oraz współpracujący z nim adwokaci i radcowie prawni, sądy,
            komornicy sądowy organy administracji, organy ścigania, oraz inne
            instytucje, których udział w danej sprawie jest uzasadniony, a także
            dalsi pełnomocnicy oraz pozostałe strony postępowań sądowych i
            administracyjnych, podmioty świadczące usługi pocztowe i przesyłki
            kurierskie.
          </li>
          <li className={classes.rodoList}>
            7. Powierzone dane osobowe będą przetwarzane do czasu zakończenia
            wszystkich czynności uzasadnionych w celu świadczenia pomocy
            prawnej, albo do momentu rezygnacji z dalszego prowadzenia pomocy
            prawnej w danej sprawie. Przetwarzanie w zakresie przechowywania i
            przeglądania danych nie będzie ograniczone w czasie z uwagi na
            obowiązek unikania konfliktu interesów przez radcę prawnego.
          </li>
          <li className={classes.rodoList}>
            8. Przysługuje Państwu prawo dostępu do treści swoich danych
            osobowych, prawo do ich sprostowania, usunięcia (w zakresie
            przekraczającym dane niezbędne do ustalenia tożsamości, tj. imię,
            nazwisko, adres, numery identyfikacyjne PESEL, REGON lub NIP), jak i
            również prawo do ograniczenia ich przetwarzania/ prawo do cofnięcia
            zgody, prawo do przenoszenia danych, prawo do wniesienia sprzeciwu
            wobec przetwarzania Państwa danych osobowych.
          </li>
          <li className={classes.rodoList}>
            9. Przysługuje Państwu prawo wniesienia skargi do organu
            nadzorczego, Państwa zdaniem, przetwarzanie danych osobowych
            Pani/Pana – narusza przepisy unijnego rozporządzenia RODO.
          </li>
          <li className={classes.rodoList}>
            10. Państwa dane osobowe nie będą przez nas przetwarzane w sposób,
            który skutkowałby zautomatyzowanym podejmowaniem decyzji, w tym
            profilowaniem. Oznacza to, że nie wykorzystujemy systemów
            informatycznych, które gromadziłyby informacje na temat naszych
            Klientów i jednocześnie samodzielnie, automatycznie, podejmowałyby
            decyzje, które mogłyby wywołać wobec naszego Klienta skutki prawne
            lub w podobny sposób istotnie na Państwa wpływać.
          </li>
          <li className={classes.rodoList}>
            11. Państwa dane osobowe nie będą przekazywane do państw trzecich
            ani organizacji międzynarodowych.
          </li>
          <li className={classes.rodoList}>
            12. W przypadku pytań dotyczących przetwarzania danych osobowych
            proszę o kontakt za pośrednictwem poczty elektronicznej na adres
            maciej.sadlek@gmail.com telefonicznie pod numerem tel. kom. 535 500
            170, lub pisemnie na adres firmy: RADCA PRAWNY Maciej Sadłek, ul.
            Słoneczna 626, 43-384 Jaworze.
          </li>
        </ol>
      </div>
    </>
  );
};

export default RodoElement;
