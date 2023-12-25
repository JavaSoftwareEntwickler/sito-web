window.addEventListener('DOMContentLoaded', function() {
  const formLogin = document.querySelector("#formLogin");
  const formRegister = document.querySelector("#formRegister");

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

  async function login() {

    const loginFrm = new FormData(formLogin)
    const email = loginFrm.get("email");
    const psw = loginFrm.get("password");
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
      
      if (response.status === 200) {
        const data = JSON.parse(await response.text());
        window.localStorage.setItem("access_token", data.access_token);
        window.localStorage.setItem("refresh_token", data.refresh_token);
        window.location.href="/index.html";
        console.log('Response: ', response.text());
      }
      
    } catch (error) {
      console.log('Errore sulla login login(): ', error);
    }
  }

  if(formLogin !== null){
    formLogin.addEventListener("submit", (event) => {
      event.preventDefault();
      login();
    });
  }

  if(formRegister !== null){
    formRegister.addEventListener("submit", (event) => {
      event.preventDefault();
      registrami();
    });
  }

});