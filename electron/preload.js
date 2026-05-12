const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  loadData: () => ipcRenderer.invoke("load-data"),

  saveData: (entries) => ipcRenderer.invoke("save-data", entries),

  exportData: (entries) => ipcRenderer.invoke("export-data", entries),

  importData: () => ipcRenderer.invoke("import-data"),
});
