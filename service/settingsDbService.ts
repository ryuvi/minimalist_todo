// // services/settingsDbService.mmkv.ts
// const THEME_KEY = 'theme-settings';

// export const settingsDbService = {
//   async getThemeKey(): Promise<string | null> {
//     try {
//       const value = storage.getString(THEME_KEY);
//       return value ?? null;
//     } catch (error) {
//       console.error('Erro ao buscar tema:', error);
//       return null;
//     }
//   },

//   async saveThemeKey(themeKey: string): Promise<void> {
//     try {
//       storage.set(THEME_KEY, themeKey);
//     } catch (error) {
//       console.error('Erro ao salvar tema:', error);
//     }
//   },
// };
