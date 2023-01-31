/*function myFunction() {
//store input value in a variable
  var x = document.getElementById("myText").value;
 // Print in the p element the value of the variable in the previous step
  document.getElementById("demo").innerHTML = x;
}
</script>*/


function sendMessage(){
    //get the value from the input field, and store it in a variable
   let messageBox = document.getElementById("message-box").value;
   //store list in a variable
   let messageRecord = document.getElementById("result-list");
   //Create the new <li> element
   let item = document.createElement("li");
    //Add text to item using .createTextNode
   item.appendChild(document.createTextNode(messageBox));
   
   //Add the Item we just created to the list 
   messageRecord.appendChild(item);
}


function burnIt(){
    location.reload()
}

