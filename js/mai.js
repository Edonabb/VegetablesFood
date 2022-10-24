var table = document.getElementById('data_table'), rIndex;
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');


function selectedRow(){
    for(var i =0; i<table.rows.length; i++){
        table.rows[i].onclick=function(){
            rIndex = this.rowIndex;
            // console.log(rIndex);
            fname.value = this.cells[0].innerHTML;
            lname.value = this.cells[0].innerHTML;
           

        };

    }
}
selectedRow();
function save(){
    table.rows[rIndex].cells[0].innerHTML = fname.value;
    table.rows[rIndex].cells[0].innerHTML = lname.value;

}
function insert(){
    var newData = table.insertRow(1);
    var cell0 = newData.insertCell(0);
    var cell1 = newData.insertCell(1);


    cell0.innerHTML = fname.value;
    cell1.innerHTML = lname.value;


}
// Duhet te trusim elementin qe dojme te fshijme me maus
function dellete(){
    table.deleteRow(rIndex);
    fname.value = "";
    lname.value = "";
}