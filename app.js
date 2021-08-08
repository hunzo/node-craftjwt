const ex = require('express')
const jwt = require('jsonwebtoken')

const app = ex()

app.get('/', (req, res) => {
    res.json({
        status: 'craft jwt',
        token: jwt.sign({ mail: 'tko@nida.ac.th', foo: 'bar' }, 'test', {
            header: { kid: '6Awcm3XDvvQ3YyYRSQZSMcSkvRTYiueG' },
            expiresIn: 60 * 1,
        }),
    })
})

app.listen(process.env.PORT || 3000)
