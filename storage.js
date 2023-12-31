class Storage {
  constructor() {
    this.city;
    this.country;
    this.defaultCity = "London";
    this.defaultcountry = "UK";
  }

  getLocationData() {
    localStorage.getItem("city") === null
      ? (this.city = this.defaultCity)
      : (this.city = localStorage.getItem("city"));

    localStorage.getItem("country") === null
      ? (this.country = this.defaultcountry)
      : (this.country = localStorage.getItem("country"));

    return {
      city: this.city,
      country: this.country,
    };
  }

  setLocationData(city, country) {
    localStorage.setItem("city", city);
    localStorage.setItem("country", country);
  }
}
