export {};

declare global {
  interface Window {
    electronAPI: {
      loadData: () => Promise<any>;
      saveData: (entries: any) => Promise<any>;
      exportData: (entries: any) => Promise<any>;
      importData: () => Promise<any>;
      getDataPath: () => Promise<string>;
      backupData: (entries: any) => Promise<any>;
    };
  }
}
