//Patrick Flinner
//Lab 4
//April 19, 2018

module.exports = (server) => {
    const
        io = require('socket.io')(server),
        moment = require('moment')

    let users = []
    const messages = []

    // when the page is loaded in the browser the connection event is fired
    io.on('connection', socket => {

        // on making a connection - load in the content already present on the server
        socket.emit('refresh-messages', messages)
        socket.emit('refresh-users', users)

        socket.on('join-user', userName => {
            const user = {
                id: socket.id,
                name: userName,
                avatar: `https://robohash.org/${userName}`
            }
            
            const index=users.findIndex(user=>{
                return user.name.toUpperCase()==userName.toUpperCase()
            })

            if(index==-1){
                users.push(user)
                io.emit('successful-join', user)
            }
            else
                io.emit('failed-join',userName)
        })

        socket.on('send-message', data => {
            const content = {
                user: data.user,
                message: data.message,
                date: moment(new Date()).format('MM/DD/YY h:mm a')
            }
            messages.push(content)

            io.emit('successful-message', content)
        })

        socket.on('disconnect', () => {
            users = users.filter(user => {
                return user.id != socket.id
            })

            io.emit('refresh-users', users)
        })

    })
}
