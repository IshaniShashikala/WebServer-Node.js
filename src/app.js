const path = require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))
// console.log(path.join(__dirname, '../..'))
// console.log(__filename)

const app = express()

//Define paths for Express config 
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views') //customize views foldeer and path
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directoy to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index',{
        title:'Weather',
        name: 'Ishani'
    })
})

app.get('/about', (req, res)=>{
    res.render('about',{
        title:'About Me',
        name: 'Ishani'
    })
})

app.get('/help', (req, res)=>{
    res.render('help',{
        helpText:'This is some helpful text',
        title:'Help',
        name: 'Ishani'
    })
})
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

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Ishani',
        errorMessage:'Help aticle not found'
    })
   })

app.get('*',(req,res)=>{
 res.render('404',{
     title:'404',
     name:'Ishani',
     errorMessage:'Page not found'
 })
})


app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})

//app.com
//app.com/help
//app.com/about