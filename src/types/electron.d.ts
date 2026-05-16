export {};

declare global {
  interface Window {
    electronAPI?: {
      loadData: () => Promise<any>;
      saveData: (data: any) => Promise<void>;
    };
  }
}
