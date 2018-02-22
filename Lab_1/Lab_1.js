//Patrick Flinner
//Lab_1
//304607711
//Due Date: February 22, 2018

const getTimes=(argument,callback)=>{
    const http=require('http');
    const before=new Date().getMilliseconds();

    http.get(argument,(res)=>{
        callback(`${before}`,`${argument}`);
    })
    
    
}

const orderTimes=(urlList)=>{
    let array=[];
    let counter=0;
    urlList.forEach(url => {
        let obj={};
        getTimes(url,(time,argument)=>{
            obj['url']=argument;
            obj['time']=(new Date().getMilliseconds()-time);
            counter++;
            array.push(obj);
            if(counter==urlList.length){
                console.log(array);
            }
        })
    });
    
}

const sample = [
    'http://www.google.com/',
    'http://www.spotify.com/us/',
    'http://twitter.com/',
    'http://google.com/nothing'
]



const validURL=(sample)=>{
    let obj={success:[],error:[]};
    const promises = sample.map((url) => {
        return validate(url)
    })

    Promise.all(promises)
        .then((results) => {
           results.forEach(element=>{
               let {status,url}=element;
               if(`${status}`==='success'){
                    obj.success.push(`${url}`);
               }
               else if(`${status}`==='error'){
                    obj.error.push(`${url}`);
               }
           })
           console.log(obj);
        })
        .catch(error => {
            console.log('error', error)
        })
}   

const validate=(url)=>{
    return new Promise((resolve,reject) => {
        const http=require('http');

        http.get(url,(res)=>{
           if(res.statusCode>=400 && res.statusCode<600){
               let obj={status:'error',url:url};
               return resolve(obj)
           }
           else if(res.statusCode>=200 && res.statusCode<400){
                let obj={status:'success',url:url};
                return resolve(obj)
           }
           else 
           {
               return reject
           }
        })
    })
}

orderTimes(sample);
validURL(sample);