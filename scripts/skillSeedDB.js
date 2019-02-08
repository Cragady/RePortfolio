// boiler to change


const mongoose = require('mongoose'),
    db = require('../models'),
    portData = require('./portData.json'),
    pa = process.argv;

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
            // the below comments are kept for checking the insertion
            // console.log(data + ' inserted');
            // console.log(item.title + ' inserted');
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
    if(pa[2]){
        console.log("hit the danger button!");
        db.PicData.remove({})
        .then(() =>{
            seeder(0, seeder);
        });
    } else {
        console.log("did not hit the danger button D:");
        seeder(0, seeder);
    };
};

dbChanger();