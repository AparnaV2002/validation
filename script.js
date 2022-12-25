function blurfunction()
{
    document.getElementById('name').style.background="yellow";
    
}
function focusfunction()
{
    document.getElementById('name').style.background="red";
    
}
function myfunction()
{
    var name=document.getElementById('name').value;
    var regex1=/^[A-z\.]+$/;
    var res1=regex1.test(name);
    if(!res1)
     {
        document.getElementById("validate1").innerHTML="<ul> <li>Invalid Name.</li> <li>Please enter the name.</li> <li>Only alphabets are allowed.</li> <li>Dot allowed</li> <li>Dont include symbols and digits.</li> </ul>";
        document.getElementById("name").focus();
     }
    if(res1)
     {
        document.getElementById("validate1").innerHTML="VERIFIED!";
     }
}
function myfunction1(){
    var mail=document.getElementById('mail').value;
    let regex2=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let res2=regex2.test(mail);
    if(!res2)
     {
       document.getElementById("validate2").innerHTML="<ul> <li>EMail Address is not valid!.</li> <li> @ symbol must be used.</li> <li>Enter the mail id in valid format Eg:aparna12@gamil.com.</li> </ul>";
     }
    if(res2)
     {
       document.getElementById("validate2").innerHTML="VERIFIED!";
     }
}
function validate()
{
   
    var mbl=document.getElementById("mbl").value;
    let regex3=/^\d{10}$/;
    let res3=regex3.test(mbl);
    if(!res3)
    {
        document.getElementById("validate3").innerHTML="<ul> <li>Phone number is invalid!.</li> <li> Phone Number must be 10 digits .</li></ul>";  
    }
    else
    {
       document.getElementById("validate3").innerHTML="VERIFIED!";       
    }
    var username=document.getElementById("username").value;
    let regex4=/^[a-z]{5,8}[_#@][0-9]+$/;
    let res4=regex4.test(username);
    if(!res4)
     {
       document.getElementById("validate4").innerHTML="<ul> <li>Invalid Username.</li> <li> Must be 9 characters long.</li> <li> Include  only Lower case letters.</li> <li>Include one digit and special character.</li> <li>Spaces are not allowed </li> </ul>";
     }
    else
     {
       document.getElementById("validate4").innerHTML="VERIFIED!";
     }
    var password=document.getElementById("password").value;
    let regex5=/^[A-z0-9]{10,12}$/;
    let res5=regex5.test(password);
    if(!res5)
     {
        document.getElementById("validate5").innerHTML="<ul> <li>Invalid Password.</li> <li>10-12 characters long.</li> <li>Include  both Upper & Lower case letters.</li> <li>Include atleast one digit.</li> <li>Spaces and Special symbols are not allowed </li> </ul>";
        document.getElementById("password").focus();
     }
     else
     {
        document.getElementById("validate5").innerHTML="VERIFIED!";
     }

     if(document.getElementById("male").checked)
     {
         document.getElementById("validate6").innerHTML="CHECKED!";
         
     }
     else if(document.getElementById("female").checked)            {
         document.getElementById("validate6").innerHTML="CHECKED!";
         
     }
     else if(document.getElementById("other").checked)            {
         document.getElementById("validate6").innerHTML="CHECKED!";
      
     }
     else
     {
         document.getElementById("validate6").innerHTML="<ul><li> One radio button must be clicked compulsory</li> <li>Unchecked!</li></ul>";
         
     }

     if(document.getElementById("dancing").checked)
     {
       document.getElementById("validate7").innerHTML="CHECKED!";
       
     }
     else if(document.getElementById("singing").checked)
     {
         document.getElementById("validate7").innerHTML="CHECKED!";
         
     }
     else if(document.getElementById("drama").checked)
     {
       document.getElementById("validate7").innerHTML="CHECKED!";
       
     }
     else if(document.getElementById("group dance").checked)
     {
         document.getElementById("validate7").innerHTML="cHECKED";
         
     } 
     else{
         document.getElementById("validate7").innerHTML="<ul><li>Must not left empty</li> <li>Select one or more box</li>  <li>Unchecked!</li>";
         
     }
 
     var state=document.getElementById("state");
     var optionSelIndex=state.options[state.selectedIndex].value;
     var optionSelectedText=state.options[state.selectedIndex].text;
     if(optionSelIndex==0)
     {
         document.getElementById("validate8").innerHTML="<ul><li>one state must be selected</li> <li> must not left empty</li>";
       

     }
     else{
         document.getElementById("validate8").innerHTML="VERIFIED";
         
     }
    if(document.getElementById("address").value=="")
       {
           document.getElementById("validate9").innerHTML="<ul><li>address must be entered</li><li>must contain building number,street name,state and district</li>";
           

       }
       else
       {
           document.getElementById("validate9").innerHTML="VERIFIED";
        
       }
      if( res3 && res4 && res5)
       {
        document.getElementById("form").submit();
       }
}