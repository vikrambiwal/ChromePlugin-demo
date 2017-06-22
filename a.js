var d = new Date();
var n = d.getTime();

var user_email = document.querySelector('input#user_email');
user_email.disabled = false;
var res = user_email.value.split("@");
res[0] = n;
user_email.value =  res.join('@');

var user_secondary_email = document.querySelector('input#user_secondary_email');
if(user_secondary_email) {
  var res = user_secondary_email.value.split("@");
  res[0] += n;
  user_secondary_email.value =  res.join('@');
}
