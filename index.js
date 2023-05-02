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

// set view engine to ejs
app.set("view engine", "ejs");

app.set("views", path.resolve(path.dirname("file"), "views"));

app.use(express.static(path.resolve(path.dirname("file"), "public")));

app.use("/", partsRoute);
app.use("/", accountsRoute);

// sync the database
sequelize.sync().then(() => {
    console.log("Synced db.");
});

// start server / begin listening for requests
const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
