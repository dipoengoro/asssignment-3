const express = require("express");
const router = express();

const rootDir = require('../util/path');
const path = require("path");

router.get('/', (req, res) => {
   res.sendFile(path.join(rootDir, 'views', 'users.html'));
});

module.exports = router;