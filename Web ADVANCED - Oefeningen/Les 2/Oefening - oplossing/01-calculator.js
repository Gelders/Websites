/*
 * Maak een "calculator" object met daarin de volgende functies:
 *   - history: bijhouden van de input (array)
 *   - addNumber: nummer toevoegen aan de history
 *   - addOperator: operator (+, -, /, *) toevoegen aan de history
 *   - showHistory: history array weergeven in de HTML
 *   - clear: history leegmaken
 *   - calculate: berekening uit de history uitvoeren
 */

/*
 * Object 'calculator' aanmaken zodat we deze kunnen aanspreken in HTML
 */
var calculator = {
    /*
     * 'history' array aanmaken voor het opslaan van de waarden binnen de calculator
     */
    history: {
        /*
         * De effectieve array
         */
        elements: [],
        /*
         * 'toString' functie voor het plaatsen naar een string van de array
         * Formaat: 10*10/2
         */
        toString: function () {
            //  join functie gebruiken. Als parameter geven we een lege string mee (zodat we geen seperator krijgen)
            return this.elements.join('');
        }
    },
    /*
     * 'addNumber' functie voor het toevoegen van een getal
     * Verwacht 1 parameter 'number'. Dit is het getal dat toegevoegd moet worden aan de array
     */
    addNumber: function (number) {
        //  Lengte van de array opvragen
        //  'this.' voor history plaatsen om aan te geven dat het element 
        //  uit het bovenliggend element 'calculator' komt en niet uit de functie
        var lengte = this.history.elements.length;
        //  Indien lengte gelijk is aan 0 of het type van het laatste element niet gelijk is aan 'number'

        if (lengte === 0 || typeof this.history.elements[lengte - 1] !== 'number') {
            //  dan mag er een nieuw element gepushed worden in de array.
            this.history.elements.push(number);
        }
        else {
            //  Anders moeten we het laatste element vermenigvuldigen met 10 en het getal hierbij optellen
            //  Vb: 7 is het laaste element en we willen er 7 bijplaatsen => (7*10)+7 = 77
            this.history.elements[lengte - 1] = (this.history.elements[lengte - 1] * 10) + number;
        }

        //  Getoonde waarde refreshen (opnieuw afdrukken)
        this.showHistory();
    },
    /*
     * 'addOperator' functie voor het toevoegen van een operator (+, -, /, *)
     * Verwacht 1 parameter 'operator'. Dit is de operator die toegevoegd moet worden aan de array
     */
    addOperator: function (operator) {
        //  Controleren of er al elementen aanwezig zijn in de array
        if (this.history.elements.length > 0) {
            //  Indien er wel elementen aanwezig zijn => operator in de array plaatsen
            this.history.elements.push(operator);
        }
        else {
            //  Indien nog geen elementen aanwezig => een waarschuwing geven dat eerst een getal geplaatst moet worden
            alert("Gelieve eerst een getal in te geven");
        }

        //  Getoonde waarde refreshen (opnieuw afdrukken)
        this.showHistory();
    },
    /*
     * 'showHistory' functie voor het afdrukken van de 'history' array.
     */
    showHistory: function () {
        //  de waarde die de functie 'toString' genereerd in het HTML-element plaatsen
        document.getElementById('history').innerHTML = this.history.toString();
    },
    /*
     * 'clear' functie voor het leeg maken van de array en de 'schermen'
     */
    clear: function () {
        //  Array leeg maken
        this.history.elements.length = 0;
        //  History HTML-element leeg maken
        this.showHistory();
        //  Uitkomst HTML-element leeg maken
        this.calculate();
    },
    /*
     * 'calculate' functie voor het berekenen van de berekening in de array
     */
    calculate: function () {
        //  Controleren of er effectief iets in de history zit
        //  Er moeten minstens 3 elementen aanwezig zijn om een volledige berekening te kunnen uitvoeren
        if (this.history.elements.length < 3) {
            //  Indien er minder dan 3 elementen aanwezig zijn dan maken we het uitkomst element leeg
            document.getElementById('uitkomst').innerHTML = "";
            //  De functie calculate ook afbreken (de rest van de code wordt niet meer uitgevoerd)
            return;
        }
        //  'output' variabele aanmaken
        //  Initieel plaatsen we hierin al de eerste waarde van de array (eerste getal)
        var output = this.history.elements[0];
        //  Loopen over de elementen van de array
        //  Beginnen bij 1 want element 0 hebben we al in de output variabele geplaatst
        for (var i = 1; i < this.history.elements.length; i++) {
            //  Indien we op een even index zitten mogen we de rest van de code overslaan
            //  Dit omdat het element dan een getal is en we moeten pas actie ondernemen 
            //  als het element een operator is
            if (i % 2 === 0) {
                //  OPGELET: Geen 'break;' want dat zou de lus volledig afsluiten
                continue;
            }

            //  Kijken welke operator er gevraagd word
            switch (this.history.elements[i]) {
                case '+':
                    //  de waarde in output samentellen met de waarde van het volgende element uit de array
                    output += this.history.elements[i + 1];
                    break;
                case '*':
                    //  de waarde in output vermenigvuldigen met de waarde van het volgende element uit de array
                    output *= this.history.elements[i + 1];
                    break;
                case '-':
                    //  de waarde van het volgende element uit de array aftrekken van de waarde in output
                    output -= this.history.elements[i + 1];
                    break;
                case '/':
                    //  de waarde in output delen door de waarde van het volgende element uit de array
                    output /= this.history.elements[i + 1];
                    break;
            }
        }
        //  De uitkomst 'output' plaatsen in het HTML-element 'uitkomst'
        document.getElementById('uitkomst').innerHTML = output;
    }
}