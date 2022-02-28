function validate_form(){
    let form_fname = document.forms["form"]["fname"].value;
    let form_lname = document.forms["form"]["lname"].value;
    let form_phone = document.forms["form"]["phone"].value;
    let form_email = document.forms["form"]["email"].value;
    let form_address = document.forms["form"]["address"].value;
    let form_password = document.forms["form"]["password"].value;

    phone_number_pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    name_pattern = /^[a-zA-Z]+$/;

    // Required Validation
    if (form_fname.length == 0) {
        alert("First name can not be null");
    }
    else if (form_lname.length == 0) {
        alert("Last name can not be null");
    } 
    else if (form_email.length == 0) {
        alert("Email can not be null");
    } 
    else if (form_password.length == 0) {
        alert("Password can not be null");
    }
    else if (form_address.length == 0) {
        alert("Address can not be null");
    }
    else if (form_phone.length == 0) {
        alert("Mobile can not be null");
    }

    // validating length first name
    else if (form_fname.length < 6) {
        alert("Minimum length for First name is 6")
    }

    // validating first name character
    else if (!name_pattern.test(form_fname)) {
        alert("Please enter only letter for your Firstname");
    }

    // validating first name character
    else if (!name_pattern.test(form_lname)) {
        alert("Please enter only letter for your Lastname");
    }

    // validating phone number
    else if (!phone_number_pattern.test(form_phone)) {
        alert("Mobile number is not valid");
    }

    // validation email
    else if (!email_pattern.test(form_email)) {
        alert("Email is not valid");
    }
   
    // validation password length
    else if (form_password.length < 8) {
        alert("Password legth should be greater than 8");
    } 

    // processing form further
    else {
        alert("Form has been submitted successfully");
        reset_form();
    }

    return false;
}

function reset_form(){
    document.getElementById("form").reset();
}
