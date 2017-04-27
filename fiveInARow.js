var box = document.getElementById('box');
var boo = true;
box.addEventListener('click', function (e) {
    if (e.target.style.backgroundColor == 'rgb(255, 255, 255)' || e.target.style.backgroundColor == 'rgb(0, 0, 0)') {
        return;
    }
    if (e.target.className == 'li' && boo) {
        e.target.style.backgroundColor = '#fff';
        e.target.style.color = '#fff';
        boo = false;
    } else if (e.target.className == 'li' && !boo) {
        e.target.style.backgroundColor = '#000';
        e.target.style.color = '#000';
        boo = true;
    }
});
/*
var str = '当前的pv有231458， uv有12452';
var reg = /\d+/g;
console.log(str.replace(reg, function (word) {//当前的pv有462916， uv有24904
    return parseInt(word) * 2;
}));*/
