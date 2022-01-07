const express = require("express");
const app = express();


app.use(express.json());

const { addRec, getRec } = require('./user');
let cors = require("cors");
app.use(cors());


app.get("/get-rec", async (req, res) => {
    const list = await getRec();
    res.json(list);
});

app.post("/add-rec", async (req, res) => {
    const user = req.body;
    await addRec(user);
    res.json({ message: "rec added" });

});

app.listen(4000, () => {
    console.log("connection success");
});