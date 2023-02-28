const app = require('./app');
const config = require('./app/config');


// start the server

const PORT = config.app.port;
app.listen(PORT, (req, res) => {
    console.log(`Server running at http://localhost:${PORT}`);
})