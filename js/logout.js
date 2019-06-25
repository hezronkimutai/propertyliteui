async function logoutUser(){
localStorage.removeItem('token');
window.location.href = '../index.html'

  }

  async function logoutUserI(){
  localStorage.removeItem('token');
  window.location.href = 'index.html'

    }
