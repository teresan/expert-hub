exports.handler = function(context, event, callback) {
    const topic = event.topic;
    const channelSid = event.channelSid;
    const expertList = [];
    
	const axios = require('axios');
	axios.get('https://iris-bobcat-6430.twil.io/experts/list', {
	    service: 'IS9115e5981568c4e980c1711e0b691dde'
	})
	.then(response => {
	    const data = JSON.parse(response.data);
	    
	    response.forEach(expert => {
	        if (expert.topics.find(topic) !== undefined) {
	            
	            context.getTwilioClient().chat.services(context.TWILIO_EXPERT_CHAT_SID)
            	    .channels(channelSid)
                    .members
                    .create({identity: expert.name})
                    .then(member => console.log(member.sid))
                    .catch(error => callback(error));
                    
	        }
	    })
	})
	.catch(error => callback(error));
	
	console.log(expertList);
	callback(null, expertList);
};