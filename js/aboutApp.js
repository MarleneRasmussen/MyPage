function sendContact() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name && email) {

    alert(`Thank you, ${name}! We will contact you as soon as possible.`);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  } else {
    alert('Please fill in all fields.');
  }
}
