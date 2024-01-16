const btn   = document.getElementById("btn");
const text  = document.getElementById("text");

btn.addEventListener("click", () => {
    const changeText = () => {
        text.textContent = "ボタンをクリックしました";
    };
    setTimeout(changeText, 2000);
});