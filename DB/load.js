const {db,doc} =require("./db")

async function setLoadConfirmationDoc(data) {
    return new Promise(async function(resolve,reject){
        try{
            let loadnumber=23242;

            console.log('load : ',data.load_number);
            if(data.load_number){
                loadnumber=data.load_number;
            }
           console.log(loadnumber);

           let path='Load Confirmations/load'+loadnumber;

            await db.doc(path).set(data).then(res => {
                resolve("Document adeed succesfuly");
            }).catch(err => {
                reject(err.message);
            })
        }catch{
            reject('error');
        }
        
    })
    // Add a new document in collection "Load Confirmations" with ID 'hemantKAload'
}


async function setDr(data) {
    return new Promise(async function(resolve,reject){
        try{
            let loadnumber=23242;

            console.log('load : ',data.load_number);
            if(data.load_number){
                loadnumber=data.load_number;
            }
           console.log(loadnumber);

           let path='Drivers/'+loadnumber;

            await db.doc(path).set(data).then(res => {
                resolve("Document adeed succesfuly");
            }).catch(err => {
                reject(err.message);
            })
        }catch{
            reject('error');
        }
        
    })
    // Add a new document in collection "Load Confirmations" with ID 'hemantKAload'
}

//get data by collection

async function read(){
   
    const citiesRef = db.collection('Load Confirmations');

    const snapshot = await citiesRef.get();
    
    snapshot.forEach(doc => {
    //   console.log(doc.id, '=>', doc.data());
      console.log('load_number : ',doc.data().load_number);
    }); 

}

// read()


async function getload(load_number){
    return new Promise(async function(resolve,reject){
        const citiesRef =await db.collection('Load Confirmations');
    
        const snapshot = await citiesRef.get();
        
         await snapshot.forEach(doc => { 
          let LoadNumber=doc.data().load_number; 
          if(LoadNumber==load_number){
            //   console.log(doc.data());
              resolve(doc.data()); 
          }

        })
        reject("load not Found") 
    })
       
}

getload(43322).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

async function listCollections(){
    db.listCollections()
  .then(snapshot=>{
      snapshot.forEach(snaps => {
        console.log(snaps["_queryOptions"].collectionId); // LIST OF ALL COLLECTIONS
      })
  })
  .catch(error => console.error(error));
}

// listCollections();


module.exports={
    setLoadConfirmationDoc,
    getload
}