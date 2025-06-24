let listeMots = ["Cachalot", "Pétunia", "Serviette"]
let score = 0

let motUtilisateur = prompt("Entrez le mot : " + listeMots[0])
switch (motUtilisateur) {
    case listeMots[0]:
        console.log("Bravo !")
        score = score +1
        break
    case "Gredin":
        console.log("Restez correct !")
        break
    case "Mécréant":
        console.log("Restez correct !")
        break
    case "Vilain":
        console.log("Soyez gentil !")
        break
    default:
        console.log("Vous avez fait une erreur de frappe.")
}
console.log(score)

motUtilisateur = prompt("Entrez le mot : " + listeMots[1])
switch (motUtilisateur) {
    case listeMots[1]:
        console.log("Bravo !")
        score = score +1
        break
    case "Gredin":
        console.log("Restez correct !")
        break
    case "Mécréant":
        console.log("Restez correct !")
        break
    case "Vilain":
        console.log("Soyez gentil !")
        break
    default:
        console.log("Vous avez fait une erreur de frappe.")
}
console.log(score)

motUtilisateur = prompt("Entrez le mot : " + listeMots[2])
switch (motUtilisateur) {
    case listeMots[2]:
        console.log("Bravo !")
        score = score +1
        break
    case "Gredin":
        console.log("Restez correct !")
        break
    case "Mécréant":
        console.log("Restez correct !")
        break
    case "Vilain":
        console.log("Soyez gentil !")
        break
    default:
        console.log("Vous avez fait une erreur de frappe.")
}
console.log(score)