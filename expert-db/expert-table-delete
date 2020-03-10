exports.handler = function(context, event, callback) {
 
 // take the sync_id
 //create map with name "experts""
 //what do we return???
 
 const sync_id = event['service'];
 
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
           .remove()
           .then(r => callback(r))
           .catch(e => { 
               //manage the error --> note: deleting a resource takes longer than the function timeout length
               console.log(e); 
               callback(false);
               });
 //callback(null, response);
};
