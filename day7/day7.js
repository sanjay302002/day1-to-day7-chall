function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        var chatBox = document.getElementById('chat-box');
        var messageDiv = document.createElement('div');
        messageDiv.textContent = userInput;
        messageDiv.classList.add('message', 'sent');
        chatBox.appendChild(messageDiv);
        document.getElementById('user-input').value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
