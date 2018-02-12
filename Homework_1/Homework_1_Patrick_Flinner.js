function upperCase(phrase){
    let upper='';
    for(i in phrase){
        if(typeOfLetter(phrase.charAt(i))===0){
            upper+=createUpper(phrase.charAt(i));
        }
        else{
            upper+=phrase.charAt(i);
        }
    }
    return upper;
}

function lowerCase(phrase){
    let lower='';
    for(i in phrase){
        if(typeOfLetter(phrase.charAt(i))===1){
            lower+=createLower(phrase.charAt(i));
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

    for(i in phrase){
        if(phrase.charCodeAt(i)===46){
            cap=true;
            sentence+=phrase.charAt(i);
        }
        else if(typeOfLetter(phrase.charAt(i))===0 && cap){
            sentence+=createLower(phrase.charAt(i));
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

    for(i in phrase){
        if(phrase.charCodeAt(i)===32){
            cap=true;
            capitalize+=phrase.charAt(i);
        }
        else if(typeOfLetter(phrase.charAt(i))===0 && cap){
            capitalize+=createUpper(phrase.charAt(i))
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
    for(i in phrase){
        if(typeOfLetter(phrase.charAt(i))===1 && flip){
            alternate+=createLower(phrase.charAt(i));
        }
        else if(typeOfLetter(phrase.charAt(i))===0 && !flip){
            alternate+=createUpper(phrase.charAt(i));
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

    for(i in phrase){
        if(phrase.charCodeAt(i)===32){
            cap=true;
            capitalize+=phrase.charAt(i);
        }
        else if(typeOfLetter(phrase.charAt(i))===0 && cap){
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

    for(i in phrase){
        if(phrase.charCodeAt(i)===32){
            cap=true;
            capitalize+=phrase.charAt(i);
        }
        else if(typeOfLetter(phrase.charAt(i))===1 && cap){
            capitalize+=String.fromCharCode(phrase.charCodeAt(i)+32)
            cap=false;
        }
        else if(typeOfLetter(phrase.charAt(i))===0 && !cap){
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
                let lower=-32;
                if(typeOfLetter(frequencyList[j].character)===0){
                    lower= 32;
                }
                
                if(frequencyList[j].character.charCodeAt(0)===(str.charCodeAt(i))){
                    
                    frequencyList[j].counter+=1;
                    j=length;
                    break;
                }
                else if(frequencyList[j].character.charCodeAt(0)===((str.charCodeAt(i)+lower))){
                    
                    frequencyList[j].counter+=1;
                    j=length;
                    break;
                }
                if(j+1>=length){
                    freq={
                        character:str.charAt(i),
                        counter:1
                    }
                    
                    frequencyList.push(freq)
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

function findWord(phrase,str,value){
    for(var i=0;i<phrase.length;i++){
        for(var j=0;j<str.length;j++){
            if(typeOfLetter(phrase.charAt(i))===0){
                if(phrase.charCodeAt(i)===str[j].charCodeAt(0) 
                ||phrase.charCodeAt(i)===str[j].charCodeAt(0)+32){
                    for(x=0;x<str[j].length;x++){
                        if(phrase.charCodeAt(x)){

                        }
                    }
                }
            }
            else if(typeOfLetter(phrase.charAt(i))===1){
                if(phrase.charCodeAt(i)===str[j].charCodeAt(0) 
                ||phrase.charCodeAt(i)===str[j].charCodeAt(0)+32){
                    for(x=0;x<str[j].length;x++){
                        
                    }
                }
            }
        }
    }
}

function typeOfLetter(char){
    if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122){
        return 0;
    }
    else if (char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90){
        return 1;
    }
    return 2;
}

function createLower(char){
    let ch=String.fromCharCode(char.charCodeAt(0)+32)
    return ch;
}

function createUpper(char){
    let ch=String.fromCharCode(char.charCodeAt(0)-32)
    return ch;
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