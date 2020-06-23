

function validation() {

    var name = document.getElementById('fName').value;
    var email = document.getElementById('eMail').value;
    var passwords = document.getElementById('pass').value;
    var rePasswords = document.getElementById('rePass').value;
    var uAge = document.getElementById('userAge').value;
    var userCondition = document.getElementById('agree').value;

    // Message for the Full name field
    if (name == "") {
        document.getElementById('fullname').innerHTML = "<br>Please fill the Full name";
        return false;
    }
    // Message for Full name's length
    if (name.length < 5) {
        document.getElementById('fullname').innerHTML = "<br>Name can't be <5 character!";
        return false;
    }

    // Message for the E-mail field
    if (email == "") {
        document.getElementById('userEmail').innerHTML = "<br>Email can not be blank!";
        return false;
    }

    // Message for the Password field
    if (passwords == "") {
        document.getElementById('passWord').innerHTML = "<br>Please fill the Password";
        return false;
    }
    // Message for the matching passwords
    if (passwords != rePasswords) {
        document.getElementById('rePassword').innerHTML = "<br>Passwords mismatched";
        return false;
    }

    if (rePasswords == "") {
        document.getElementById('rePassword').innerHTML = "<br>Please Re-type the password";
        return false;
    }

    //Message for the Age field
    if (uAge <18) {
        document.getElementById('age').innerHTML = "<br>Sorry you are under age!";
        return false;
    }

    //Message for the Checkbox 
    if (userCondition !== true){
        document.getElementById('condition').innerHTML = "<br>Terms And Conditions must be checked";
        return false;
   }
  

}

