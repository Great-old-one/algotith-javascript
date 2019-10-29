import server from "./server";

const port = 7000;

server.listen(port, () => {
    console.log("server is listening http:localhost:" + port);
});
