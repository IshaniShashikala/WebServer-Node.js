const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))
// console.log(path.join(__dirname, '../..'))
// console.log(__filename)

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// app.get('',(req, res)=>{
//     res.send('<h1>Weather</h1>')
// })

// app.get('/help',(req,res)=>{
//     res.send([{
//         name:'Andrew'
//     },{
//         name:'Sarah'
//     }])
        // res.send({
        //     name: 'Andrew',
        //     age:27
        // })
// })

// app.get('/about', (req,res)=>{
//     res.send('<h1>About</h1>')
//     //res.send('Hello Server!')
// })

app.get('/weather', (req,res)=>{
    res.send({
        forecast: 'It is snowing',
        location: 'Dublin'
    })
})

app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})

//app.com
//app.com/help
//app.com/about