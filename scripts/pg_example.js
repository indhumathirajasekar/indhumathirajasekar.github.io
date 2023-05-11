const {pool} = require('pg');
const connectionInfo = `postgres://mywebappuser:1234567@localhost:5432/mywebapp`;
const pool = new pool({connectionString: connectionInfo});
pool.query(
    `SELECT * From bowlers`,
    [],
    function (err, result) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(result.rows);
        process.exit(0);
    }
    );