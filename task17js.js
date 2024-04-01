// 1. Her defe ferqli rengde ekrana cixmali (console.log(${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye);)
let birthday = new Date("04-28-2024");
setInterval(() => {
    let now = new Date();
    let between = birthday - now;
    let gun = Math.trunc(between / (1000 * 60 * 60 * 24));
    let saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
    let deqiqe = Math.trunc((between / (1000 * 60)) % 60);
    let saniye = Math.trunc(between / 1000) % 60;
    let r = Math.trunc(Math.random() * 300);
    let g = Math.trunc(Math.random() * 300);
    let b = Math.trunc(Math.random() * 300);
    // console.clear();
    console.log(`%c${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`, `color: rgb(${r},${g},${b})`);
}, 1000);

let randomNumber = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);

// 2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.

let students = [
    {
        id: 1,
        name: "NARMIN",
        suname: "H",
        hobbies: ['danismaq', 'gezmek'],
        age: 21,
        bal: 99,

    },
    {
        id: 2,
        name: "SEVINC",
        surname: "E",
        hobbies: ['oynamaq', 'eylenmek'],
        age: 23,
        bal: 85,
    },
    {
        id: 3,
        name: "LALE",
        surname: "F",
        hobbies: ['gulmek', 'gezmek'],
        age: 22,
        bal: 54,
    },
    {
        id: 4,
        name: "NAZRIN",
        surname: "D",
        hobbies: ['qacmaq', 'gezmek'],
        age: 25,
        bal: 30,
    },
]

let yazilan_ad = prompt("Adınızı daxil edin: ");
console.log(yazilan_ad);
let st = students.find(a => a.name.toUpperCase() === yazilan_ad.toUpperCase())
if (st) {
    alert(` BU AD SERVERDƏ MÖVCUDDUR!!! :${st.name}`)
}
else {
    alert("BU AD SERVERDƏ MÖVCUD DEYİL !!ERRORFOUND404!!")
}

// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:

let ad = prompt("SÖZ DAXİL EDİN: ")
let array = []
let a = 1;
const soz = setInterval(() => {
    for (let i = 0; i < a; i++) {
        array.push(ad[i]);
    }
    let yeni_soz = array.join("");
    console.log(yeni_soz);
    array = [];
    if (a === ad.length) {
        clearInterval(soz);
        az();
    }
    a++;
});

function az() {
    let b = ad.length;
    const soz2 = setInterval(() => {
        if (b === 2) {
            clearInterval(soz2);
        }
        for (let i = 0; i < b - 1; i++) {
            array.push(ad[i]);
        }
        let sz = array.join("");
        console.log(sz);
        array = [];
        b--;
    });
}
const d = new Date();
let text = d.toLocaleDateString();