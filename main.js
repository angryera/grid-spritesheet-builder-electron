const { app, BrowserWindow } = require("electron");
const path = require("path");

if (require("electron-squirrel-startup")) app.quit();
// if first time install on windows, do not run application, rather
// let squirrel installer do its work
const setupEvents = require("./installer/setup-events");
if (setupEvents.handleSquirrelEvent()) {
  process.exit();
}

function createWindow() {
  const win = new BrowserWindow({
    titleBarStyle: "hidden",
    ...(process.platform !== "darwin" ? { titleBarOverlay: true } : {}),
    width: 1280,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, "src/assets/script.js"),
      contextIsolation: true,
    },
  });

  win.loadFile("src/index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
