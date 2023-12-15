// HTML要素をidで取得
const onClick = () => {
    const text = document.getElementById("text");
    text.innerHTML = "ボタンをクリックしました";
};
const btn = document.getElementById("btn");
btn.onclick = onClick
