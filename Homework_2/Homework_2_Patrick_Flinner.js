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
        this.group.forEach(element =>{
            if(groupName===element.name){
                this.group=this.group.slice(i,1);
            }
        })
    }
    addMember(groupName,memberName){

    }
    removeMember(groupName,memberName){

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
//groups.removeGroup('Avengers');
groups.print()
