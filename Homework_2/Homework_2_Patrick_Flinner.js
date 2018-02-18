class Groups{
    constructor(group){
        if(group.length>1)
            this.group=group;
        else
            this.group=[];
    }
    addGroup(group){
        this.group.push(group);
    }
    removeGroup(groupName0){
        
    }
    addMember(groupName,memberName){

    }
    removeMember(groupName,memberName){

    }
    print(){
        for(i in this.group){
            console.log(i.name+'\n');
            console.log(i.leader+'\n');
            for(j in this.group){
                if(j==0){
                    console.log(j);
                }
                else{
                    console.log('|'+j);
                }
            }
        }
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
        groups.print
