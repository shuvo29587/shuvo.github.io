// Book search filter
function searchBooks() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById('bookList');
    const li = ul.getElementsByTagName('li');
  
    for (let i = 0; i < li.length; i++) {
      const bookText = li[i].textContent || li[i].innerText;
      if (bookText.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }
  
  // Contact form submission (simple frontend only)
  function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name && email && message) {
      // Normally here you would send the data to a backend server via AJAX/fetch
      document.getElementById('formMessage').textContent = 'Thank you for contacting us, ' + name + '!';
      document.getElementById('contactForm').reset();
    } else {
      document.getElementById('formMessage').textContent = 'Please fill all fields.';
      document.getElementById('formMessage').style.color = 'red';
    }
  }
  