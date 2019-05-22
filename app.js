// from data.js
// assign to array
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
    
    //remove table body
    d3.selectAll("tbody tr").remove()
    //declare variable
    ufoDate = d3.select("#datetime").node().value
    //if ufo is blank, show table
    if (ufoDate ==="") {
        buildtable(tableData)
    }
    else{
       //filter based on datetime
        buildtable(tableData.filter(function(element){return ufoDate===element.datetime}))
    }
    console.log(ufoDate)
}
// select on button click
d3.selectAll("#filter-btn").on("click",buttonclick);

buildtable(tableData)