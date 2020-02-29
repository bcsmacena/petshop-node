let listaDePets = [];

let adicionarPet = nomePet => {
    
    listaDePets.push(nomePet);
    return true;

}

let listarPets = () => {
    
    if (listaDePets.length){
        return listaDePets;
    } else {
        return ["Não existem pets cadastrados!"];
    }
}

let buscarPets = nomePet => {

    let petsEncontrados = listaDePets.filter( pet => pet == nomePet);

    if(petsEncontrados.length){
        return petsEncontrados;
    } else {
        return ["Pet não encontrado!"];
    }
    
}

module.exports = {adicionarPet, listarPets, buscarPets}