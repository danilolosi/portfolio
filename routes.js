const express = require('express')
const videos = require('./data')


const routes = express.Router()

routes.get('/', (request, response) => {

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

routes.get('/portfolio', (request, response) => {
    return response.render('portfolio', {items : videos})
})


routes.get('/video', (request, response) => {
    const id = request.query.id
    const video = videos.find(video => video.id == id)

    if(!video)
        return response.send('Video nor found!')

    return response.render('video', {item : video})
})

module.exports = routes