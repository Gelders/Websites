/*
 *  -   4 properties (functies) toevoegen voor het initialiseren, toevoegen, verwijderen en afvinken van items
 *  -   Toevoegen:
 *          Listitem element creëren met daarin een checkbox, textnode en verwijder link
 *  -   Verwijderen
 *          Verwijder link roept de functie 'verwijderen' op. 
 *          Als parameter wordt het event opgevangen (wordt standaard meegegeven)
 *              Dit event kan u gebruiken om te controleren welk item verwijderd moet worden
 *                  e.target.parentElement
 *  -   Afvinken
 *          CSS classe 'checked' toevoegen aan het listitem (via event-paramater)
 *              class toevoegen: element.className = 'checked';
 *              class verwijderen: element.className = '';
 *  -   Initialiseren
 *          Eventlistener toevoegen aan de 'toevoegen' knop
 *          Eventlisteners toevoegen aan bestaande items
 */

var boodschappen = {
    init: function () {
        var self = this;
        window.onload = function () {
            //  Event handler 'click' toevoegen aan de knop 'btnToevoegen'
            document.getElementById('btnToevoegen').addEventListener('click', self.toevoegen);

            //  Event handler 'click' toevoegen aan ALLE linken in de lijst
            var verwijderKnoppen = document.querySelectorAll('#boodschappenLijst > li > a');
            for (var i = 0; i < verwijderKnoppen.length; i++) {
                verwijderKnoppen[i].addEventListener('click', boodschappen.verwijder);
            }

            //  Event handler 'click' toevoegen aan ALLE checkboxen in de lijst
            var checkBoxen = document.querySelectorAll('#boodschappenLijst > li > input[type=checkbox]');
            for (var i = 0; i < checkBoxen.length; i++) {
                checkBoxen[i].addEventListener('click', boodschappen.afVinken);
            }

            //  Invoerveld focus geven
            document.getElementById('txtItem').focus();
        }
    },
    toevoegen: function () {
        //  Waarde ophalen wat ingegeven moet worden
        var waarde = document.getElementById('txtItem').value;

        //  Controleren of er een waarde ingegeven is
        if (waarde !== '') {
            //  listItem object aanmaken
            var listItem = document.createElement('li');

            //  checkBox aanmaken & toevoegen aan listItem object
            var checkBox = document.createElement('input');
            checkBox.setAttribute('type', 'checkbox');
            checkBox.addEventListener('click', boodschappen.afVinken);
            listItem.appendChild(checkBox);

            //  textNode object aanmaken en toevoegen aan listItem object
            var textNode = document.createTextNode(waarde);
            listItem.appendChild(textNode);

            //  btnVerwijder object aanmaken en toevoegen aan listItem object
            var btnVerwijder = document.createElement('a');
            btnVerwijder.innerHTML = 'Verwijder';
            btnVerwijder.setAttribute('href', '#');
            btnVerwijder.addEventListener('click', boodschappen.verwijder);
            listItem.appendChild(btnVerwijder);

            //  listItem toevoegen aan de lijst
            document.getElementById('boodschappenLijst').appendChild(listItem);

            //  Invoerveld leeg maken
            document.getElementById('txtItem').value = '';

            //  Invoerveld focus geven
            document.getElementById('txtItem').focus();
        }
    },
    verwijder: function (e) {
        //  listItem ophalen
        var listItem = e.target.parentElement;

        //  listItem verwijderen
        document.getElementById('boodschappenLijst').removeChild(listItem);

        //  Invoerveld focus geven
        document.getElementById('txtItem').focus();
    },
    afVinken: function (e) {
        var checkbox = e.target;

        if (checkbox.checked) {
            checkbox.parentElement.className = 'checked';
        } else {
            checkbox.parentElement.className = '';
        }
    }
};