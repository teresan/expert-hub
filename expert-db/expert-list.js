exports.handler = function(context, event, callback) {
    
   const sync_id = event['service'];
 
 
 //HAPPY PATH
 
 console.log('CONTEXT:');
  for(var property in context) {
  console.log(property + "=" + context[property]);
  }
  
  console.log('EVENT:');
  for(var proper in event) {
  console.log(proper + "=" + event[proper]);
  }
  let response = "{}";

 /* fetch service hosting our DB */
 const client = context.getTwilioClient();
    
  client.sync.services(sync_id)
           .syncMaps('experts')
           .syncMapItems
      .list({limit: 20})
      .then(syncMapItems => {
          array = [];
          syncMapItems.forEach(s => 
          {
              console.log(s.key);
              array.push(s.data);
              })
          callback(null,JSON.stringify(array));
          
      })
      .catch(e => { 
               console.log(e); 
               callback(null,false);
               });

};