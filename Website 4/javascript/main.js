// Checking radio buttons
function check1() {
    if (document.getElementById("KeuzeAccount").checked) {
        document.getElementById("BerichtVerzenden").style.display ="none";
        document.getElementById("password").style.display ="block";
        document.getElementById("GNaam").style.display ="block";
        document.getElementById("datumL").style.display ="block";
    } 
}

function check2() {
    if (document.getElementById("KeuzeBericht").checked) {
        document.getElementById("BerichtVerzenden").style.display ="block";
        document.getElementById("passwordd").style.display ="none";
        document.getElementById("GNaamm").style.display ="none";
        document.getElementById("datumLL").style.display ="none";
    }
}