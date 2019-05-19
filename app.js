// from data.js
// assign to arry
var tableData = data;

//create function
function buildtable(tdata){
    //loop for each ufo sighting
 tdata.forEach(ufoSight => {
     ufoRow = d3.select("tbody").append("tr")
     Object.values(ufoSight).forEach(ufoDetail => {
        ufoRow.append("td").text(ufoDetail)
     })
     
 });
     
}
function buttonclick(event){
    // prevent page from refreshing
    d3.event.preventDefault()
    
    d3.selectAll("tbody tr").remove()
    ufoDate = d3.select("#datetime").node().value
    buildtable(tableData.filter(function(element){return ufoDate===element.datetime}))
    console.log(ufoDate)
}

// YOUR CODE HERE!
d3.selectAll("#filter-btn").on("click",buttonclick);

buildtable(tableData)