import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    loading: false,
    filteredCountries: [],
    countries: [],
    countriesByRegion: [],
    borderCountries: [],
    regions: [],
  }),
  actions: {
    setAllCountries(val) {
      this.countries = val
    },
    toggleLoading(val) {
      this.loading = val
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
    setRegions() {
      const regions = ['All']
      this.countries.forEach((obj) => {
        if (!regions.includes(obj.region)) {
          regions.push(obj.region)
        }
      })
      this.regions = regions.sort((a, b) =>
        a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b)
      )
    },
    filterRegions(region) {
      if (region === 'All') {
        this.countriesByRegion = this.countries
      } else {
        this.countriesByRegion = this.countries.filter(
          (country) => country.region === region
        )
      }
    },
    filterByQuery(query) {
      if (query !== '') {
        this.filteredCountries = this.countries.filter((country) =>
          country.name.common.toLowerCase().includes(query.toLowerCase())
        )
      } else {
        this.filteredCountries = this.countries
      }
    },
  },
})

