import express from "express";

const app = express();

app.get("/users");

app.listen(3333, () => console.log("Sever is running port 3333"));
