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