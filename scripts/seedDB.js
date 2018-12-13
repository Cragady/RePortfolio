const mongoose = require('mongoose'),
    db = require('../models'),
    portData = require('./portData.json');

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/portyPorts'
);

function seeder(iterator, cb){
    let item = portData[iterator];
    db.PicData  
        .updateOne(
            {'title': item.title}, 
            item, 
            {
                upsert: true, 
                '$setOnInsert': {'title': item.title}
            })
        .then(data =>{
            console.log(data + ' inserted');
            console.log(item.place + ' inserted');
            if(iterator < portData.length - 1){
                iterator++;
                cb(iterator, cb);
                return;
            } else {
                process.exit(0);
            }
        })
        .catch(err => {
            try{         
                if(iterator < portData.length){
                    console.error(err);
                    iterator++;
                    cb(iterator, cb);
                    return;
                } else {
                    console.error(err);
                    iterator++;
                    cb(iterator, cb);
                    return;
                };
            } catch(err2){
                console.error(err2);
                process.exit(1);
            };
        });
};

function dbChanger(){
    db.PicData.remove({})
    .then(() =>{
        seeder(0, seeder);
    });
};

dbChanger();