var fs = require('fs');


function extractColors() {
  fs.readFile('project-files/cartocolors.json', function(err, data) {
    if (err) throw err;

    console.log('cartocolors.json data loaded!');

    var data = JSON.parse(data);

    var outputData = {'Vivid': data['Vivid']};

    console.log('extracted Vivid scheme');

    fs.writeFile('data/vividcolors.json', JSON.stringify(outputData), 'utf-8', function(err) {
      if (err) throw err;
      console.log('file written to data/');
    });
  });
}

exports.extractColors = extractColors
