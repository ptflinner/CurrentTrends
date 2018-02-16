//Patrick Flinner
//304607711
//Homework 1

let upperCase=(phrase)=>{
    let upper='';
    for(i in phrase){
        
        /* Makes the letter uppercase before adding it to the new string 
        or it will ignore it */
        if(typeOfLetter(phrase.charAt(i))===0){
            upper+=createUpper(phrase.charAt(i));
        }
        else{
            upper+=phrase.charAt(i);
        }
    }
    return upper;
}

let lowerCase=(phrase)=>{
    let lower='';
    for(i in phrase){

        /* Makes the letter lowercase before adding it to the new string 
        or it will ignore it */
        if(typeOfLetter(phrase.charAt(i))===1){
            lower+=createLower(phrase.charAt(i));
        }
        else{
            lower+=phrase.charAt(i);
        }
    }
    return lower;
}

let sentenceCase=(phrase,nouns)=>{
    let sentence='';
    let cap=true;

    /*Capitalizes letters at the start of a sentence, aka after a period, and words that are nouns in a list */
    for(i in phrase){
        if(phrase.charCodeAt(i)===46){
            cap=true;
            sentence+=phrase.charAt(i);
        }
        else if(typeOfLetter(phrase.charAt(i))===0 && cap){
            sentence+=createUpper(phrase.charAt(i));
            cap=false;
        }
        else{
            sentence+=phrase.charAt(i);
            if(phrase.charCodeAt(i)!==32){
                cap=false;
            }
        }
    }

    sentence=replaceWord(sentence,nouns)
    return sentence;
}

/* Capitalizes the first letter in a word */
let capitalizedCase=(phrase)=>{
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

/*alternates the letter that is capitalized*/
let alternatingCase=(phrase)=>{
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

/*Capitalizes every word that is important. List determines what is not important*/
let titleCase=(phrase, list)=>{
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

    /*Replaces words considered unimportant and then makes sure the letters at the start of a sentence are correct*/
    capitalize=replaceWord(capitalize,list);
    capitalize=sentenceCase(capitalize);
    return capitalize;
}

/*Start of every word is lowercase and the rest uppercase*/
let inverseCase=(phrase)=>{
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

/*Creates a list of objects that are a letter and how many times it occurs*/
let getCharacterFrequency=(str)=>{
    //Object
    let frequency={
        character:'',
        counter:0
    };

    let frequencyList=[];

    for(i in str){
        //Pushes the first letter into the array
        if(frequencyList.length===0){
            frequency.character=str.charAt(i);
            frequency.counter=1;
            frequencyList.push(frequency)
        }
        else{
            //Begins checking if new letters are found
            //New letters are pushed in while duplicates are incremented
            let length=frequencyList.length;
            for(j=0;j<length;j++){
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

//Prints the object used in getCharacterFrequency
let printCharacterFrequency=(list)=>{
    
     for(i in list){
         if(list[i].counter>1){
             console.log('\''+list[i].character+'\' occurs ' +list[i].counter+' times');
         }
         else{
             console.log('\''+list[i].character+'\' occurs ' +list[i].counter+' time');
         }
         
     }
}

//Uses regular expressions to replace words in a sentence. Will only replace whole words. Ignores case sensitivity. 
let replaceWord=(phrase,list)=>{
    for(i in list){
        let replace=list[i];
        let search=lowerCase(list[i]);
        
        search=new RegExp('\\b'+search+'\\b','gi');
        phrase=phrase.replace(search,replace);
    }
    return phrase;
}

//Returns a value depending on if a letter is uppercase, lowercase, or not a letter
let typeOfLetter=(char)=>{
    //Lower
    if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122){
        return 0;
    }
    //Upper
    else if (char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90){
        return 1;
    }

    //Neither
    return 2;
}

//Returns a lowercase letter
let createLower=(char)=>{
    let ch=String.fromCharCode(char.charCodeAt(0)+32)
    return ch;
}

//Returns an uppercase letter
let createUpper=(char)=>{
    let ch=String.fromCharCode(char.charCodeAt(0)-32)
    return ch;
}

function runStringFunctions(){
    let str = 'i watched the storm, so beautiful yet terrific. the face of the moon was in shadow.'
    
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