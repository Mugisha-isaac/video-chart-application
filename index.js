const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');


const io = require('socket.io')(server,{
    cors:{
        origin:"*",
        methods:["GET","post"],

    }
});

app.use(cors());

const port = process.env.PORT || 3000;

app.get('/',(req, res) =>{
    res.send("server is running");
});

io.on('connection',(server)=>{
    socket.emit('me',socket.id);
    socket.on('disconnect',()=>{
        socket.broadcast.emit('call ended')
    })
    socket.on('callUser',({userToCall,signalData,from,name})=>{
     io.to(userToCall).emit('callUser',{signal:signalData,from,name})
    })
    socket.on('answer',(data)=>{
        io.to(data.to).emit('callAccepted',data.signal);
    })
})

server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})