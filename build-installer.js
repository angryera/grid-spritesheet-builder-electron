const electronInstaller = require("electron-winstaller");

async function createWindowsInstaller() {
  try {
    await electronInstaller.createWindowsInstaller({
      appDirectory: "./out/map_grid-spritesheet-builder-eletron-win32-x64",
      outputDirectory: "./windows-installer",
      authors: "Angry Indie",
      exe: "map_grid-spritesheet-builder-eletron.exe",
      setupExe: "Setup.exe",
      version: "1.0.0",
      noMsi: true,
    });
    console.log("Installer created successfully!");
  } catch (e) {
    console.log(`Error creating installer: ${e.message}`);
  }
}

createWindowsInstaller();
