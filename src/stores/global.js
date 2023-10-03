import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({ countries: [] }),
  actions: {
    setAllCountries(val) {
      this.countries = val
    },
    getBorderCountries(borderCountries) {
      if (!borderCountries) return 'N/A'
      let filteredBorderCountries = []
      for (let i = 0; i < borderCountries.length; i++) {
        for (let j = 0; j < this.countries.length; j++) {
          if (borderCountries[i] === this.countries[j].cca3) {
            filteredBorderCountries.push(this.countries[j].name.common)
          }
        }
      }
      return filteredBorderCountries
    }
  },
})