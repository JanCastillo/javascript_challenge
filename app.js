var button= d3.select("#filter-btn");

var tbody = d3.select("tbody");

data.map((sight) => {
    let row = tbody.append("tr");
    Object.entries(sight).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
    });
});

button.on("click", function() {
    let tbody = d3.select("tbody");
    tbody.remove();
    d3.select("#ufo-table").append("tbody");
    var DateinputElement = d3.select("#timedate");
    var DateinputValue = DateinputElement.property("value");
    var StateinputElement = d3.select("#state");
    var StateinputValue = StateinputElement.property("value");
    console.log(DateinputValue);
    console.log(StateinputValue);
    var DateFilter = data.filter(sight => sight.datetime === DateinputValue);
    var StateFilter = DateFilter.filter(sight => sight.state === StateinputValue);
    console.log(DateFilter);
    console.log(StateFilter);
    if (StateFilter.length !== 0) {
        console.log("state found");
        StateFilter.map((sight) => {
            let tbody = d3.select("tbody");
            let row = tbody.append("tr");
            Object.entries(sight).forEach(([key,value]) => { 
                let cell = row.append("td");
                cell.text(value);
            });
        });
    } else {
        console.log("state not found");
        DateFilter.map((sight) => {
            let tbody = d3.select("tbody");
            let row = tbody.append("tr");
            Object.entries(sight).forEach(([key,value]) => { 
                let cell = row.append("td");
                cell.text(value);
            });
        });
    }
});