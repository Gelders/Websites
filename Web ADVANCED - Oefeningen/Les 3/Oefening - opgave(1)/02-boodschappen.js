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