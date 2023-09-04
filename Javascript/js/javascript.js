// commentaires sur 1 ligne


/* Commentaires sur 
plusieurs lignes

// phase 5 - Les erreurs

var nom = prompt("Veuillez saisir votre nom");
var prenom = prompt("Veuillez saisir votre prénom");
window.alert(nom + " " + prenom)


var num1 = prompt("Veuillez entrer un 1er nombre : ");
var num2 = prompt("Veuillez entrer un 2eme nombre : ");
window.alert("Le résultat est de " + num1 * num2);

var temp = window.prompt("Ecrivez votre température en degrès Celcius :");
window.alert("La température en Fahrenheit est de " + ((temp*9/5)+32));

*/

// phase 6 - les opérateurs

var a = "100";
var b = 100;
var c = 1.90;
var d = true;
window.alert("Ceci est une chaîne de caractères :" + " " + a);
window.alert(--b);
window.alert(c + " " + a);
window.alert(!d);

// phase 7 - Instructions conditionnelles et alternatives

var nb = prompt("Veuillez ecrire un nombre :");

if (nb%2 == 0)
{
    window.alert("Votre nombre est un nombre pair");
}
else
{
    window.alert("Votre nombre est un nombre impair");
}
