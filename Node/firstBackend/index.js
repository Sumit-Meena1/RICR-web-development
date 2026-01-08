import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();
app.get("/", (req, res) => {
  console.log("server is running");
  res.json({ message: "server is running susseccfully on"  });
  res.json({ message: "server is also running susseccfully on"  });
});



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server started at port ", port);
});
