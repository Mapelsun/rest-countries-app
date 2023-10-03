import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({ countries: [] }),
  actions: {
    setAllCountries(val) {
      this.countries = val
    },
    getBorderCountries(borderCountries) {
      const filteredBorderCountries = this.countries
        .filter((country) => borderCountries.includes(country.cca3))
        .map((country) => country.name.common)

      return filteredBorderCountries
    },
  },
})
