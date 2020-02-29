let listaDePets = [];

let adicionarPet = nomePet => {
    
    listaDePets.push(nomePet)
    
    console.log(listaDePets);

    return true;
}

let listaPets = () => {
    if (listaDePets.length){
        return listaDePets;
    } else {
        return [""];
    }
}

let buscaPet = nomePet => {

    let petsEncontrados = listaDePets.filter( pet => pet == nomePet);

    if(petsEncontrados.length){
        return petsEncontrados;
    } else {
        return ["Pet não encontrado!"];
    }
    
}

module.exports = {adicionarPet, listaPets, buscaPet}