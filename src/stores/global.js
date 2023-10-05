import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({ countries: [], borderCountries: [] }),
  actions: {
    setAllCountries(val) {
      this.countries = val
    },
    getCountry(id) {
      const country = this.countries.find(
        (country) => country.cca2.toLowerCase() === id
      )
      this.getBorderCountries(country.borders)
      return country
    },
    getBorderCountries(borders) {
      this.borderCountries = this.countries
        .filter((country) => borders?.includes(country.cca3))
        .map((country) => ({ name: country.name.common, cca2: country.cca2 }))
    },
  },
})

