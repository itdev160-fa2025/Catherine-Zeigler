const emails =[];
const christmasList = [];

function initApp() {
    displaySantaMessage();

    const sendBtn = document.querySelector("#sendButton");
    sendBtn.addEventListener("click", handleEmailedSend);

    const addListItemBtn = document.querySelector("#addItemButton");
    addListItemBtn.addEventListener("click", handleAddListItem);
}
function displaySantaMessage() {
    const santaMessage = document.querySelector("#santaMessage");
    santaMessage.textContent = "Ho Ho Ho!! Welcome to Santa's workshop! Send me your wishes! You can always come back at anytime to update your Wish list!";
    }

function handleEmailedSend(event) {
    event.preventDefault();

    const nameInput = document.querySelector("#nameInput").value;
    const emailInput = document.querySelector("#emailInput").value;
    const messageInput = document.querySelector("#messageInput").value;

    if (!nameInput || !emailInput || !messageInput) {
        alert("Please fill out all fields.");
        return;
    }

    emails.push({ name: nameInput, email: emailInput, message: messageInput });
    displayEmails();

    const reply = generateSantaReply(nameInput, messageInput);
    injectReply(reply);
}
function generateSantaReply(name, message) {
    let customReply = `Thanks for the letter, ${name}! I love hearing from all the good boys and girls this time of year! `;

    if (message.toLowerCase().includes("toy")) {
        customReply += "I see you mentioned toys. Santa is excited about your wish list! I can not wait to deliver to you!";
    }else if (message.toLowerCase().includes("nice")) {
        customReply += "Being nice this year has made Santa so happy that you will get something special under the tree!";
    }else  {
        customReply += "Merry Christmas! Keep spreading holiday cheer!";
    }
    return customReply;
}
function displayEmails(){
    const emailList = document.querySelector("#emailList");
    emailList.innerHTML = "";

    emails.forEach((emailData, index) => {
        const emailElement = document.createElement("li");
        emailElement.textContent = `${index + 1}. ${emailData.name} (${emailData.email}): ${emailData.message}`;

        emailList.appendChild(emailElement);
    });
}
function injectReply(reply) {
    const replySection = document.querySelector("#santaReply");
    replySection.innerHTML = '';

    const replyText = document.createElement("p");
    replyText.textContent = reply;

    const santaImage = document.createElement("img");
    santaImage.src = "images/santaImage.jpg";
    santaImage.alt = "Santa Claus";
    replySection.appendChild(replyText);
    replySection.appendChild(santaImage);

}

function handleAddListItem(event) {
    event.preventDefault();

    const listItemInput = document.querySelector("#listItemInput").value;
    
    if (listItemInput.trim() !== "") {
        christmasList.push(listItemInput);
        displayChristmasList();
        document.querySelector("#listItemInput").value = "";
    }
}
function displayChristmasList() {
    const listContainer = document.querySelector("#christmasList");
    listContainer.innerHTML = "";

    christmasList.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${item}`;
        listContainer.appendChild(listItem);
    });
    listElement.scrollTop = listContainer.scrollHeight;

}

window.onload = initApp;