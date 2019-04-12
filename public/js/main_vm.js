import ChatMessage from './modules/ChatMessage.js';
import ThemeChange from './modules/ThemeChange.js';
import AlertMessage from './modules/AlertMessage.js';

const socket = io();

function logConnect({socketID, message}){

    console.log(socketID, message);
    //set vue model socketID to one from socket.io
    vm.socketID = socketID;
    //set vue model alert to be dis/connected message from socket.io
    vm.alert = message;
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
        alert: "",
        message: "",
        messages: []

    },
    methods: {
        dispatchMessage(){

            // emit message event from the client side
            socket.emit('chat message', {content: this.message, name: this.nickname || "Anonymous"});

            // reset the message field
            this.message = "";
        },



    },
    mounted: {

        alertConnect(){

            socket.emit('connected',this.alert);
        }

    },
    components: {

        newmessage: ChatMessage,
        themechange: ThemeChange,
        alertmessage: AlertMessage,
    }

}).$mount(`#app`);

socket.on('connected', logConnect);
socket.addEventListener('chat message', appendMessage);
socket.addEventListener('disconnect', appendMessage);