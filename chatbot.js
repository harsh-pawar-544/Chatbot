const chatbotEndpoint = "http://localhost:5005/webhooks/rest/webhook"; // Ensure this matches your Rasa server
const spellchecker = require('spellchecker');

function sendMessage() {
    const userMessage = document.getElementById('user-input').value;

    // If the input field is empty, do not send
    if (!userMessage) {
        return;
    }

    // Append the user's message to the chat
    appendMessage(userMessage, 'user');

    // Clear the input field after sending
    document.getElementById('user-input').value = '';

    // Send the message to the Rasa server
    fetch(chatbotEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "sender": "user", "message": userMessage })
    })
    .then(response => response.json())
    .then(data => {
        // Loop through the bot's responses and append them to the chat
        data.forEach(item => {
            if (item.text) {
                appendMessage(item.text, 'bot');
            }
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function checkEnter(event) {
    if (event.key === 'Enter' && event.target.value.trim() !== "") {
        event.preventDefault();  // Prevent form submission or default behavior
        sendMessage();
    }
}


function appendMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');

    if (sender === 'user') {
        messageElement.classList.add('user-message');
        messageElement.innerHTML = `<div class="message">${message}</div>`;
    } else {
        messageElement.classList.add('bot-message');
        messageElement.innerHTML = `<div class="message">${message}</div>`;
    }

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}
