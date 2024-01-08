function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;

 }
 function Clear() {
    var v1 = document.getElementById('res');
    v1.value = '';

 }
 function Back() {
    var v2 = document.getElementById('res');
    v2.value = v2.value.slice(0, -1);
 }

 function Result() {
    var v3 = document.getElementById('res').value;
    var v4 = eval(v3);
    document.getElementById('res').value = v4;
 }