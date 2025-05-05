# SSGS Calc

Un programma che esegue operazioni di base di una calcolatrice, come addizione, sottrazione, moltiplicazione e divisione.

## Prerequisiti

- **Node.js**: Assicurati di avere installato Node.js versione `>=18.0.0`.:
- **SO**: Testato su distribuzioni basate su Ubuntu.
## Installazione

-   Clonare la repo : git clone https://github.com/Cu-Stefano/ssgs-calc.git

-   Installare le dipendenze: npm install

## Utilizzo
Per avviare il programma assicurarsi di essere nella cartella gisuta (cd ssgs-calc).

Eseguire da riga di comando : node src/Main.js

Una volta eseguito il programma verrà chiesto all'utente di inserire il numero corrispondente all'operazione che si vuole eseguire e poi i due numeri su cui eseguire tale  operazione

## Test
Per eseguire i test e generare un report di code coverage, utilizza il comando: npm Test

Il report di coverage sarà generato con una pagina html nella directory coverage/lcov-report/index.html, e direttamente nel terminale.

## CI

Integrazione Continua (CI)
Questo progetto utilizza GitHub Actions per la Continuous Integration. La pipeline esegue i seguenti passaggi:

-   Installa le dipendenze.
-   Esegue i test con Jest.
-   Genera un report di code coverage.
-   Pubblica i risultati su GitHub Pages.