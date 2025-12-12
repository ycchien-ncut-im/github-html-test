document.title = "JavaScript";

document.getElementById("txt").textContent = "安安您好！";

const p = document.createElement("p");
p.textContent = "動態文字段落。";
document.body.appendChild(p);

document.getElementById("heading").innerHTML = "<h1> 標題 </h1>"