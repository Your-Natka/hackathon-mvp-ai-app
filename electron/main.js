const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("fs");

let mainWindow;

// =========================
// DATA FILE
// =========================

function getDataFilePath() {
  if (process.defaultApp || !app.isPackaged) {
    return path.join(__dirname, "chat_data.json");
  }

  let appDir;

  if (process.env.PORTABLE_EXECUTABLE_DIR) {
    appDir = process.env.PORTABLE_EXECUTABLE_DIR;
  } else {
    appDir = path.dirname(app.getPath("exe"));
  }

  return path.join(appDir, "chat_data.json");
}

const dataFilePath = getDataFilePath();

// =========================
// CREATE WINDOW
// =========================

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),

      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // =========================
  // NEXT.JS
  // =========================

  mainWindow.loadURL("http://localhost:3000");
}

// =========================
// APP READY
// =========================

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// =========================
// CLOSE APP
// =========================

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// =========================
// IPC
// =========================

// LOAD DATA
ipcMain.handle("load-data", async () => {
  try {
    if (fs.existsSync(dataFilePath)) {
      const data = fs.readFileSync(dataFilePath, "utf-8");
      return JSON.parse(data);
    }

    return [];
  } catch (error) {
    console.error("LOAD ERROR:", error);
    return [];
  }
});

// SAVE DATA
ipcMain.handle("save-data", async (event, entries) => {
  try {
    const data = JSON.stringify(entries, null, 2);

    fs.writeFileSync(dataFilePath, data, "utf-8");

    return {
      success: true,
    };
  } catch (error) {
    console.error("SAVE ERROR:", error);

    return {
      success: false,
      error: error.message,
    };
  }
});

// EXPORT
ipcMain.handle("export-data", async (event, entries) => {
  try {
    const result = await dialog.showSaveDialog(mainWindow, {
      title: "Export Data",

      defaultPath: "chat_backup.json",

      filters: [
        {
          name: "JSON",
          extensions: ["json"],
        },
      ],
    });

    if (!result.canceled && result.filePath) {
      fs.writeFileSync(
        result.filePath,
        JSON.stringify(entries, null, 2),
        "utf-8",
      );

      return {
        success: true,
      };
    }

    return {
      success: false,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
});

// IMPORT
ipcMain.handle("import-data", async () => {
  try {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ["openFile"],

      filters: [
        {
          name: "JSON",
          extensions: ["json"],
        },
      ],
    });

    if (!result.canceled) {
      const filePath = result.filePaths[0];

      const data = fs.readFileSync(filePath, "utf-8");

      return {
        success: true,
        entries: JSON.parse(data),
      };
    }

    return {
      success: false,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
});
