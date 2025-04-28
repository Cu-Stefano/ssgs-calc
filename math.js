const readline = require('readline');

/* istanbul ignore next */
function startCalculator() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Benvenuto! \nScegliere l'operazione da eseguire: \n 1. Addizione \n 2. Sottrazione \n 3. Moltiplicazione \n 4. Divisione \n 5. Esci");

    rl.question("Scegliere l'operazione da eseguire: ", (scelta) => {
        if (parseInt(scelta) === 5) {
            console.log("Arrivederci!");
            rl.close();
            return;
        }

        rl.question("Inserire il primo numero: ", (num1) => {
            rl.question("Inserire il secondo numero: ", (num2) => {
                let result = 0;
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);

                try {
                    switch (parseInt(scelta)) {
                        case 1:
                            result = sum(num1, num2);
                            console.log("Il risultato è: " + result);
                            break;
                        case 2:
                            result = subtract(num1, num2);
                            console.log("Il risultato è: " + result);
                            break;
                        case 3:
                            result = multiply(num1, num2);
                            console.log("Il risultato è: " + result);
                            break;
                        case 4:
                            result = divide(num1, num2);
                            console.log("Il risultato è: " + result);
                            break;
                        default:
                            console.log("Scelta non valida");
                            break;
                    }
                } catch (error) {
                    console.error("Errore: " + error.message);
                }

                rl.close();
            });
        });
    });
}

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

module.exports = { sum, subtract, multiply, divide };


/* istanbul ignore next */
if (require.main === module) {
    startCalculator();
}