/*
 *  -   Loop over de bestaande blok elementen (.block) en koppel hieraan een click event listener
 *  -   Als je op deze blokken klikt, moet je de class "stage1" verandere naar "stage2", "stage2" naar "stage3" & "stage3" naar "stage1".
 *  -   Als je klikt op de knop dien je een nieuwe rij met een blok:
 *          <div class="row">
 *              <div class="block stage1"></div>
 *          </div>
 *  -   Dit alles moet verpakt zijn in een IFFE
 */

(function () {

    var moveBlock = function () {
        if (this.getAttribute("class").indexOf("stage1") !== -1) {
            this.setAttribute("class", "stage2");
        } else if (this.getAttribute("class").indexOf("stage2") !== -1) {
            this.setAttribute("class", "stage3");
        } else if (this.getAttribute("class").indexOf("stage3") !== -1) {
            this.setAttribute("class", "stage1");
        }
    }

    window.addEventListener("load", function() {
        document.getElementById("btnAddBlock").addEventListener("click",
            function() {
                var row = document.createElement("div");
                row.setAttribute("class", "row");
                var blok = document.createElement("div");
                blok.setAttribute("class", "block stage1");
                blok.addEventListener("click",
                    moveBlock);
                row.appendChild(blok);
                document.getElementById("divBlokken").appendChild(row);
            });

        var blokken = document.querySelectorAll('.block');
        for (var i = 0; i < blokken.length; i++) {
            blokken[i].addEventListener('click',
                moveBlock);
        }
    });

})();