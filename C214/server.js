const  express = require("express");
const app = express()
const server = require("htpp").Server(app);


app.set("view engine", "ejs");
app.use(express.static('public'));
const  {  v4 : uuidv4} = require ("uuid");

app.get("/", (req, res) => {
    res.redirect(`/${uuidv4()}`);
});


/* app.get("/" ,(req,res) => 
{
    res.status(200).send("Hello World")
});
server.listen(3030)
*/

app.get('/:room', (req, res) => {
    res.render("index", { roomId: req.params.room });
});

server.listen(3030);
