
const fs = require('fs')

var stats = require('stats-lite')
const readline = require('readline')

var zxcvbn = require(process.argv.slice(2)[1])

var inputFile = process.argv.slice(2)[0]

var zxcvbn_obj = null

var secHour100List = []

function printStats(input_list) {
    console.log("Min: " + Math.min(...input_list))
    console.log("Max: %s", Math.max(...input_list))
    console.log("mean: %s", stats.mean(input_list))
    console.log("median: %s", stats.median(input_list))
    console.log("mode: %s", stats.mode(input_list))
    console.log("variance: %s", stats.variance(input_list))
    console.log("standard deviation: %s", stats.stdev(input_list))
    console.log("sample standard deviation: %s", stats.sampleStdev(input_list))
    console.log("85th percentile: %s", stats.percentile(input_list, 0.85))
    console.log("histogram:", stats.histogram(input_list, 10))
}



const readInterface = readline.createInterface({
    input:fs.createReadStream(inputFile),
    output: process.stdout,
    console:false
});

readInterface.on('line', function (line) {

    zxcvbn_obj = zxcvbn(line);

    var score = zxcvbn_obj.score

    secHour100List.push(score)

}).on('close', () => {

    console.log("Total Processed passwords " + secHour100List.length)

    printStats(secHour100List)
});



