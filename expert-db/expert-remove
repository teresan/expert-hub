exports.handler = function(context, event, callback) {
  let response = { get_started: true };
    /* remove on expert from the group of experts of a given service
    * the unique identifier [key] = expert is the phone Number (with no +!!!)
    */
    
  /* Your code goes here */
  
 
 const sync_id = event['service'];
 const expert_key = event['expert'];
 //const expert = JSON.parse(expert_json);
 
 //HAPPY PATH
 
  console.log('CONTEXT:');
  for(var property in context) {
  console.log(property + "=" + context[property]);
  }
  
  console.log('EVENT:');
  for(var proper in event) {
  console.log(proper + "=" + event[proper]);
  }
  

 /* fetch service hosting our DB */
 const client = context.getTwilioClient();

 client.sync.services(sync_id)
                 .syncMaps('experts')
                 .syncMapItems(expert_key)
                 .remove();
            
    callback();
 
};
