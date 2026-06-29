// Termi Protocol - representative Electron preload (illustrative only).
// Full app: https://termiprotocol.com
const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("termi", {
  site: "https://termiprotocol.com",
  channel: "demo",
});
