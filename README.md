# To Do

* Make accordion sidebar for nav-bar; will only expand when on the main page
* Migrate pictures and meta-data for pics to database for storing
* use `multer`, `multer-gridfs-storage`,`method-override`, `gridfs (maybe not package)`, and `gridfs-stream` for this
* make an easy submit page for updating portfolio; will only be accessible to me with credentials
* make user login for me only
* prettify it (this may be the heaviest time sink? Maybe)

# packages example:

```javascript
//yarn add multer multer-gridfs-storage gridfs-stream method-override

const express = require('express'),
    path = require('path'),
    crypto = require('crypto'),
    mongoose = require('mongoose'),
    multer = require('multer'),
    GridFsStorage = require('multer-gridfs-storage'),
    Grid = require('gridfs-stream'),
    methodOverride = require('method-override');

```

# example for server (need to convert to react)

```javascript
const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    crypto = require('crypto'),
    mongoose = require('mongoose'),
    multer = require('multer'),
    GridFsStorage = require('multer-gridfs-storage'),
    Grid = require('gridfs-stream'),
    methodOverride = require('method-override'),
    PORT = 3000;

const app = express();
//middleware
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs'); //I won't need this, I'm using react

// Mongo URI
const mongoURI = 'mongodb goes here';

// create mongo connection
const conn = mongoose.createConnection();

// init gfs
let gfs;

conn.once('open', () =>{
    // init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('port-up');
});

//create storage engine
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) =>{
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) =>{
                if(err){
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'port-up'
                };
                resolve(fileInfo);
            });
        });
    };
});
const upload = multer({ storage });

// @route GET /
// @desc loads form

app.get('/', (req, res) => {
    gfs.files.find().toArray((err, files), =>{
        // Check if files 
        if(!files || files.length === 0){
            res.render('index', {files: false});
        } else {
            files.map(file =>{
                if(file.contentType === 'image/jpeg' }|| file.contentType === 'image/png'){
                    file.isImage = true;
                } else {
                    file.isImage = false;
                };
            });
            res.render('index', {files: files});
        };
    });
});

// @route POST /upload
// @desc uploads file to DB
app.post('/upload', upload.single(/*put the name of form, declared in html*/), (req, res) =>{
    //res.json({file: req.file});
    res.redirect('/');
});
//multer can upload multiple

// @route GET /files
// @desc Display all files in JSON
app.get('/files', (req, res) =>{
    gfs.files.find().toArray((err, files), =>{
        // Check if files 
        if(!files || files.length === 0){
            return res.status(404).json({
                err: 'No files exist'
            });
        };
        //files exist
        return res.json(files);
    });
});

// @route GET /files/:filename
// @desc Displays file in JSON
app.get('/files/:filename', (req, res) =>{
    gfs.files.findOne({filename: req.params.filename}, (err, file) =>{
        if(!file || file.length === 0){
            return res.status(404).json({
                err: 'No file exists'
            });
        };
        // file exists
        return res.json(file);
    });
});

// @route GET /image/:filename
// @desc Display single file object
app.get('/image/:filename', (req, res) =>{
    gfs.files.findOne({filename: req.params.filename}, (err, file) =>{
        if(!file || file.length === 0){
            return res.status(404).json({
                err: 'No file exists'
            });
        };
        // check if image
        if(file.contentType === 'image/jpeg' || file.contentType === 'img/png'){
            // read output to browser
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            res.status(404).json({
                err: 'Not an image'
            });
        };
    });
});

// @route DELETE /files/:id
// @desc Delete file
app.delete('/files/:id', (req, res) =>{
    gfs.remove({_id: req.params.id, root: 'port-up'}, (err, gridStore) =>{
        if(err){
            return res.status(404).json({ err: err }):
        };
        res.redirect('/');
    });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));

```