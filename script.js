// Tambahkan kode JavaScript kalian di file ini
//16
function getFormData() {
  let object = {
    firstName: document.getElementById('first-name').value,
    lastName: document.getElementById('last-name').value,
    city: document.getElementById('city').value,
    zipCode: document.getElementById('zip-code').value,
    check: document.getElementById('check').checked,
  };
  return object;
}

//17
function isNumber(string) {
  if (isNaN(string) == false) {
    return true;
  } else {
    return false;
  }
}

//18
function isLength(string, integer) {
  if (string.length == integer) {
    return true;
  } else {
    return false;
  }
}

//19
function checkboxIsChecked() {
  if (check.checked) {
    return true;
  } else {
    return false;
  }
}

//20
function validateFormData(object) {
  let zipCode = isNumber(object['zipCode']);
  let checked = checkboxIsChecked();
  const array = ['firstName', 'lastName', 'city', 'zipCode'];

  if (isLength(array, 4) == true && zipCode == true && checked == true) {
    return true;
  } else {
    return false;
  }
}

//21
function resetForm() {
  document.getElementById('myForm').reset();
}

//22 ini buat tes tp diganti biar simple
// function submit() {
//   if (validateFormData(getFormData()) == false) {
//     warning.innerHTML = 'Periksa form anda sekali lagi';
//   } else {
//     let obj = {
//     firstName: document.getElementById('first-name').value;
//     lastName: document.getElementById('last-name').value;
//     warning.innerHTML = '';
//     alert(`thank you ${obj.firstName} ${obj.lastName}`);
//   }
// }

// simple greeting message
function greeting() {
  let obj = {
    firstName: document.getElementById('first-name').value,
    lastName: document.getElementById('last-name').value,
 };
  if (validateFormData(object) == true) {
  return alert(`thank you ${obj.firstName} ${obj.lastName}`);
  };
};
//   if (firstname, last-name === true) {
//  alert(`thank you ${obj.firstName} ${obj.lastName}`);
  //} else {
  //   warning.innerHTML = 'Check your form again';
  // }
//}

// alert function
//function underMaintenance() {
  //alert('Sorry, this website is under maintenance :)');
//}
