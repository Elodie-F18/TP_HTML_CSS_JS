
function Etudiant(nom, prenom, age, genre, pays, option, listeCours) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.genre = genre;
    this.pays = pays;
    this.option = option;
    this.listeCours = listeCours;
}

const etudiants = [];

const qteEtudiant = parseInt(prompt("Combien d'étudiants dans la liste :"));

for (let i = 1; i <= qteEtudiant; i++) {
    const nom = prompt("Nom :");
    const prenom = prompt('Prénom :');
    const age = parseInt(prompt('Age : '));
    const genre = prompt('Genre : ');
    const pays = prompt('Pays : ');
    const option = prompt('Option : ');
    const listeCours = [];
        for (let j = 0; j < 3; j++) {
            listeCours.push(prompt("Entrez les cours suivis :"));
        }
    const etudiant = new Etudiant( nom,prenom,age,genre,pays,option,listeCours);
    etudiants.push(etudiant);
}


for (let i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i]);
}

let countChinoise = 0; 
const PeopleNameEndWithA = []; 
const womenChinese = [];
const allNames = []; 
const menRussian = []; 
const womenStartWithK = [];
const menStartWithM = [];

for (let i = 0; i < etudiants.length; i++) {
    allNames.push(etudiants[i].nom); 
    if (
        etudiants[i].pays.toLowerCase() === "chine" &&
        etudiants[i].genre.toLowerCase() === "f"
    ) {
        womenChinese.push(etudiants[i]);
        countChinoise++; 
    }
    if (
        etudiants[i].prenom[etudiants[i].prenom.length - 1].toLowerCase() === "a"
    ) {
        PeopleNameEndWithA.push(etudiants[i]); 
    }

    if (
        etudiants[i].pays.toLowerCase() === "russie" &&
        etudiants[i].genre.toLowerCase() === "m"
    ) {
        menRussian.push(etudiants[i]);
    }
    if (
        etudiants[i].prenom.toLowerCase()[0] === "k" &&
        etudiants[i].genre.toLowerCase() === "f"
    ) {
        womenStartWithK.push(etudiants[i]);
    }
    if (
        etudiants[i].prenom.toLowerCase()[0] === "m" &&
        etudiants[i].genre.toLowerCase() === "m"
    ) {
        menStartWithM.push(etudiants[i]);
    }
}