const PORT = 5555
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://fr.wikipedia.org/wiki/League_of_Legends#:~:text=League%20of%20Legends%20(abrégé%20LoL,sur%20Windows%20et%20Mac%20OS.'

axios(url)
.then(res => {
    const html = res.data
    const page = []
    const $ = cheerio.load(html)
    $('.sidebar-toc-text', html).each(function() {
        const text = $(this).text()
    })
    console.log(page)

})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})