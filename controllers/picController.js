// const mongoose = require('mongoose'),
//     multer = require('multer'),
//     GridFsStorage = require('multer-gridfs-storage'),
//     Grid = require('gridfs-stream'),
//     mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/portyPorts';

// const conn = mongoose.createConnection(mongoURI);
// let gfs;
// conn.once('open', () =>{
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection('port-up');
// });

// const storage = new GridFsStorage({
//     url: mongoURI,
//     file: (req, file) =>{
//         return new Promise((resolve, reject) =>{
//             crypto.randomBytes(16, (err, buf) =>{
//                 if(err){
//                     return reject(err);
//                 };
//                 const filename = buf.toString('hex') + path.extname(file.originalname);
//                 const fileInfo = {
//                     filename: filename,
//                     bucketName: 'port-up'
//                 };
//                 resolve(fileInfo);
//             });
//         });
//     }
// });
// const upload = multer({ storage });

// module.exports = {

//     findAll: function(req, res){
//         gfs.files
//             .find()
//             .toArray((err, files) =>{
//                 if(!files || files.length === 0){
//                     res.status(404).json({msg: 'not found'});
//                 } else {
//                     files.map(file =>{
//                         if(file.contentType === 'image/jpeg' || file.contentType === 'image/png'){
//                             file.isImage = true;
//                         } else {
//                             file.isImage = false;
//                         };
//                     })
//                     .catch(err => res.status(422).json(err));
//                 };
//         });
//     },

//     create: function(req, res){
//         upload.single('up-pic')
//         .then(dbModel =>{
//             res.json(dbModel);
//         })
//         .catch(err =>{
//             res.status(402).json(err);
//         });
//     },
// };