function clearErrors() {
  errors = document.getElementsByClassName("formerror");
  for (let item of errors) {
    item.innerHTML = "";
  }
}

function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  var returnval = true;
  clearErrors();
  // name
  var name = document.forms["myForm"]["name"].value;
  if (name.length < 3) {
    seterror("NAME", "*name length is to short");
    returnval = false;
  }
  if (!isNaN(name)) {
    seterror("NAME", "*use character");
    returnval = false;
  }
  if (name.length == 0) {
    seterror("NAME", "*");
    returnval = false;
  }
  // father name
  var fname = document.forms["myForm"]["fname"].value;
  if (fname.length < 3 || fname.length > 20) {
    seterror("FNAME", "*name length is to short");
    returnval = false;
  }
  if (!isNaN(fname)) {
    seterror("FNAME", "*use character");
    returnval = false;
  }
  if (fname.length == 0) {
    seterror("FNAME", "*");
    returnval = false;
  }
  // mother name
  var mname = document.forms["myForm"]["mname"].value;
  if (mname.length < 3 || mname.length > 20) {
    seterror("MNAME", "*name length is to short");
    returnval = false;
  }
  if (!isNaN(mname)) {
    seterror("MNAME", "*use character");
    returnval = false;
  }
  if (mname.length == 0) {
    seterror("MNAME", "*");
    returnval = false;
  }
  // email
  var email = document.forms["myForm"]["email"].value;
  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    seterror("EMAIL", "*email input is wrong (ex:abc@gmail.com)");
    returnval = false;
  }
  if (email.indexOf("@") <= 0) {
    seterror("EMAIL", "*invailid position of @, (ex:abc@gmail.com)");
    returnval = false;
  }
  if (email.length == 0) {
    seterror("EMAIL", "*");
    returnval = false;
  }

  // phone
  var phone = document.forms["myForm"]["phone"].value;
  if (phone.length != 10) {
    seterror("PHONE", "*phone no. should be 10 digits");
    returnval = false;
  }
  if (phone.length == 0) {
    seterror("PHONE", "*");
    returnval = false;
  }

  // password
  var password = document.forms["myForm"]["pass"].value;
  if (password.length != 6) {
    seterror("PASSWORD", "*password should be atleast 6 digits");
    returnval = false;
  }
  // confirm password
  var cpassword = document.forms["myForm"]["cpass"].value;
  if (cpassword != password) {
    seterror("CPASSWORD", "*password doesn't matched");
    returnval = false;
  }

  // photo
  // var photo = document.forms["myForm"]["photo"].value;
  // if (photo == "") {
  //   seterror("PHOTO", "*");
  //   returnval = false;
  // }

  return returnval;
}
