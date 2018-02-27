const crypto =require('crypto')

const hashes=crypto.getHashes()

const hashingAlgorithm='sha256'

const cryptoHash=(message)=>{

    const hash=crypto.createHash(hashingAlgorithm)
    
    hash.update(message)
    
    const digest=hash.digest('hex')
    
    return digest
}

const leadingZero=(hashed)=>{
    let count=0;
    let hash=hashed.toString()
    //console.log(hash);
    for(let i=0;i<hash.length;i++){
        if(hash[i]==='0'){
            if(count<3){
               count++ 
            }
            else{
                return false;
            }    
        }
        if(hash[i]!='0' && count==3){
            return true;
        }
        else if(hash[i]!=0 && count!=3){
            return false;
        }
    }
    
}

const hashMessage=(message)=>{
    let numLoops=0;
    let loop=true;
    let digest;
    while(loop){
        digest=cryptoHash((message+numLoops))
        if(leadingZero(digest)){
            loop=false;
        }
        else{
            numLoops++;
        }}
    message+=numLoops;
    console.log(`The '${hashingAlgorithm}' digest of '${message}' is: ${digest}`);
}

hashMessage('Hello, World!')