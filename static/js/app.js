// Tin-Foil-Hats
// Author: Andrew McKinney
// Creation Date: 2020/02/28



// data import from data.js
var tableData = data;

// identifying table on html
var tbody = d3.select("tbody");

// identifying filter button
var buttonFilter = d3.select('#filter-btn')

// initalizing table on load
tableData.forEach((siting) => {
    var row = tbody.append("tr")
    Object.entries(siting).forEach(([key, value]) => {
      var cell = row.append("td")
      cell.text(value)
    })
  })

// filtering on button
buttonFilter.on('click', function() {

    // identifying filter items
    var dateFilter = d3.select('#datetime')
    var cityFilter = d3.select('#city')
    var stateFilter = d3.select('#state')
    var countryFilter = d3.select('#country')
    var shapeFilter = d3.select('#shape')

    // checking if filters active, if so, reading filter values, else using full list of values from dataset
    var valueDate = ( ( dateFilter.property('value') === '' ) ? tableData.map(siting => siting.datetime ) : dateFilter.property('value') )
    var valueCity = ( (cityFilter.property('value') === '' ) ? tableData.map(siting => siting.city) : cityFilter.property('value') )
    var valueState = ( (stateFilter.property('value') === '' ) ? tableData.map(siting => siting.state) : stateFilter.property('value') )
    var valueCountry = ( (countryFilter.property('value') === '' ) ? tableData.map(siting => siting.country) : countryFilter.property('value') )
    var valueShape = ( (shapeFilter.property('value') === '' ) ? tableData.map(siting => siting.shape) : shapeFilter.property('value') )


    // filtering dataset
    var filterData = tableData.filter( 
        siting => 
        valueDate.includes(siting.datetime) &&
        valueCity.includes(siting.city) &&
        valueState.includes(siting.state) &&
        valueCountry.includes(siting.country) &&
        valueShape.includes(siting.shape)
        )

    // identifying table on html
    var tbody = d3.select("tbody");

    // clearing previous results
    tbody.html('')

    // outputting filtered data to html
    filterData.forEach((siting) => {
        var row = tbody.append("tr")
        Object.entries(siting).forEach(([key, value]) => {
        var cell = row.append("td")
        cell.text(value)
        })
    })
})