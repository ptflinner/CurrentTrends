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