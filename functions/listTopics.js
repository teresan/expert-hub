exports.handler = function(context, event, callback) {
    
    const keywords = event.keywords;
    
    let originalTopics = [];
    if (keywords.search(',') >= 0) {
        originalTopics = keywords.split(',').filter(e => e !== '');
    } else if (keywords.search(' ') >= 0) {
        originalTopics = keywords.split(' ').filter(e => e !== '');
    } else {
        originalTopics.push(keywords.trim());
    }
    
    console.log(originalTopics);
    
    processAllTopics(context.getTwilioClient(), originalTopics)
        .then(processedTopics => {
            console.log('processedTopics:' + processedTopics)
            callback(null, processedTopics);
    });

};

const getTaskName = (client, topic) => {
    let taskName = client.autopilot.assistants(context.TWILIO_AUTOPILOT_ASSISTANT_SID)
        .queries
        .create({ language: 'en-US', query: topic.trim() })
        .then(query => {
            return query.results.task;
        });
    return Promise.resolve(taskName);
};

function processTopic(client, topic) {
    return Promise.resolve(getTaskName(client, topic));
}

function processAllTopics(client, originalTopics) {    
    return Promise.all(originalTopics.map(topic => processTopic(client, topic)));
}