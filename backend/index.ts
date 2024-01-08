import express, {Express, Request, Response} from "express";
const server: Express = express();
const port: number = 3000;

server.get("/", (req: Request, res: Response) => {
    res.send("Hello from FavourTracker server!");
})

server.listen(port, () => {
    console.log(`Server started and listening on port ${port}`);
})

