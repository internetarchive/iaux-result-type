import { html, css, LitElement, customElement } from 'lit-element';

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html` <h1>IAUX Result Type</h1> `;
  }

  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--your-webcomponent-text-color, #000);
    }
  `;
}
