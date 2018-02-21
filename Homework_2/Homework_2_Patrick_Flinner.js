//Patrick Flinner
//304607711
//Homework 2
//Due: February 21, 2018

class Groups{
    constructor(group){
        if(group!=null)
            this.group=group;
        else
            this.group=[];
    }

    addGroup(group){
        this.group.push(group);
    }

    removeGroup(groupName){
        let index=this.group.findIndex((element)=>{
            return element.name.toUpperCase()===groupName.toUpperCase();
        })
        if(index!=-1)
            this.group.splice(index,1);
    }

    addMember(groupName,memberName){
        //Finds the index of the group and adds the member to the array
        let index=this.group.findIndex((element)=>{
            return element.name.toUpperCase()===groupName.toUpperCase();
        })
        if(index!=-1)
            this.group[index].members.push(memberName);
    }

    removeMember(groupName,memberName){
        //finds the index of the group and member and removes the member
        let index=this.group.findIndex((element)=>{
            return element.name==groupName;
        })
        let memberIndex=this.group[index].members.findIndex(element=>{
            return element.toUpperCase()===memberName.toUpperCase();
        })
        if(index!=-1 && memberIndex!=-1)
            this.group[index].members.splice(memberIndex,1);
    }

    print(){
        this.group.forEach(element => {
            console.log(element.name);
            console.log("Leader: "+element.leader);
            console.log(element.members.join(' | '))
            console.log();
        });
       
    }
}

const groups = new Groups()
groups.addGroup({
    name: 'Justice League',
    leader: 'Wonder Woman',
    members: ['Batman', 'Superman', 'Spiderman']
})
groups.addGroup({
    name: 'Avengers',
    leader: 'Iron Man',
    members: ['Hulk', 'Thor', 'Captain America']
})

groups.print()

groups.addMember('Justice League', 'Aqua Man')
groups.print()

groups.removeGroup('avengers')
groups.print()

groups.removeMember('Justice League', 'spiderMan')
groups.print()


/*------------ DESTRUCTURING -----------*/
console.log('/*------------ DESTRUCTURING -----------*/');

//Displays a persons name if the fields exist
//Will say do not have a *blank* name if the field is missing
const displayName=(name)=>{
    let {first,last}=name
    let phrase=`${first!=null ?  `${first}` : 'No first name'} ${last ? `${last}` : '{No last name}'}`;
    console.log(phrase);
}

const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
}
displayName(person)


const combineName=(person,name,key)=>{
    let combo='';
    //Gets the value from the fields within the person object
    //Deletes the fields after getting their values
    //and combines them into one name before adding them as one field
    name.forEach(element=>{
        let {[element]:value}=person;
        delete person[element];
        combo+=`${value ? `${value}` :''}`+' ';
    })
    person[key]=combo.slice(0,-1);
    return person;
}

let person1=(combineName(person, ['first', 'last'], 'name'));

console.log(person1);

const createObject=(array)=>{
    let people={}
    let counter=0;
    //Creates an object for each element in the array
    //Places the object in the currect index
    array.forEach(element=>{
        people[counter]={};
        element.forEach(innerElement=>{
            people[counter][innerElement.key]=innerElement.value;
        })
        counter++;
    })
    return people;
}
const people = [[{
    key: 'name',
    value: 'Elon Musk'
}, {
    key: 'twitter',
    value: '@elonmusk'
}, {
    key: 'company',
    value: 'Space X'
}],
[{
    key: 'name',
    value: 'Tim Cook'
}, {
    key: 'twitter',
    value: '@tim_cook'
}, {
    key: 'company',
    value: 'Apple'
}]]

obj=createObject(people)
console.log();
console.log(obj);