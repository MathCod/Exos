function lancerJeu() {
    let choix = choisirPraseOuMots()
    let score = 0
    let nombreTotalMots = 0

    if (choix === "mots") {
        score = LancerBoucleDeJeu(listeMots)
        nombreTotalMots = listeMots.length
    } else {
        score = LancerBoucleDeJeu(listePhrases)
        nombreTotalMots = listePhrases.length
    }

    afficherResultat (score, nombreTotalMots)
}

function afficherResultat(score,nombreTotalMots) {
    // on affiche le score
    console.log("Votre score est de " + score + " sur " + nombreTotalMots)
}

function choisirPraseOuMots() {
    // Déclaration de la variable contenant le choix de l'utilisateur
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    }
    return choix
}

function LancerBoucleDeJeu(listePropositions) {
    let score = 0
    for (let i = 0; i < listePropositions.length; i++) {
    // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
    let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
    if (motUtilisateur === listePropositions[i]) {
        // Si le mot saisi par l'utilisateur est correct, on incrémente le score
        score++
        }
    }
    return score
}


let baliseZoneProposition = document.getElementById("zoneProposition");
console.log(baliseZoneProposition);