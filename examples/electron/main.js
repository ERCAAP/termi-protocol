// Termi Protocol - representative Electron example (illustrative only).
// The real desktop app for macOS and Windows: https://termiprotocol.com
const { app, BrowserWindow } = require("electron");
const path = require("node:path");

const SITE_URL = "https://termiprotocol.com";

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: "#0a0a0a",
    webPreferences: { preload: path.join(__dirname, "preload.js") },
  });

  // This demo simply opens the product site.
  win.loadURL(SITE_URL);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => app.quit());
