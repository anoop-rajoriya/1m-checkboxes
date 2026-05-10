import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const port = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "../public");

async function main() {
  const app = express();
  app.use(express.static(publicDir));

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
  });
}

main().catch((err) => console.error(`Server Error ${err.message}`));
