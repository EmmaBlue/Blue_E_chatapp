import ChatMessage from './modules/ChatMessage.js';

const socket = io();

function logConnect({socketID, message}){

    console.log(socketID, message);
    //set vue model socketID to one from socket.io
    vm.socketID = socketID;
}

function appendMessage(message){
    //push each message into an array to display each message dynamically
    vm.messages.push(message);
}

// create Vue instance
const vm = new Vue({
    data: {
        socketID: "",
        nickname: "",
        message: "",
        messages: []

    },
    methods: {
        dispatchMessage(){

            // emit message event from the client side
            socket.emit('chat message', {content: this.message, name: this.nickname || "Anonymous"});

            // reset the message field
            this.message = "";
        }
    },
    components: {

        newmessage: ChatMessage
    }

}).$mount(`#app`);

socket.on('connected', logConnect);
socket.addEventListener('chat message', appendMessage);
socket.addEventListener('disconnect', appendMessage);