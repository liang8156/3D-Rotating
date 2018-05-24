var ul = document.getElementById('ul');
var inputs = document.getElementsByTagName('input');
var x = 0, y = 0;
/////////////////////////鼠標控制
// for (var i = 0; i < inputs.length; i++) {
//     inputs[i].onclick = run;
// }
function run(index) {
    ul.style.webkitTransition = '-webkit-transform 3s linear';  //設置立方體變換的屬性、持續時間、動畫類型
    if (index === '0') { x += 90; }
    if (index === '1') { y += 90; }
    if (index === '2') { y -= 90; }
    if (index === '3') { x -= 90; }
    if (index === '4') { x = 0; y = 0; ul.style.webkitTransition = '-webkit-transform 0.1s linear'; }    //當點擊重置按鈕時，迅速轉回到初始狀態。
    ul.style.webkitTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";    //變換效果（沿X軸和Y軸旋轉）
}
////////////////////////鍵盤控制    
document.addEventListener('keydown', function (e) {
    ul.style.webkitTransition = '-webkit-transform 3s linear';
    switch (e.keyCode) {
        case 37: y -= 90;    //左
            break;
        case 38: x += 90;    //上
            break;
        case 39: y += 90;    //右
            break;
        case 40: x -= 90;    //下
            break;
        case 13: x = 0; y = 0;    //迅速轉回初始狀態
            ul.style.webkitTransition = '-webkit-transform 0.1s linear';
            break;
    }
    ul.style.webkitTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg)"; //變換效果（沿X軸和Y軸旋轉）
}, false);

function down(e) {
    var e = e || window.event;
    x1 = e.clientX;
    y1 = e.clientY;
    document.onmousemove = move;
    document.onmouseup = up;
    console.log("x1,y1", x1, y1)
}
function move(e) {
    document.getElementById('div1').innerHTML = '';
    var e = e || window.event;
    var x2 = e.clientX;
    var y2 = e.clientY;
    //console.log("x2,y2", x2, y2)
    ul.style.webkitTransition = '-webkit-transform 0s linear';
    x += (x2 - x1) * 0.5;
    y += (y2 - y1) * 0.5;
    console.log("x,y", x, y)
    ul.style.webkitTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";

}
function up() {
    document.onmousemove = null;
    document.onmouseup = null;
}
document.onmousedown = down;


