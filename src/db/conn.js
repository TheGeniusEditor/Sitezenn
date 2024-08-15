const mongoose = require("mongoose");

// Replace <username>, <password>, and <cluster-url> with your Atlas credentials and cluster information
const atlasUri = "mongodb+srv://arunnayaka99:jCtXf2z8LYKn2soC@cluster0.wav54.mongodb.net/sz?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(atlasUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Connection successful`);
}).catch((e) => {
    console.log(`No connection: ${e.message}`);
});
