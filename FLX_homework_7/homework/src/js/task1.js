let login = prompt('Enter your login:', '');
let hours = new Date().getHours();

if (login === 'Admin' || login === 'User') {
  let password = prompt('Enter your password:', '');

  if (login === 'Admin' && password === 'RootPass') {
      hours < 20 ? alert('Good day, dear Admin!') : alert('Good evening, dear Admin!');
  } else if (login === 'User' && password === 'UserPass') {
      hours < 20 ? alert('Good day, dear User!') : alert('Good evening, dear User!');
  } else if (password === '' || password === null) {
      alert('Canceled');
  } else {
      alert('Wrong password')
  }
    
} else if (login === '' || login === null) {
    alert('Canceled');
} else if (login.length < 4) {
    alert("I don't know any users having name length less than 4 symbols");
} else {
    alert("I don't know you");
}