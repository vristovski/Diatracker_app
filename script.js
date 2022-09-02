var list1 = [];
var list2 = [];
var list3 = [];


var n = 1;
var x = 0;

var now = new Date(Date.now());
var formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();


function AddRowMeasure(){

    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

    list1[x] = formatted;
    list2[x] = document.getElementById("result").value;
    list3[x] = document.getElementById("unit").value;


    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];

    n++;
    x++;
}

var list4 = [];
var list5 = [];
var list6 = [];

var m = 1;
var y = 0;


function AddRowActivity(){

    var AddRown = document.getElementById('show2');
    var NewRow = AddRown.insertRow(m);

    list4[x] = formatted;
    list5[x] = document.getElementById("activity").value;
    list6[x] = document.getElementById("duration").value;


    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);

    cel1.innerHTML = list4[x];
    cel2.innerHTML = list5[x];
    cel3.innerHTML = list6[x];

    m++;
    y++;
}




