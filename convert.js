
// console.log(data);

// load text from mybib.bib into bibData

const fs = require('fs');

let data = JSON.parse(fs.readFileSync('input.json', 'utf8'));

let bibData = fs.readFileSync('mybib.bib', 'utf8').split("\n");

// go through each line in bibData and if a url is found add "something"+getDateFromData(url) in the next line

bibData = bibData.map(element => {
    if(element.includes("url = ")){
        let url = element.split("url = ")[1].split(",")[0].split("{")[1].split("}")[0];
        // console.log(url);
        let date = getDateFromData(url);
        if(date != undefined){
            element = "    url = {" + url + "},\n    note = {last access at " + date + "},";
        }
    }
    return element;
});

// write bibData to output.bib

fs.writeFileSync('output.bib', bibData.join("\n"));

function getDateFromData(url){
    let date = "";
    data.forEach(element => {
        if(element.websites == undefined){
            return;
        }
        if(element.websites[0] == url){
            date = element.accessed;
        }
    });

    return date;
}


