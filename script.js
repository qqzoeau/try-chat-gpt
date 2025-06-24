function askQuestion() {
    const question = document.getElementById("question").value.toLowerCase();
    const responseElement = document.getElementById("response");

    const answers = {
        "hi": "Hello! How can I help you?",
        "how are you?": "I'm just a chatbot, but I'm doing great!",
        "who are you?": "I'm a simple chatbot built with JavaScript.",
        "bye": "Goodbye! Have a nice day!",
        "what is your name?": "I'm Chatbot, nice to meet you!"
    };

    if (answers[question]) {
        responseElement.innerText = "Answer: " + answers[question];
    } else {
        responseElement.innerText = "Sorry, I don't understand that.";
    }

    // Clear input field after answering
    document.getElementById("question").value = "";
}
