import mysql from 'mysql';


let client;

function getClient() {
    if (client) {
        return client;
    }
    client = mysql.createConnection({
        host: "mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com",
        user: "bsale_test",
        password: "bsale_test",
        database: "bsale_test"
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