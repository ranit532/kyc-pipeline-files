const newman = require('newman');

// Function to run a Postman collection
function runCollection(collectionPath, environmentPath, callback) {
    newman.run({
        collection: require(collectionPath),
        environment: require(environmentPath),
        reporters: 'cli'
    }, callback);
}

// Sample function to invoke the collection run
function invokeCollectionRun() {
    const collectionPath = './path/to/your-collection.json';
    const environmentPath = './path/to/your-environment.json';

    runCollection(collectionPath, environmentPath, (err, summary) => {
        if (err) {
            console.error('Collection run encountered an error:', err);
        } else {
            console.log('Collection run completed successfully.');
            console.log('Total requests:', summary.run.stats.requests.total);
            console.log('Total assertions:', summary.run.stats.assertions.total);
            console.log('Failed assertions:', summary.run.stats.assertions.failed);
        }
    });
}

// Invoke the sample function
invokeCollectionRun();