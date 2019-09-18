import Server from "./Server";

const server = new Server();
server.startAsync().then((port) => { console.log(`Listening on port ${port}`) });