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
            return element.name===groupName;
        })
       
        this.group.splice(index,1);
    }
    addMember(groupName,memberName){
        let index=this.group.findIndex((element)=>{
            return element.name===groupName;
        })
        this.group[index].members.push(memberName);
    }
    removeMember(groupName,memberName){
        let index=this.group.findIndex((element)=>{
            return element.name==groupName;
        })
        let memberIndex=this.group[index].members.findIndex(element=>{
            return element===memberName
        })
        this.group[index].members.splice(memberIndex,1);
    }
    print(){
        this.group.forEach(element => {
            let members='';
            console.log(element.name);
            console.log("Leader: "+element.leader);
            for(let i in element.members){
                members+=element.members[i]+' | ';
            }
            console.log(members.slice(0,-2)+'\n');
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