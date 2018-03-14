//Patrick Flinner
//Lab_3
//304607711

const
    cards = require('deckofcards'),
    inquirer = require('inquirer')
let deck_id;
const draw = (shuffle, n = 25) => {
    cards.deck(shuffle)
        .then(deck => cards.draw(deck.deck_id, n))
        .then(result => {
            console.log('-- CARDS --')
            result.cards.forEach(card => {
                console.log(`${card.value} of ${card.suit}`)
            })

            console.log('-- REMAING CARDS --')
            console.log(result.remaining)
        })
        .catch(err => console.log(err))
}

// HINT for #3 in Lab
const discardPrompt = (result) => {
    return inquirer.prompt([{
        type: 'checkbox',
        message: 'select cards to throw away',
        name: 'cards',
        choices: [{name:hand[0].value},
        {name:hand[1].value},
        {name:hand[2].value},
        {name:hand[3].value},
        {name:hand[4].value},],        // implement choices array - look at the inquirer documentation,
        validate: (input) => {
            if(input.length<=4){
                return true
            }
           
        }  
    }])
}

// HINT for #4 in Lab
const findAndRemove = (current, throwaway) => {
    if(throwaway.cards.length!=0){
        throwaway.cards.forEach(card=>{
            index=current.findIndex(toss=>{
                return (card===toss.value)
            })
            if(index!=-1){
                current.splice(index,1);
            }
        })
    }
    return throwaway.cards.length;
}


// HINT for #6 in Lab
const print = (cards,r) => {

        console.log(`---HAND---`)
        cards.forEach(card=>{
            console.log(card.value);
        })
        console.log(`---REMAINING---`)
        console.log(r)
}

const play = () => {
    hand=[]
    cards.deck(true)
    .then(deck=>{
        deck_id=deck.deck_id
        cards.draw(deck.deck_id,5)
        .then(result=>{
            result.cards.forEach(card=>{
                let c={value:`${card.value}`+suits(`${card.suit}`)}
                hand.push(c)
            })
            discardPrompt(result).then(res=>{
                numDraw=findAndRemove(hand,res)
                cards.draw(deck_id,numDraw)
                .then(result=>{
                    result.cards.forEach(card=>{
                        let c={value:`${card.value}`+suits(`${card.suit}`)}
                        hand.push(c)
                    })
                    print(hand,result.remaining)
                })
            })
        
        })
    })
    .catch(err => console.log(err))
}

const suitsArray=['♠','♥','♦','♣'];

const suits=(suit)=>{
    switch(suit.toUpperCase()){
        case 'DIAMONDS':
            return suitsArray[2];
            break;
        case 'HEARTS':
            return suitsArray[1]
            break;
        case 'CLUBS':
            return suitsArray[3]
            break;
        case 'SPADES':
            return suitsArray[0]
            break;
        default:
            return ''
    }
}

module.exports = {
    draw,
    play
}
