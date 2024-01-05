let numRatio = (input)=>{
    let [postrRatio,negRatio,zeroRatio]=[0,0,0]
    
    for(let i =0 ; i<input.length ; i++){
        if(input[i]>=1){
            postrRatio +=1
        }
        else if(input[i]<=-1){
            negRatio +=1
        }
        else{
            zeroRatio +=1
        }

    }
    return `the ratio of positive is ${postrRatio/input.length} \n 
            the ration of negative is ${negRatio/input.length}\n
            the ratio of zero is ${zeroRatio/input.length} `


}