//Patrick Flinner
//Lab_2
//304607711
//Due Date: February 28, 2018

const crypto =require('crypto')
const http=require('http')
const url='http://albertcervantes.com/cs4220/messages.json'
const hashes=crypto.getHashes()
const hashingAlgorithm='sha256'
const publicKey=`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0ymlIhe8lJm19xNxIViM
P0ox0lQl8waBRhpT62KpDgWZgTUqYLh+77J7lAra9vIre5A6Fd9Ac3czGH83F27Z
cUZdIT2HYRbi8gl5EkkUtLvxi+LX2JI+SycOXvT94/lHvJC9aZM+sgZidmywh2zX
aFVsQnGsanvOhrSbW6LYaPkvnWm0tdW+8RU8cD7q0K7F0n/1i2V8q0mI0z7/E29x
wVb/RtWK3gagC0tEjdipYXovkQitxEgOhDUsmp4kRM1aYasFtIaayND3wuPzGMfr
8GbtsP/iBoz4hwOqs++gjg36cXxO68P7HChUMiVd5x9DvN2X+NV1RkY4PusciJ8Z
kQIDAQAB
-----END PUBLIC KEY-----`

// For reading keys and writing files
const fs = require('fs')    
const path = require('path')

//Creates the hash
const cryptoHash=(message)=>{

    const hash=crypto.createHash(hashingAlgorithm)
    hash.update(message)
    const digest=hash.digest('hex')
    
    return digest
}

//Checks if the hash has 3 leading zeroes
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

//Creates the message that has the hash with 3 leading zeroes
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

//Generates message signatures
//Not used
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

//Verifies that the signature matches the message
const verifySignature=(message,signature)=>{
    // Get a new Verify object (Note: we don't use 'new')
    verify = crypto.createVerify('SHA256')

    // Update the verify object with the message we want to verify
    verify.update( message )

    // Determine the validity of the signature for the data and public key.
    const isValidSignature = verify.verify(publicKey, signature, 'hex')

    console.log( `${isValidSignature} - ${message}`)
}

//Retrieves JSON from website
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

//Displays if the signatures are valid
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