var user = {
    name: '簡佑丞',
    age: '18',
    showMsg: function () {
        alert("Hi, 我是" + this.name + ", 今年" + this.age + "歲");
    }
};

//user.name = "某某某";
//user.age = "90";

document.getElementById("name").placeholder = user.name;
document.getElementById("age").placeholder = user.age;

document.getElementById("user").innerHTML = user.name + "<br>" + user.age + "歲<br>";

//alert(user.name + user.age);


var score = {
    chinese: 90,
    english: 95,
    math: 100,
    showMsg: function () {
        alert("國文" + this.chinese + "、英文" + this.english + "、數學" + this.math);
    }
};