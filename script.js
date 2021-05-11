// Tambahkan kode JavaScript kalian di file ini
function getFormData() {
  const form = document.getElementById('form');
  const obj = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    city: form.city.value,
    zipCode: form.zipCode.value,
    check: form.check.value,
  };
  return obj;
}

getFormData();
