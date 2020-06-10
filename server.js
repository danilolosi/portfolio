const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', (request, response) => {

    const about = {
        name: 'Danilo Losi',
        role: 'Aluno - Rocketseat',
        description: 'Programador back-end Java se aventurando no mundo Javascript. ' +
        'Aprendendo novas tecnologias para o meu futuro profissional!',
        links : [
            {
                name: 'Github',
                url: 'https://www.github.com/danilolosi/'
            },
            {
                name: 'Twitter',
                url: 'https://www.twitter.com/danilolosi/'
            },
            {
                name: 'Linkedin',
                url: 'https://www.linkedin.com/in/danilo-losi/'
            },
        ]
    }

    return response.render('about', {about: about})
})

server.get('/portfolio', (request, response) => {
    return response.render('portfolio', {items : videos})
})


server.get('/video', (request, response) => {
    const id = request.query.id
    const video = videos.find(video => video.id == id)

    if(!video)
        return response.send('Video nor found!')

    return response.render('video', {item : video})
})
server.listen(5000, () =>{
    console.log('Server is running')
})