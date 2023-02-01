const Mhero = document.querySelector('.hero_form');
const Minput = document.querySelector('.input');
const M1box = document.querySelector('.box__time1');
const BoxMin1 = document.querySelector('.box__minute1');
const M2box = document.querySelector('.box__time2');
const BoxMin2 = document.querySelector('.box__minute2');
const M3box = document.querySelector('.box__time3');
const BoxMin3 = document.querySelector('.box__minute3');
const M4box = document.querySelector('.box__time4');
const BoxMin4 = document.querySelector('.box__minute4');


Mhero.addEventListener('submit', function(e) {
    e.preventDefault();

    function hisobPiyoda() {
        var people = 3.6;
        var MinputValue = +Minput.value;
        return Math.floor(MinputValue / people) + " Soat";
    }
    M1box.textContent = hisobPiyoda();

    function minutPiyoda() {
        var people = 3.6;
        var MinputValue = +Minput.value;
        var min = ((MinputValue / people) - Math.floor(MinputValue / people)).toFixed(2);
        var minut = Math.floor(min * 60);
        return minut + " minutda";
    }
    BoxMin1.textContent = minutPiyoda();

    function hisobVelosiped(MinputValue, velosiped) {
        var velosiped = 20.1;
        var MinputValue = +Minput.value;
        return Math.floor(MinputValue / velosiped) + " Soat";
    }
    M2box.textContent = hisobVelosiped();

    function minutVelosiped() {
        var velosiped = 20.1;
        var MinputValue = +Minput.value;
        var min = ((MinputValue / velosiped) - Math.floor(MinputValue / velosiped)).toFixed(2);
        var minut = Math.floor(min * 60);
        return minut + " minutda";
    }
    BoxMin2.textContent = minutVelosiped();

    function hisobMoshina(MinputValue, moshina) {
        var moshina = 70;
        var MinputValue = +Minput.value;
        return Math.floor(MinputValue / moshina) + " Soat";
    }
    M3box.textContent = hisobMoshina();

    function minutMoshina() {
        var moshina = 70;
        var MinputValue = +Minput.value;
        var min = ((MinputValue / moshina) - Math.floor(MinputValue / moshina)).toFixed(2);
        var minut = Math.floor(min * 60);
        return minut + " minutda";
    }
    BoxMin3.textContent = minutMoshina();

    function hisobSamalyot(MinputValue, samalyot) {
        var samalyot = 800;
        var MinputValue = +Minput.value;
        return Math.floor(MinputValue / samalyot) + " Soatda";
    }
    M4box.textContent = hisobSamalyot();

    function minutSamalyot() {
        var samalyot = 800;
        var MinputValue = +Minput.value;
        var min = ((MinputValue / samalyot) - Math.floor(MinputValue / samalyot)).toFixed(2);
        var minut = Math.floor(min * 60);
        return minut + " minutda";
    }
    BoxMin4.textContent = minutSamalyot();
})