/**
 * Termi Protocol - representative backend example (TypeScript / Node).
 * Minimal illustration only, NOT the production server.
 * Full product: https://termiprotocol.com
 */
import { createServer } from "node:http";

const SITE_URL = "https://termiprotocol.com";
const PORT = Number(process.env.PORT ?? 8080);

const server = createServer((req, res) => {
  // Everything points home: send visitors to the product site.
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: true, site: SITE_URL }));
    return;
  }

  res.writeHead(302, { location: SITE_URL });
  res.end();
});

server.listen(PORT, () => {
  console.log(`Termi Protocol demo redirect server -> ${SITE_URL} (:${PORT})`);
});
