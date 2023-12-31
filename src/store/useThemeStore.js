import { defineStore } from "pinia";

export const useThemeStore = defineStore('theme', {
    state: () => ({
        theme: 'dark'
    }),

    actions: {
        toggleTheme() {
            this.theme = this.theme == 'light' ? 'dark' : 'light';
        }
    },
    persist: true

})