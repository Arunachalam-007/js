var entry = document.getElementById("register");
entry.addEventListener("click", displayInfo);
var row = 1;
function displayInfo(a) {
  a.preventDefault();
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var aadhar = document.getElementById("aadhar").value;
  var dob = document.getElementById("dob").value;
  var city = document.getElementById("city").value;
  var dateoftest = document.getElementById("dot").value;
  var timeoftest = document.getElementById("tot").value;
  var result = document.getElementById("result").value;
  var labname = document.getElementById("labname").value;
  var reportnumber = document.getElementById("reportno").value;
  var gender = document.getElementById("gender").value;

  if (
    !firstname ||
    !lastname ||
    !aadhar ||
    !dob ||
    !city ||
    !dateoftest ||
    !timeoftest ||
    !result ||
    !labname ||
    !reportnumber ||
    !gender
  ) {
    alert("Please Fill all the boxes");
    return;
  }
  var display = document.getElementById("display");
  var newRow = display.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);
  var cell8 = newRow.insertCell(7);
  var cell9 = newRow.insertCell(8);
  var cell10 = newRow.insertCell(9);
  var cell11 = newRow.insertCell(10);

  cell1.innerHTML = firstname;
  cell2.innerHTML = lastname;
  cell3.innerHTML = aadhar;
  cell4.innerHTML = dob;
  cell5.innerHTML = city;
  cell6.innerHTML = dateoftest;
  cell7.innerHTML = timeoftest;
  cell8.innerHTML = result;
  cell9.innerHTML = labname;
  cell10.innerHTML = reportnumber;
  cell11.innerHTML = gender;

  row++;
}
function tableSearch() {
  var input, filter, table, tr, td, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("display");
  tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];

    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
