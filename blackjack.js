const pakli = { "körA": 1, "kör2": 2, "kör3": 3, "kör4": 4, "kör5": 5, "kör6": 6, "kör7": 7, "kör8": 8, "kör9": 9, "kör10": 10, "körJ": 10, "körQ": 10, "körK": 10, "káróA": 1, "káró2": 2, "káró3": 3, "káró4": 4, "káró5": 5, "káró6": 6, "káró7": 7, "káró8": 8, "káró9": 9, "káró10": 10, "káróJ": 10, "káróQ": 10, "káróK": 10, "treffA": 1, "treff2": 2, "treff3": 3, "treff4": 4, "treff5": 5, "treff6": 6, "treff7": 7, "treff8": 8, "treff9": 9, "treff10": 10, "treffJ": 10, "treffQ": 10, "treffK": 10, "pikkA": 1, "pikk2": 2, "pikk3": 3, "pikk4": 4, "pikk5": 5, "pikk6": 6, "pikk7": 7, "pikk8": 8, "pikk9": 9, "pikk10": 10, "pikkJ": 10, "pikkQ": 10, "pikkK": 10 };
function Oszt() {
    const lapok = Object.keys(pakli);
    let i = Math.floor(Math.random() * lapok.length);
    let j;
    do {
        j = Math.floor(Math.random() * lapok.length);
    } while (j === i);
    return [i,j];
}

function Ker(kez) {
    const lapok = Object.keys(pakli);
    let i;
    do {
        i = Math.floor(Math.random() * lapok.length);
    } while(kez[0] == i || kez[1] == i )
    kez.push(i)
    return kez
}
let player = [Oszt()]



//    lapok visszadas osztasba
//    { [lapok[i]]: pakli[lapok[i]] },
//    { [lapok[j]]: pakli[lapok[j]] }