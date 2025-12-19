// 匿名函式
var sum = function (a, b) {
    return a + b
};

//alert(sum(10, 20));
//window.alert(sum(10, 20));


// 自定義function
// 將資料存放於Console(開發人員主控台)裡，Log紀錄
// Chrome 瀏覽器 → F12 → Console
function greet() {
    const name = document.getElementById("userName").value;
    console.log(name);
} // 結尾沒有分號；


// 標準function製作
function greetUser() {
    const name = document.getElementById("userName").value;
    document.getElementById("resultUser").textContent = name + "，安安您好！";
}

// 模組化function：函式分工、模組化設計、利於擴充
function getUserName() {
    const name = document.getElementById("userName").value;
    // ....
    // ....
    // ....
    // ....
    // 呼叫執行事件函式
    showMessage(name);
}

function showMessage(name) {
    document.getElementById("resultUser").textContent = name + "，安安您好！";
}