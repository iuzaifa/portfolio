// Script for validation

function validate(){
    const fname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    if(fname == ""){
        document.getElementById('valFname').innerHTML = 'Name is empty';
        return false;
    }

    // e mail validation
    let reg = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)(.[a-z])?$/;
    let pass = reg.test(email);
    if (pass == false) {
        document.getElementById('valEmail').innerHTML='email is empty';
        return false;
    }
    //end

    if(subject == ""){
        document.getElementById('valMsg').innerHTML = 'Message is empty';
        return false;
    }
    return true;
}

		
// End of validation script
