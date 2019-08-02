/*
 *  -   Voeg een 'init' propertie toe die dienst doet als functie. 
 *  -   Hierbinnen loop je over de knoppen van de calculator.
 *  -   Per knop kijk je wat de waarde van de knop is, en koppel je de juiste event (functie)
 */
var calculator = {
    history: {
        elements: [],
        toString: function () {
            return this.elements.join('');
        }
    },
    addNumber: function (number) {
        var lengte = this.history.elements.length;

        if (lengte === 0 || typeof this.history.elements[lengte - 1] !== 'number') {
            this.history.elements.push(number);
        }
        else {
            this.history.elements[lengte - 1] = (this.history.elements[lengte - 1] * 10) + number;
        }

        this.showHistory();
    },
    addOperator: function (operator) {
        if (this.history.elements.length > 0) {
            this.history.elements.push(operator);
        }
        else {
            alert("Gelieve eerst een getal in te geven");
        }

        this.showHistory();
    },
    showHistory: function () {
        document.getElementById('history').innerHTML = this.history.toString();
    },
    clear: function () {
        this.history.elements.length = 0;
        this.showHistory();
        this.calculate();
    },
    calculate: function () {
        if (this.history.elements.length < 3) {
            document.getElementById('uitkomst').innerHTML = "";
            return;
        }
        var output = this.history.elements[0];
        for (var i = 1; i < this.history.elements.length; i++) {
            if (i % 2 === 0) {
                continue;
            }

            switch (this.history.elements[i]) {
                case '+':
                    output += this.history.elements[i + 1];
                    break;
                case '*':
                    output *= this.history.elements[i + 1];
                    break;
                case '-':
                    output -= this.history.elements[i + 1];
                    break;
                case '/':
                    output /= this.history.elements[i + 1];
                    break;
            }
        }
        document.getElementById('uitkomst').innerHTML = output;
    }
}