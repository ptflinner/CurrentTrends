const crypto =require('crypto')
const http=require('http')
const url='http://albertcervantes.com/cs4220/messages.json'
const hashes=crypto.getHashes()
const hashingAlgorithm='sha256'
    
    // For reading keys and writing files
const fs = require('fs')    
const path = require('path')

const cryptoHash=(message)=>{

    const hash=crypto.createHash(hashingAlgorithm)
    hash.update(message)
    const digest=hash.digest('hex')
    
    return digest
}

const leadingZero=(hashed)=>{
    let count=0;
    let hash=hashed.toString()
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

const generateSignature=(message)=>{
    const
    // Read the private key
    fullPrivateKeyPath = path.resolve('keys', 'private_key.pem'),
    privateKey = fs.readFileSync(fullPrivateKeyPath, 'utf8'),

    // Get a new signer object (Note: we don't use 'new')
    sign = crypto.createSign('SHA256')

    // Update the signer object with the message we want to sign
    sign.update( message )

    // Generate the signature
    const signature = sign.sign(privateKey, 'hex')
}

const verifySignature=(message,signature)=>{
    const
    // Load the public key
    fullPublicKeyPath = path.resolve('keys', 'public_key.pem'),
    publicKey = fs.readFileSync(fullPublicKeyPath, 'utf8'),

    // Get a new Verify object (Note: we don't use 'new')
    verify = crypto.createVerify('SHA256')

    // Update the verify object with the message we want to verify
    verify.update( message )

    // Determine the validity of the signature for the data and public key.
    const isValidSignature = verify.verify(publicKey, signature, 'hex')

    console.log( `${isValidSignature} - ${message}`)
}

const retrieveJson=(callback)=>{
    http.get(url, (res) => {
        res.setEncoding('utf8');
        let html = '';
        res.on('data', (chunk) => html += chunk);

        res.on('end', () => {
            callback(JSON.parse(html))
        });
         
    });
}
const signatures=()=>{
    retrieveJson((json)=>{
        json.forEach(element => {
            let {message,signature}=element
            verifySignature(message,signature);
        });
    })
}
hashMessage('Hello, World!')
signatures()