var studentNames;
var forms = document.getElementById("myForm");
var input = document.getElementById("mytext");
var remainder;


function doTheStuff(){
    getTheNames();
    splitTheNames();
    randomGroups();
    divideGroups();
    printGroups();
}

// This function takes the input from the names and places them into a single variable
function getTheNames(){
    studentNames=input.value;
}


function myFunction() {
    input.push(input[studentNames]);
    document.getElementById("display").innerHTML = input;
}

//This function takes the variable with the names seperated by a space and splits them into pieces in an array
function splitTheNames(){
    studentNames = studentNames.split(/[\",",]+/);
}

//This function randomizes the inputted names
function randomGroups() {
    for(var i = studentNames.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = studentNames[i];
        studentNames[i] = studentNames[j];
        studentNames[j] = temp;
    }
    return studentNames;
}

//This function divides the number of student names by the number of groups and prints it
function divideGroups() {
  var e = document.getElementById("dropdown");
  var select =e.options[e.selectedIndex].value;
    for(var i=0; i<studentNames.length; i++) {
        remainder = (i)%select;
        
        if(remainder===0) {
          console.log("rem: " + remainder + "i: " + i + "select: " + select);
           var theDiv = document.getElementById("table0");
           var content = document.createTextNode(studentNames[i]);
           theDiv.appendChild(content);}
      
        else if(remainder===1) {
           var theDiv1 = document.getElementById("table1");
           var content1 = document.createTextNode(studentNames[i]);
           theDiv1.appendChild(content1);}
      
        else if(remainder===2) {         
           var theDiv2 = document.getElementById("table2");
           var content2 = document.createTextNode(studentNames[i]);
           theDiv2.appendChild(content2);}
      
        else if(remainder===3) {
            var theDiv3 = document.getElementById("table3");
           var content3 = document.createTextNode(studentNames[i]);
           theDiv3.appendChild(content3);}
      
        else if(remainder===4) {
            var theDiv4 = document.getElementById("table4");
           var content4 = document.createTextNode(studentNames[i]);
           theDiv4.appendChild(content4);}
      
        else if(remainder===5) {
            var theDiv5 = document.getElementById("table5");
           var content5 = document.createTextNode(studentNames[i]);
           theDiv5.appendChild(content5);}
      
        else if(remainder===6) {
            var theDiv6 = document.getElementById("table6");
           var content6 = document.createTextNode(studentNames[i]);
           theDiv6.appendChild(content6);}
      
        else if(remainder===7) {
            var theDiv7 = document.getElementById("table7");
           var content7 = document.createTextNode(studentNames[i]);
           theDiv7.appendChild(content7);}
      
        else if(remainder===8) {
            var theDiv8 = document.getElementById("table8");
           var content8 = document.createTextNode(studentNames[i]);
           theDiv8.appendChild(content8);}
      
        else if(remainder===9) {
            var theDiv9 = document.getElementById("table9");
           var content9 = document.createTextNode(studentNames[i]);
           theDiv9.appendChild(content9);}
      
        else if(remainder===10) {
            var theDiv10 = document.getElementById("table10");
           var content10 = document.createTextNode(studentNames[i]);
           theDiv10.appendChild(content10);}
      
        else if(remainder===11) {
           var theDiv11 = document.getElementById("table11");
           var content11 = document.createTextNode(studentNames[i]);
           theDiv11.appendChild(content11);}
      
        else if(remainder===12) {
             var theDiv12 = document.getElementById("table12");
           var content12 = document.createTextNode(studentNames[i]);
           theDiv12.appendChild(content12);}
      
        else if(remainder===13) {
             var theDiv13 = document.getElementById("table13");
           var content13 = document.createTextNode(studentNames[i]);
           theDiv13.appendChild(content13);}
      
        else if(remainder===14) {
             var theDiv14 = document.getElementById("table14");
           var content14 = document.createTextNode(studentNames[i]);
           theDiv14.appendChild(content14);}
    }}
    

//This function prints the groups
function printGroups() {
    document.getElementById("table0" + "table1" +"table2" + "table3" + "table4" + "table5" + "table6" + "table7" + "table8" + "table9" + "table10" + "table11" + "table12" + "table13" + "table14");
}

function clearButton() {
  document.getElementById("table0").innerHTML=" ";
  document.getElementById("table1").innerHTML=" ";
  document.getElementById("table2").innerHTML=" ";
  document.getElementById("table3").innerHTML=" ";
  document.getElementById("table4").innerHTML=" ";
  document.getElementById("table5").innerHTML=" ";
  document.getElementById("table6").innerHTML=" ";
  document.getElementById("table7").innerHTML=" ";
  document.getElementById("table8").innerHTML=" ";
  document.getElementById("table9").innerHTML=" ";
  document.getElementById("table10").innerHTML=" ";
  document.getElementById("table11").innerHTML=" ";
  document.getElementById("table12").innerHTML=" ";
  document.getElementById("table13").innerHTML=" ";
  document.getElementById("table14").innerHTML=" ";
}