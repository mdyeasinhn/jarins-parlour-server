import app from "./app";

function server () {
    app.listen(500, ()=>{
        // eslint-disable-next-line no-console
        console.log("server is running 🏃‍♂️‍➡️")
    })
}

server();