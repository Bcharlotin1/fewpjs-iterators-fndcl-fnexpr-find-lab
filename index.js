

function  superbowlWin(array) {

   const winner =  array.find(function(element){

        return element.result === "W"    

    })
    if (winner){
        return winner.year
    }
}

// const record = [
//     {year: "2018", result: "L"},
//     {year: "2017", result: "W"},
//     {year: "2016", result: "N/A"}
//     //...
//   ]
