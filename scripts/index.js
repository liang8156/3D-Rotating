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
    console.warn(x, y)
}
////////////////////////鍵盤控制    
document.addEventListener('keydown', function (e) {
    ul.style.webkitTransition = '-webkit-transform 3s linear';
    switch (e.keyCode) {
        case 37: y -= 90;    //左箭頭
            break;
        case 38: x += 90;    //上箭頭
            break;
        case 39: y += 90;    //下箭頭
            break;
        case 40: x -= 90;    //右箭頭
            break;
        case 13: x = 0; y = 0;    //回車 （當回車時，迅速轉回初始狀態）
            ul.style.webkitTransition = '-webkit-transform 0.1s linear';
            break;
    }
    ul.style.webkitTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg)"; //變換效果（沿X軸和Y軸旋轉）
}, false);
