//-------------------NAV------------------------------

function click_Button(element){
  if(element.style.backgroundColor == "#534d64")
  {
    element.style.backgroundColor = "#a494d3";
    element.style.borderBottom = "3px solid #373244";
  }
  else console.log("else");
}
var funcButtons = document.getElementsByClassName("func")[0];
var Button = funcButtons.querySelectorAll("div");

console.log(Button);
Button[0].style.backgroundColor = "#a494d3";
Button[0].style.borderBottom = "3px solid #373244";

Button.forEach(element => element.addEventListener("click", function(){click_Button(element);}));
//-------------------FORM------------------------------
function click_add(inputname){
    var input = document.getElementById(inputname);
    if(input.style.display == "none")
        input.style.display = "block";
    else
        input.style.display = "none";
}
document.getElementById("input-food").style.display = "none";
document.getElementById("add-food").addEventListener("click", function(){click_add("input-food");});

document.getElementById("input-employee").style.display = "none";
document.getElementById("add-employee").addEventListener("click", function(){click_add("input-employee");});
//-------------------EDIT------------------------------
function click_editMenu(element){
    let str = element.textContent;
    var parent = element.parentNode.parentNode;

    var input = parent.getElementsByTagName("input");
    var textarea = parent.getElementsByTagName("textarea")[0];

    var valuedesc = parent.getElementsByClassName("valuedesc")[0];
    var valuename = parent.getElementsByClassName("valuename")[0];
    var valueprice = parent.getElementsByClassName("valueprice")[0];

    if(str == "Xong"){
      element.innerHTML = "<i class=\"far fa-edit\"></i> Chỉnh sửa";  // change name button
      valuename.textContent = input[0].value;
      valueprice.textContent = input[1].value;
      valuedesc.innerHTML = textarea.value;

      textarea.style.display = "none";
      for(var i = 0, len = input.length; i < len; i++){
        input[i].style.display = "none";
      }

      valuename.style.display = "block";
      valueprice.style.display = "block";
      valuedesc.style.display = "block";
    }
    else if(str == " Chỉnh sửa"){
      element.textContent = "Xong"; // change name button

      textarea.style.display = "block";
      for(var i = 0, len = input.length; i < len; i++){
        input[i].style.display = "block";
      }

      valuename.style.display = "none";
      valueprice.style.display = "none";
      valuedesc.style.display = "none";
    }
}                    
var Menu = document.getElementsByClassName("menu")[0];
var listOfEditMenu = Menu.querySelectorAll(".edit");
listOfEditMenu.forEach(element => element.addEventListener("click", function(){click_editMenu(element);}));

function click_editEmployee(element){
    let str = element.textContent;
    var parent = element.parentNode.parentNode;

    var input = parent.getElementsByTagName("input");

    var valuephone = parent.getElementsByClassName("valuephone")[0];
    var valueoffice = parent.getElementsByClassName("valueoffice")[0];

    if(str == "Xong"){
      element.innerHTML = "<i class=\"far fa-edit\"></i> Chỉnh sửa";  // change name button
      valueoffice.textContent = input[0].value;
      valuephone.textContent = input[1].value;

      for(var i = 0, len = input.length; i < len; i++){
        input[i].style.display = "none";
      }

      valueoffice.style.display = "block";
      valuephone.style.display = "block";
    }
    else if(str == " Chỉnh sửa"){
      element.textContent = "Xong"; // change name button

      for(var i = 0, len = input.length; i < len; i++){
        input[i].style.display = "block";
      }

      valueoffice.style.display = "none";
      valuephone.style.display = "none";
    }
}
var Employee = document.getElementsByClassName("employee")[0];
var listOfEditEmployee = Employee.querySelectorAll(".edit");
listOfEditEmployee.forEach(element => element.addEventListener("click", function(){click_editEmployee(element);}));