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
    let inputElement = d3.select("#timedate");
    let inputValue = inputElement.property("value");
    console.log(inputValue);
    data.map((sight) => {
        let x = sight.datetime;
        if (x === inputValue) {
            console.log(sight);
            let tbody = d3.select("tbody");
            let row = tbody.append("tr");
            Object.entries(sight).forEach(([key,value]) => { 
                let cell = row.append("td");
                cell.text(value);
            });
        };
    });
});

//