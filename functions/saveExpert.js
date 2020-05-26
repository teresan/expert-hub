exports.handler = function(context, event, callback) {
	
	//Build expert json
    var payload = {
	    name: event.name,
	    number: event.number,
	    topics: event.topics
	};
	
	console.log(payload);
	
	//Submit to expert hub API
	const axios = require('axios');
	
	axios.post('https://iris-bobcat-6430.twil.io/experts/add', {
	    service: 'IS9115e5981568c4e980c1711e0b691dde',
	    expert: JSON.stringify(payload)
	})
    .then(response => {
        callback(event.topics);
    })
    .catch(error => {
        callback(error);
    });
	
};

