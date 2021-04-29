<script>

function validate(){
let first_name= /^[a-z A-z]+$;
let email_valid= /^[\w\d\.]+\@[a-z A-Z\.]+\.[A-Za-z]{1,4}$/;
let password_valid= /^[A-Z a-z 0-9 !@#$%^&*()<>]{6,12}$/;

let name=document.getElementById("name");
let email=document.getElementById("email");
let password=document.getElementById("password");

if(!first_name.test(name.value) || name.value=='') {
    alert("Enter only Alphabets");
    name.focus();
    return false;
}
if(!email_valid.test(email.value) || email.value=='') {
    alert("Enter valid Email");
    name.focus();
    return false
}
if(!password_valid.test(password.value) || password.value=='') {
    alert("Password must be between 6-12 characters");
    name.focus();
    return false
}
}

</script>