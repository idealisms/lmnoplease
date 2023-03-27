import bodyParser from "body-parser";
import express from "express";
import { postMessages, putMessage } from "./routes/messages";
import { listPuzzles, getPuzzle } from "./routes/puzzles";
import { getUser } from "./routes/users";

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TODO: Authentication. Probably using express-jwt.

// user
app.get("/api/users/:id", getUser);

// messages
app.post("/api/messages", postMessages);
app.put("/api/messages/:id", putMessage);

app.get("/api/ls", listPuzzles);
app.get("/api/getPuzzle", listPuzzles);

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
