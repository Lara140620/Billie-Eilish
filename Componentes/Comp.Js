
/*Menu*/

class componenteMenu extends HTMLElement {
    connectedCallback() {
      this.innerHTML =
        `
    <nav class="L-Menu">
        <div class="L-TituloHome">Billie Eilish</div>
        <div class="L-ladoderecho">
            <a href="#biografia">Biografía</a>
            <a href="#carrera">Carrera Artística</a>
        </div>
    </nav>
        `;
    }
  }
  customElements.define('componente-menu', componenteMenu);



  /*Footer*/

class componenteFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML =
        `
    <a href="https://www.tiktok.com/@billieeilish?lang=es" target="_blank" ><img class="L-Logos" src="./Imagenes/vert.png" alt=""></a>
    <a href="https://www.instagram.com/billieeilish/" target="_blank" ><img class="L-Logos" src="./Imagenes/veri.png" alt=""></a>
    <a href="https://www.facebook.com/billieeilish/?locale=es_LA" target="_blank"><img class="L-Logos" src="./Imagenes/verf.png" alt=""></a>
        `;
    }
  }
  customElements.define('componente-footer', componenteFooter);