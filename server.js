const express = require("express");
const app = express();

app.get("/api/index", (req, res) => {
    const data = {
        1: "First",
        2: "Second"
    }
    res.json(data);
});

const port = 5000;
app.listen(port || process.env.PORT, () => { console.log(`Listening on port ${port}`) })