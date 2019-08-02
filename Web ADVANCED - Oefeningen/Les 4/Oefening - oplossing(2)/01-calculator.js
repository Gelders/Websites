/*
 *  -   Maak van calculator een IIFE functie
 *  -   Verwijder de 'init' functie en laat de eventHanderls direct in de IIFE koppelen
 *  -   Maak van history een private variabele
 */

var calculator = (function () {
    var history = {
        elements: [],
        toString: function () {
            return this.elements.join('');
        }
    };

    window.onload = function () {
        var knoppen = document.querySelectorAll('#calculator .button-container button');

        for (var i in knoppen) {
            knoppen[i].onclick = function () {
                var waarde = this.innerHTML;

                if (!isNaN(waarde)) {
                    addNumber(parseInt(waarde));
                } else if (waarde === "C") {
                    clear();
                } else if (waarde === "=") {
                    calculate();
                } else {
                    addOperator(waarde);
                }
            };
        }
    };

    var showHistory = function () {
        document.getElementById('history').innerHTML = history.toString();
    }

    var addNumber = function (number) {
        var lengte = history.elements.length;

        if (lengte === 0 || typeof history.elements[lengte - 1] !== 'number') {
            history.elements.push(number);
        }
        else {
            history.elements[lengte - 1] = (history.elements[lengte - 1] * 10) + number;
        }

        showHistory();
    }
    var addOperator = function (operator) {
        if (history.elements.length > 0) {
            history.elements.push(operator);
        }
        else {
            alert("Gelieve eerst een getal in te geven");
        }

        showHistory();
    }
    var clear = function () {
        history.elements.length = 0;
        showHistory();
        calculate();
    }
    var calculate = function () {
        if (history.elements.length < 3) {
            document.getElementById('uitkomst').innerHTML = "";
            return;
        }
        var output = history.elements[0];
        for (var i = 1; i < history.elements.length; i++) {
            if (i % 2 === 0) {
                continue;
            }

            switch (history.elements[i]) {
                case '+':
                    output += history.elements[i + 1];
                    break;
                case '*':
                    output *= history.elements[i + 1];
                    break;
                case '-':
                    output -= history.elements[i + 1];
                    break;
                case '/':
                    output /= history.elements[i + 1];
                    break;
            }
        }
        document.getElementById('uitkomst').innerHTML = output;
    }

    return {
        addNumber: addNumber,
        addOperator: addOperator,
        clear: clear,
        calculate: calculate
    };
})();