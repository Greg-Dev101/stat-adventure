let listInput = []; // la liste des nombres, dans un array
let input = null; // le nombre entré
let inputInt = null; // le nombre entré après traitement parseInt
let totalInput = null; // le nombre de nombres entrés
let min = null; // le nombre le plus petit
let max = null; // le nombre le plus grand
let sumInput = null; // la somme des nombres entrés 
let meanInput = null; // la moyenne des nombres entrés 
let i = null; // le nombre de tour, le compteur de la boucle


input = prompt('Veuillez saisir un nombre.') // affiche fenêtre avec le message Veuillez...
inputInt = parseInt(input) // imput devient inputIn

if (inputInt != 0) { // si inputIn est différent de 0

    while (inputInt != 0) { // Tant Que inputIn est différent de 0
        console.log ("vous venez de saisir " + input)
        listInput.push(inputInt) // le nombre saisi vient s'intégrer dans listInput
        totalInput=listInput.length // totalInput prend la longueur du tableau
        sumInput=sumInput+inputInt // la somme des nombres entrés prend la valeur somme+nombre rentré
        input = prompt('Veuillez saisir un nombre.') // affiche fenêtre avec le message Veuillez...
        inputInt = parseInt(input)
    
        max=listInput[0]
        for (let i=1; i<=listInput.length; i++) {
        if (max<listInput[i]) {
            max=listInput[i]
        }
    } 
        min=listInput[0]
        for (i=1; i<=listInput.length; i++) {
        if (min>listInput[i]) {
            min=listInput[i]
        }
}
}

meanInput=sumInput/totalInput

console.log (totalInput + " nombres saisis")
console.log ("Compris entre " + min + " et " + max)
console.log ("Pour une somme de " + sumInput)
console.log ("Et une moyenne de " + meanInput) 

alert (
    totalInput + " nombres saisis\n" +
    "compris entre " + min + " et " + max + 
    "\nPour une somme de " + sumInput +
    "\nEt une moyenne de " + meanInput)

}

else {
    console.log ("aucun nombre saisi")
}
