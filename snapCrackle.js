function snapCrackle (maxValue){
    
    let saida = "";

    for (let i = 1; i <= maxValue; i++){
        if (i % 2 !== 0 && i % 5 === 0){ 
            saida += "SnapCrackle";
        } 
        else if(i % 2 !== 0){
            saida += "Snap";
        } 
        else if(i % 5 === 0){
            saida += "Crackle";
        } 
        else if(i % 2 === 0 && i % 5 !== 0){
            saida += i
        }
        if(i !== maxValue){ 
            saida += ", ";
        } ;
    }
    return saida;
}
console.log(snapCrackle());  