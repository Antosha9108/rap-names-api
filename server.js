const { response } = require('express')
const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
    'age':29,
    'birthName':'Sheyaa Bin Abraham-Joseph',
    'birthLocation':'London, England'
},
'chance':{
    'age':29,
    'birthName':'CHANCELLOR',
    'birthLocation':'Chicago, IL'


},
'unknown':{
    'age':0,
    'birthName':'Unknown',
    'birthLocation':'Unknown'
}
}

app.get('/', (request,response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const rapperName = request.params.name.toLocaleLowerCase()
    if (rappers[rapperName]) {
        response.json(rappers[rapperName])
    }
    response.json(rappers)
})


app.listen(PORT, () =>{
    console.log(`the server is now runnin on port ${PORT}! Betta Go Catch It!!`)
})