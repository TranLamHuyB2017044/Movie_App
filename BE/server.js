const app = require('./app');
const config = require('./app/config');
const mongoose = require('mongoose');

// start the server

async function startServer(){
    try {
        await mongoose.connect(config.db.uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database !!');
        const PORT = config.app.port;
        app.listen(PORT, (req, res) => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
       console.log('Can not connect to database', error);
       process.exit(); 
    }
}

startServer();