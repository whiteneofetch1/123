var fs = require('fs');

fs.readFile('./devices.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    var obj = JSON.parse(data);
    for (let i = 0; i < 260; i = i + 1) {
        let Phrase = JSON.stringify(obj).split('},')[i].split(':{')[0]

        if (Phrase.indexOf('deviceScaleFactor') == -1 && Phrase.indexOf('viewport') == -1) {
            console.log(Phrase + ',')
        }
    }

});

