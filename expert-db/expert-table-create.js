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
              .syncMaps
              .create({ uniqueName: 'experts'})
              .then(sync_map => {
                  //happy path
                  console.log(sync_map.sid);
                  response = "{experts_id: '"+ sync_map.sid +"'}";
                  callback(null,response);
                  })
              .catch(e => { 
                  //manage unhapy path
                  console.log(e); 
                  if(e=="Error: Unique name already exists")
                  {
                      client.sync.services(sync_id)
                       .syncMaps
                       .list({limit: 20})
                       .then(syncMaps => {
                           syncMaps.forEach(s => {
                               console.log(s.sid)
                               if(s.uniqueName == "experts")
                                   callback(null,"{experts_id: '"+ s.sid +"'}");
                               });
                               callback(null,JSON.stringify(syncMaps)); //it should not get here
                           }
                           
                           )
                       .catch(e => { 
                           //manage unhapy path
                            console.log(e); 
                               callback(e);
                       });
                  }
                  else
                   callback(e);
                  });
   };