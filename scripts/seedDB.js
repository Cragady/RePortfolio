const mongoose = require('mongoose'),
    db = require('../models'),
    portData = require('./portData.json');

// console.log(portData[0].link);

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/portyPorts'
);

db.PicData.remove({})
    .then(() =>{//start chain

portData.forEach(function(item, iterator){
    db.PicData  
        .updateOne({'title': item.title}, item, {upsert: true, '$setOnInsert': {'title': item.title}})
        .then(data => {
            console.log(data + ' records inserted!');
            if(iterator === portData.length - 1){
                process.exit(0);
            };
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
});

}); //end chain

