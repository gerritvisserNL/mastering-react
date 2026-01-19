import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactsRouter from "./routes/contactsRouter.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/contacts", contactsRouter);

// Test Route
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
