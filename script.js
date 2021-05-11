function getFormData() {
  const obj = {
     firstName: document.getElementById("first-name").value,
     lastName: document.getElementById("last-name").value,
     city: document.getElementById("city").value,
     zipCode: document.getElementById("zip-code").value,
     check: document.getElementById("check").value
  }
  return obj;
}
