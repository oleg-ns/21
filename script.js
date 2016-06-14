//1
next:
    for (i = 2; i < 10; i++) {
        for (k = 2; k < i; k++) {
            if (i % k == 0)continue next;
        }
        console.log(i);
    }
//2
var obj = {
    className: "open menu"
};
function addClass(obj, x) {
    var list = obj.className.split(" ")
    for (i = 0; i < list.length; i++) {
        if (list[i] == x) return;
    }
    list.push(x);
    obj.className = list.join(" ");
};
addClass(obj, "open");
alert (obj.className);
//3
var obj2 = {
    className: "open menu"
};
function removeClass(obj2, x) {
    var list = obj2.className.split(" ")
    for (i = 0; i < list.length; i++) {
        if (list[i] == x) {
            list.splice(i, 1);
            i--;
        }
    }
    obj2.className = list.join(" ");
};
removeClass(obj2, "open");
alert (obj2.className);
//4
var arr = []
while(true) {
    var k = prompt("input", 0);
    if (k == "" || k == null || k == isNaN(k)) break;
    arr.push(+k);
};
//5
var m = prompt("X")
var ma = (5*Math.pow(m,3))-(5*m*(Math.pow(m,2)+4));
console.log(ma)
//6
var n = prompt("Fibonache");
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    console.log(fib(n));
};
fib(n);
//7
var i = prompt("input string");
var k = "..."
var n = i.length;
if (n > 20) {z=n-20
    r=i.slice(0,-z)+k;
};
console.log(r);
//8
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};
var emName = "";
var task = 0;
for (var name in tasksCompleted) {
    if (task < tasksCompleted[name]) {
        task = tasksCompleted[name];
        emName = name;
    }
};
console.log(emName);