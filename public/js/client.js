"use strict";

document.addEventListener("DOMContentLoaded", function () {
    //Die Rezepte-Anzahl wird nur animiert wenn JS aktiviert ist
    document.documentElement.classList += " js";

    initMobile();

    initNumrecipesCounters();
})


function initMobile(){
    document.querySelector("header #mobile-toggle").addEventListener("change", function(){
        var mobileOpen = this.checked;

        if(mobileOpen){
            document.documentElement.classList += " mobile-open";
        }
        else{
            document.documentElement.className = document.documentElement.className.replace(" mobile-open", "")
        }
        
    }, false)
}


/**
  *@author Daniel Giczi<daniel.giczi@edu.fh-joanneum.at>
  *Zählt alle 30ms 1/20 des End-Zählerwertes weiter solang der hinterlegte data-count nicht erreicht is
  *Animation sollte also innerhalb einer Sekunde fertig sein
  *🍝
  */
function recursiveCountUp(counter){
    var parent = counter.parentElement;
    var current = Number(counter.innerHTML);

    var toCount = Number(parent.getAttribute("data-count"));

    if(current < toCount){
        counter.innerHTML = current + Math.floor((toCount / 20));

        setTimeout(function(){
            recursiveCountUp(counter);
        }, 30);
    }
} 

/**
 *@author Daniel Giczi<daniel.giczi@edu.fh-joanneum.at>
  *Initialisiert die Rezepte-Zähler
  *Einerseits wird der Wert von 0 auf data-count hochgezählt.
  *Danach wird alle 500ms ein Zufälliger wert zu beiden Feldern hinzugezählt, um 
  *Rezepterstellungen durch Kunden nachzustellen
  *🍝
  */
function initNumrecipesCounters() {
    var counters = document.querySelectorAll(".intro .numrecipes #counter-value span, .intro .numrecipes #today-counter-value span");

    counters.forEach((counter) => {
        recursiveCountUp(counter);
    })

    var increaseCounters = function () {
        if (Math.random() > Math.random()) { //🍝 Achtung, noch heiß!!!
            var randomIncrease = Math.floor(Math.random() * 10);
            counters.forEach((counter) => {
                var current = Number(counter.innerHTML);
                counter.innerHTML = current + randomIncrease;
            })
        }
        recursiveCall();
    }

    var recursiveCall = function() {
        setTimeout(increaseCounters, 300);
    }

    recursiveCall();
}
