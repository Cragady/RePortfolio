const portData = require('./portData.1.json'),
    fs = require('fs');

// console.log(portData);

portData.map(dataPoint =>{
    dataPoint.tags = dataPoint.tags.split(' ');
});

console.log(JSON.stringify(portData));

fs.writeFile('newData.json', JSON.stringify(portData));
