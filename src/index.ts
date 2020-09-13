import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import "./services/passport";
const app = express();

// Module imports
import userRoutes from "./routes/user";
import contactRoutes from "./routes/contacts";

// Configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(userRoutes);
app.use(contactRoutes);

// Error Handling
app.use((error, req, res, next) => {
  if (!error.statusCode) {
    error.statusCode = 500;
    error.message = "Server Error";
  }
  res.status(error.statusCode).json({ error: error.message });
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
