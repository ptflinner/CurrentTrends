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
    var frequencyList={
        
    };

}

function printCharacterFrequency(list){

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

    let str = 'Hello, World!'
    
    let frequencyObj = getCharacterFrequency( str )
    
    printCharacterFrequency( frequencyObj )

}

runStringFunctions();
runCharacterFunctions();