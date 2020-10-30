const fetch = require("node-fetch");
fetch("https://api.github.com/repos/request/request");
.then(response => response.json())
.then(response => console.log(response))
