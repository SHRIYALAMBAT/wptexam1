const mysql = require("mysql");
const Promise = require("bluebird");


Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "project2"
};

const rec = {
    sender: "shriya",
    receiver: "priya",
    message: "Hello"
}
const addRec = async (rec) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `insert into message (sender,receiver,message) values (?,?,?)`;
    await connection.queryAsync(sql, [rec.sender, rec.receiver, rec.message]);
    await connection.endAsync();
    console.log("message added");
}
const getRec = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    const sql = `select * from messagetab`;
    const list = await connection.queryAsync(sql, []);
    await connection.endAsync();
    console.log("list of rec added")
    return list;
}
getRec()

module.exports = { addRec, getRec };










