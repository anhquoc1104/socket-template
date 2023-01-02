
const that = module.exports = {
    homepage: async(req, res, next) => {
        // WRONG connection => Dùng như trong Services
        res.io.on('connection', (socket) => {
            console.log(`User connect with ID: ${socket.id}`)
        })

        return res.sendFile(__basedir + '/index.html');
    },
    message: async(req, res, next) => {
        const { msg } = req.query;
        // const io = res.io;
        _io.emit('chat message', msg)
        return res.json({ code: 200, msg})
    }
}