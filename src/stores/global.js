import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({ counties: [] }),
  actions: {
    setAllCountries(val) {
      this.countries = val
    },
  },
})