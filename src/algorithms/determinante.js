




export default function determinant(){
    let idsOfTheDeterminant = []
    for(let i = 0; i < 50; i++){
        for(let j = 0; j < 50; j++){
            if(i == j){
                idsOfTheDeterminant.push(`${i}-${j}`)
            }
        }

    }
    return idsOfTheDeterminant
}