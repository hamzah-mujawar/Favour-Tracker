import express  from "express";
import admin from "firebase-admin";
const server = express();
const port: number = 3000;

// Use process environment variables to obtain the path to firebase admin key JSON file.
let fbase_admin_key_path: string = process.env.FIREBASE_ADMIN_KEY_PATH || "";
try {
    admin.initializeApp({
        credential: admin.credential.cert(require(fbase_admin_key_path))
    });
} catch(e) {
    // If an error happens nicely print it and exit.
    console.error(`Error occured while initialising firebase app: ${e}`)
    process.exit(1);
}


server.get("/", (_, res) => {
    res.send("Hello from FavourTracker server!");
})

server.listen(port, () => {
    console.log(`Server started and listening on port ${port}`);
})

