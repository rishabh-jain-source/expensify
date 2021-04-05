// const path = require("path")
// const express =require('express')
// const app = express();
// const publicPath = path.join(__dirname, '..', 'public')
// const port = process.env
//     .PORT || 3000;
// app.use(express.static(publicPath));

// app.get('*', (req,res) => {
//     res.sendFile(path.join(publicPath,'index.html'))
// })

// app.listen(port, () => {
//     console.log("running")
// })

const path = require('path')
const publicpath = path.join(__dirname, '..', 'public')
const express = require('express')
const port=process.env.PORT ||3000
const app = express()
app.use(express.static(publicpath))

// app.listen(3000) => {
//     //res.sendFile(path.join(publicpath,'index.html'));
// })
app.get('*', (req, res) => {
    res.sendFile(path.join(publicpath,'index.html'))
})
app.listen(port, () => {
    console.log("running")
})