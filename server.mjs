import express from 'express'





const app = express()
const port = process.env.PORT  || 5001 ;


app.get('/water', (req, res) => {
    
    res.send('your product has been saved')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})