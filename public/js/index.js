window.onload = () => {
  console.log('Page loaded');
  let signupEl = document.getElementById('signup');
  let loginEl = document.getElementById('login');
  let logoutEl = document.getElementById('logout');
  let userEl = document.getElementById('user');
  const user = netlifyIdentity.currentUser();
  
  if(user) {
    loginEl.hidden = true;
    signupEl.hidden = true;
    logoutEl.hidden = false;
    userEl.hidden = false;
    userEl.innerHTML = `<span>Logged in as ${user.user_metadata.full_name}</span>`;
    console.log(JSON.stringify(user));
  } else {
    logoutEl.hidden = true;
    userEl.hidden = true;
    loginEl.hidden = false;
    signupEl.hidden = false;
  }

  netlifyIdentity.on('login', user => {    
    loginEl.hidden = true;
    signupEl.hidden = true;
    logoutEl.hidden = false;
    userEl.hidden = false;
    userEl.innerHTML = `<span>Logged in as ${user.user_metadata.full_name}</span>`;
    
  });

  netlifyIdentity.on('logout', user => {
    logoutEl.hidden = true;
    userEl.hidden = true;
    loginEl.hidden = false;
    signupEl.hidden = false;
  });
  
  signupEl.addEventListener('click', () => {
    netlifyIdentity.open();
  });

  loginEl.addEventListener('click', () => {
    netlifyIdentity.open();
  });

  logoutEl.addEventListener('click', () => {
    netlifyIdentity.logout();
  });
};

