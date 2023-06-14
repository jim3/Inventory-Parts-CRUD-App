import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./db.js";
import partsRoute from "./routes/partsRoute.js";
import accountsRoute from "./routes/accountsRoute.js";

dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set the path to the views directory
app.set("views", path.resolve(process.cwd(), "views"));

// serve static assets from the public directory
app.use(express.static(path.resolve(process.cwd(), "public")));

app.use("/", partsRoute);
app.use("/", accountsRoute);

// sync the database
sequelize.sync().then(() => {
    console.log("Synced db.");
});

// start the server & begin listening for requests
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
