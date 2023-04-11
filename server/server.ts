import bodyParser from "body-parser";
import express from "express";
import { postMessages, putMessage } from "./routes/messages";
import { listPuzzles, getPuzzle } from "./routes/puzzles";
import { getUser } from "./routes/users";
import session from "express-session";
import passport from "passport";
import { OAuth2Strategy } from "passport-oauth";
import request from "request";
import { TWITCH_SECRET, SESSION_SECRET } from "../secrets";

// Configure theses and the secrets.ts file.
const hostname = "http://localhost:5000";
const TWITCH_CLIENT_ID = "zjps40uq7gzcnxix0gaot92wca5wn5";
const CALLBACK_URL = `${hostname}/auth/twitch/callback`;

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({secret: SESSION_SECRET, resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

// user
app.get("/api/users/:id", getUser);

// messages
app.post("/api/messages", postMessages);
app.put("/api/messages/:id", putMessage);

app.get("/api/ls", listPuzzles);
app.get("/api/getPuzzle", getPuzzle);

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
