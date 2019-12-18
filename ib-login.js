import { html, LitElement } from 'lit-element';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/vaadin-password-field.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import style from './ib-login-styles.js';

class IbLogin extends LitElement {
  static get properties() {
    return {

    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();

  }

  render() {
    return html`
       <section class="container">
       <div class="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaPmiDL-ybSt7Mbb9DsSSN26Vm50Qc9ya0N1cD_yagEb6ks-Hq" alt="IronBit Logo">
      </div>
       <div class="form-data">
           <vaadin-text-field id="username" placeholder="Correo electronico"></vaadin-text-field>
           <vaadin-password-field id="password" placeholder="Contraseña"></vaadin-password-field>
        </div>
       <div class="form-actions">
         <vaadin-button class="btn-info" @click="${this.loginRequest}">Ingresar</vaadin-button>
      </div>
</section>
      `;
    }

    loginRequest(){
      const usernameNode = this._getNode('#username');
      const passwordNode = this._getNode('#password');
      const user = {
        username: usernameNode.value,
        password: passwordNode.value
      };

      this.dispatchEvent(new CustomEvent('login-request', {
        detail: user
      }));

      usernameNode.value = '';
      passwordNode.value = '';
    }

    _getNode(query) {
      return this.shadowRoot.querySelector(query);
    }
}

window.customElements.define("ib-login", IbLogin);
