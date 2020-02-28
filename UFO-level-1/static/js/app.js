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

    // identifying filter values
    var inputFilter = d3.select('#datetime')
    var valueFilter = inputFilter.property('value')


    // parsing valueFilter for start and end dates (date range filter)
    var parseDate = valueFilter.split('-')

    // setting start and end dates based
    if (parseDate[0] < parseDate[1]) {
        var startDate = parseDate[0]
        var endDate = parseDate[1]
    }
    else {
        var startDate = parseDate[1]
        var endDate = parseDate[0]

        // changing startDate to endDate if only 1 date was input
        if (typeof startDate === 'undefined') {
            startDate = endDate
        }
    }

    // filtering dataset
    var filterData = tableData.filter( siting => siting.datetime >= startDate && siting.datetime <= endDate)

    console.log(filterData)
    // identifying table on html
    var tbody = d3.select("tbody");

    // clearing previous results
    tbody.html('')

    
    // checking for filter active, and outting entire table if not
    if (valueFilter === '') {

        filterData === tableData

        tableData.forEach((siting) => {
            var row = tbody.append("tr");
            Object.entries(siting).forEach(([key, value]) => {
              var cell = row.append("td");
              cell.text(value);
            });
          });
    }

    // outputting filtered data, if filter active
    else {
        filterData.forEach((siting) => {
            var row = tbody.append("tr")
            Object.entries(siting).forEach(([key, value]) => {
            var cell = row.append("td")
            cell.text(value)
            })
        })
    }
})