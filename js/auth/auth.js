window.addEventListener('DOMContentLoaded', function() {
  
  function clearStorage(){
    let session = sessionStorage.getItem('register');
    if(session == null){
      this.localStorage.clear();
    }
    this.sessionStorage.setItem('register', '1');
  }
  this.window.addEventListener('load', clearStorage);

  function showBottonLogin(){
    if(isLogged == 'true'){
      document.getElementById('loginButton').classList.add("hidden");
      document.getElementById('logOutButton').classList.add("show");
    }else{
      document.getElementById('loginButton').classList.add("show");
      document.getElementById('logOutButton').classList.add("hidden");
    }
  }

  var isLogged = window.localStorage.getItem("isLogged");
  showBottonLogin()
 

  
  
  const formLogin = document.querySelector("#formLogin");
  const formRegister = document.querySelector("#formRegister");



  function listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i-1] + "\n";
    }
    console.log(aString);
}


  async function registrami() {

    const frmRegister = new FormData(formRegister)
    
    try {

      const response = await fetch("http://localhost:8080/api/v1/auth/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: frmRegister.get("name") ,
          lastname:frmRegister.get("lastName") ,
          email: frmRegister.get("email") ,
          password: frmRegister.get("password") ,
          role: 'USER'
        }),
      });
      
      if (response.status === 200) {
        
        const data = JSON.parse(await response.text());
        window.localStorage.setItem("access_token", data.access_token);
        window.localStorage.setItem("refresh_token", data.refresh_token);
        window.location.href="/index.html";
        console.log('Response: ', response.text());
      }
      
    } catch (error) {
      console.log('Errore sulla login registrami(): ', error);
    }
  }

  async function logout(){

    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch("http://localhost:8080/api/v1/auth/logout", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + token,
          "Content-Type": "application/json",
        }
      });
      statoRisposta = response.status;
      if (statoRisposta === 200) {
        window.localStorage.setItem("isLogged", false);
        window.location.href="/index.html";
      }
      else if(statoRisposta === 403){
        console.log("errore response logout");
      }

      
    } catch (error) {
      console.log('Errore sulla logout(): ', error);
    }
  }

  async function login() {
    
    const loginFrm = new FormData(formLogin)
    const email = loginFrm.get("email");
    const psw = loginFrm.get("password");
    numcheck = /[a-z0-9_-]/;
    console.log(numcheck.test(psw));

    try {

      const response = await fetch("http://localhost:8080/api/v1/auth/authenticate", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: psw
        }),
      });

      statoRisposta = response.status;
      if (statoRisposta === 200) {
        window.localStorage.setItem("isLogged", true);
        listCookies();
        document.getElementById('credenzialiErrate').classList.remove("invalid");
        const data = JSON.parse(await response.text());
        window.localStorage.setItem("access_token", data.access_token);
        window.localStorage.setItem("refresh_token", data.refresh_token);
        const token = localStorage.getItem("access_token");
        console.log(token);
        window.location.href="/index.html";

      }
      else if(statoRisposta === 403){
        window.localStorage.setItem("isLogged", false);
        document.getElementById('credenzialiErrate').classList.add("invalid");
        loginFrm.email = email; 
        loginFrm.password = password;
        loginFrm.email.focus();

      }
      
    } catch (error) {
      console.log('Errore sulla login login(): ', error);
    }
  }

  this.document.getElementById("logOutButton").addEventListener("click", (event) => {
    event.preventDefault();
    logout();
  });

    
  if(formLogin !== null){

/*
    formLogin.addEventListener("change", () => {
      
      document.getElementById('trialBtnLogin').disabled = !formLogin.checkValidity()
      
      if(formLogin.checkValidity()){
        document.getElementById('trialBtnLogin').classList.remove('opacyty')
      }else{
        document.getElementById('trialBtnLogin').classList.add("opacyty");
      }

    });
    */
    formLogin.addEventListener("submit", (event) => {
      event.preventDefault();
      login();
    });
  }

  if(formRegister !== null){
    /*formRegister.addEventListener("change", () => {
      document.getElementById('trialBtnRegistrati').disabled = !formRegister.checkValidity()
     
  });*/
    formRegister.addEventListener("submit", (event) => {
      event.preventDefault();
      registrami();
    });
  }

});