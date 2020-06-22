exports.handler = function(context, event, callback) {
 
    // take the sync_id
    //create map with name "experts""
    //what do we return???
    
    const sync_id = event['service'];
    const expert_json = event['expert'];
    const expert = JSON.parse(expert_json);
    
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
              .syncMapItems(expert.number)
              .update({data: expert_json })
              .then(sync_map_item => {
                  console.log(sync_map_item.key)
                  callback(null,sync_map_item.key);
                  })
              .catch(e => { 
                  console.log(e); 
                  callback(null,false);
                  });
                  
    //callback(null, response);
   };