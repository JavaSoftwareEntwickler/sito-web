class CommonHead extends HTMLElement {
  connectedCallback(){
      this.innerHTML = `
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
    integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  
  
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/flickity/3.0.0/flickity.min.css"
    integrity="sha512-fJcFDOQo2+/Ke365m0NMCZt5uGYEWSxth3wg2i0dXu7A1jQfz9T4hdzz6nkzwmJdOdkcS8jmy2lWGaRXl+nFMQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="style.css" />
    `
  }
}
customElements.define('common-head', CommonHead)

class CommonHeader extends HTMLElement {
  connectedCallback(){
      this.innerHTML = `
      <div class="header">
          <div class="logo">
              <img class="img" src="assets/Logo2.png" alt="logo" />
          </div>
          <ul class="menu">
          <li><a href="./index.html" class="">Home</a></li>
          <li><a href="./single.html" class="">Single</a></li>
          <li><a href="./contact.html" class="">Contact</a></li>
          </ul>
          <div class="cta">
              <a href="" class="button">Chiamami </a>
          </div>
          <div class="hamburger"><span></span><span></span><span></span></div>
    </div> `
  }
}
customElements.define('common-header', CommonHeader);

class CommonContactForm extends HTMLElement {
  connectedCallback(){
      this.innerHTML = `
`
  }
}
customElements.define('common-contact-form', CommonContactForm);

class CommonFooter extends HTMLElement {
  connectedCallback(){
      this.innerHTML = `
      <footer class="footer">
      <div class="grid">
        <div class="col">
          <h4 class="normal-text tw">Lorem ispum</h4>
          <p>Lorem ipsum dos aia sm</p>
        </div>
        <div class="col">
          <h4 class="normal-text tw">Lorem ispum</h4>
          <p>Lorem ipsum dos aia sm</p>
        </div>
        <div class="col">
          <h4 class="normal-text tw">Lorem ispum</h4>
          <p>Lorem ipsum dos aia sm</p>
        </div>
        <div class="col">
          <h4 class="normal-text tw">Lorem ispum</h4>
          <p>Lorem ipsum dos aia sm</p>
        </div>
      </div>
      </footer> `
  }
}
customElements.define('common-footer', CommonFooter);