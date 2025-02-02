import express from "express";
import dotenv from "dotenv";
// import ejs from "ejs"
import path from "path"
import userRouter from "./routes/userRoute.js";
import postRouter from "./routes/postRoute.js";


dotenv.config({ path: "./config/config.env" });

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use("/api/v1/user", userRouter);
app.use("/api/v1/post", postRouter);

app.get("/", (req, res) => {
    // res.send("Hello from the server!");
    res.render("home", {
        title: "Social.ly",
    });
});

app.get("/login", (req, res) => {
    res.render("login")
})


export default app;