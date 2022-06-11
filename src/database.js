import mysql from 'mysql';
import "dotenv/config"


let client;

function getClient() {
    if (client) {
        return client;
    }
    client = mysql.createConnection({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE
    })
    client.connect();
    console.log("DB is connected");
    return client;
}

//keep alive
setInterval(function () {
    client.ping()
}, 4500)

export default getClient