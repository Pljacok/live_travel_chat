const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "yourproject.firebaseapp.com",
    databaseURL: "https://yourproject.firebaseio.com",
    projectId: "yourproject",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function sendMessage() {
    const message = document.getElementById("message").value;
    db.ref("messages").push().set({ text: message });
}

db.ref("messages").on("child_added", snapshot => {
    const p = document.createElement("p");
    p.innerText = snapshot.val().text;
    document.getElementById("chat").appendChild(p);
});
