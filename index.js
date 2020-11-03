import Express from "express";

const app =  Express();
const port = 3000;

app.get("/", (req, res) => (
    res.send("Idk what I'm doing. 👍")
))

app.listen(port, () => console.log("listening on port" + port))