module.exports = {
  important: true,
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'race': "url('../src/images/race.gif')",
        'driver': "url('../src/images/driver.jpg')",
      },
      fontFamily: {
        'logo': ['Montserrat'] 
      }
    },
  },
  plugins: [],
}