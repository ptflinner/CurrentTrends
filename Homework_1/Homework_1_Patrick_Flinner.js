function upperCase(phrase){
    let upper='';
    for(var i=0;i<phrase.length;i++){
        if(phrase.charCodeAt(i)>=97 && phrase.charCodeAt(i)<=122){
            upper+=String.fromCharCode(phrase.charCodeAt(i)-32);
        }
        else{
            upper+=phrase.charAt(i);
        }
    }
    return upper;
}

function lowerCase(phrase){
    let lower='';
    for(var i=0;i<phrase.length;i++){
        if(phrase.charCodeAt(i)>=65 && phrase.charCodeAt(i)<=90){
            lower+=String.fromCharCode(phrase.charCodeAt(i)+32);
        }
        else{
            lower+=phrase.charAt(i);
        }
    }
    return lower;
}

function sentenceCase(phrase,nouns){
    let sentence='';
    let cap=true;

    for(var i=0;i<phrase.length;i++){
        if(phrase.charCodeAt(i)===46){
            cap=true;
            sentence+=phrase.charAt(i);
        }
        else if(phrase.charCodeAt(i)>=97 && phrase.charCodeAt(i)<=122 && cap){
            sentence+=String.fromCharCode(phrase.charCodeAt(i)-32)
            cap=false;
        }
        else{
            sentence+=phrase.charAt(i);
            if(phrase.charCodeAt(i)!==32){
                cap=false;
            }
        }
    }
    return sentence;
}

function capitalizedCase(phrase){
    let capitalize='';
    let cap=true;

    for(var i=0;i<phrase.length;i++){
        if(phrase.charCodeAt(i)===32){
            cap=true;
            capitalize+=phrase.charAt(i);
        }
        else if(phrase.charCodeAt(i)>=97 && phrase.charCodeAt(i)<=122 && cap){
            capitalize+=String.fromCharCode(phrase.charCodeAt(i)-32)
            cap=false;
        }
        else{
            capitalize+=phrase.charAt(i);
            cap=false;
        }
    }
    return capitalize;
}

function alternatingCase(phrase){
    let alternate='';
    let flip=true;
    for(var i=0;i<phrase.length;i++){
        if(phrase.charCodeAt(i)>=65 && phrase.charCodeAt(i)<=90 && flip){
            alternate+=String.fromCharCode(phrase.charCodeAt(i)+32)
        }
        else if(phrase.charCodeAt(i)>=97 && phrase.charCodeAt(i)<=122 && !flip){
            alternate+=String.fromCharCode(phrase.charCodeAt(i)-32);
        }
        else{
            alternate+=phrase.charAt(i);
        }
        flip=!flip;
    }
    return alternate;
}

function titleCase(phrase, list){
    let capitalize='';
    let cap=true;

    for(var i=0;i<phrase.length;i++){
        if(phrase.charCodeAt(i)===32){
            cap=true;
            capitalize+=phrase.charAt(i);
        }
        else if(phrase.charCodeAt(i)>=97 && phrase.charCodeAt(i)<=122 && cap){
            capitalize+=String.fromCharCode(phrase.charCodeAt(i)-32)
            cap=false;
        }
        else{
            capitalize+=phrase.charAt(i);
            cap=false;
        }
    }
    return capitalize;
}

function inverseCase(phrase){
    let capitalize='';
    let cap=true;

    for(var i=0;i<phrase.length;i++){
        if(phrase.charCodeAt(i)===32){
            cap=true;
            capitalize+=phrase.charAt(i);
        }
        else if(phrase.charCodeAt(i)>=65 && phrase.charCodeAt(i)<=90 && cap){
            capitalize+=String.fromCharCode(phrase.charCodeAt(i)+32)
            cap=false;
        }
        else if(phrase.charCodeAt(i)>=97 && phrase.charCodeAt(i)<=122 && !cap){
            capitalize+=String.fromCharCode(phrase.charCodeAt(i)-32);
            cap=false;
        }
        else{
            capitalize+=phrase.charAt(i);
            cap=false;
        }
    }
    return capitalize;
}

function getCharacterFrequency(str){
    let frequency={
        character:'',
        counter:0
    };

    let frequencyList=[];

    for(var i=0;i<str.length;i++){
        if(frequencyList.length===0){
            frequency.character=str.charAt(i);
            frequency.counter=1;
            frequencyList.push(frequency)
        }
        else{
            let length=frequencyList.length;
            for(var j=0;j<length;j++){
                frequency=frequencyList[j];
                let lower=32;
                if(frequency.character.charCodeAt(0)<=122 && frequency.character.charCodeAt(0)>=97){
                    lower=-32;
                }
                console.log(frequency.character.charCodeAt(0));
                if(frequency.character.charCodeAt(0)===(str.charCodeAt(i))){
                    console.log('if')
                    frequency.counter+=1;
                    frequencyList[j]=frequency;
                    break;
                }
                else if(frequency.character.charCodeAt(0)===((str.charCodeAt(i)+lower))){
                    frequency.counter+=1;
                    frequencyList[j]=frequency;
                    break;
                }
                if(j+1>=length){
                    
                    frequency.character=str.charAt(i);
                    frequency.counter=1;
                    console.log(frequency.character);
                    frequencyList.push(frequency)
                }
            }
        }
    }

    return frequencyList;

}

function printCharacterFrequency(list){
   
    for(var i=0;i<list.length;i++){
        if(list[i].counter>1){
            console.log('\''+list[i].character+'\' occurs ' +list[i].counter+' times');
        }
        else{
            console.log('\''+list[i].character+'\' occurs ' +list[i].counter+' time');
        }
        
    }
}

function runStringFunctions(){
    let str = 'I watched the storm, so beautiful yet terrific. The face of the moon was in shadow.'
    
    let unconditionallyCapitalized = ['I', 'Moon', 'Shadow']
    let lowercaseWords = ['the', 'of', 'in', 'an']
    
    console.log( 'upperCase: ', upperCase(str) )
    console.log( 'lowerCase: ', lowerCase(str) )
    console.log( 'sentenceCase: ', sentenceCase(str, unconditionallyCapitalized) )
    console.log( 'capitalizedCase: ', capitalizedCase(str) )
    console.log( 'alternatingCase: ', alternatingCase(str) )
    console.log( 'titleCase: ', titleCase(str, lowercaseWords) )
    console.log( 'inverseCase: ', inverseCase(str) )
} 

function runCharacterFunctions(){

    let str = 'HeLlo, World!'
    
    let frequencyObj = getCharacterFrequency( str )
    
    printCharacterFrequency( frequencyObj )

}

runStringFunctions();
runCharacterFunctions();