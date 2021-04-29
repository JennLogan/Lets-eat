<script>
function validate(){
let email= document.login_form.txt_email;
let password = document.login_form.txt_password;

if (email.value == null || email.value == ""){
window.alert("Please enter your email ?");
email.focus();
return false;
}
if (password.value == null || password.value == ""){
window.alert("Please enter your password ?");
password.focus();
return false;
}
}
</script>