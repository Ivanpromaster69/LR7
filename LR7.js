const content = document.createElement('div');
content.className = "mainContent";
const magicBall = document.createElement('div');
magicBall.id = "magicBall";
magicBall.textContent = "?";
let input = document.createElement('div');
input.id = "inputAsk";
input.contentEditable = true;
input.innerHTML = "Write your question";
document.body.appendChild(content);
content.appendChild(magicBall);
content.appendChild(input);
magicBall.onclick = askBall;
const answers = [
    "Yes",
    "No",
    "Maybe"
];
function askBall() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIndex];
    document.getElementById("magicBall").innerHTML = answer;
    magicBall.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            magicBall.style.transform = 'rotate(0deg)';
        }, 300);
}
