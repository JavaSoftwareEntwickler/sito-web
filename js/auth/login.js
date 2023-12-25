window.addEventListener('DOMContentLoaded', function() {
    const formLogin = document.querySelector("#formLogin");  
    
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
});