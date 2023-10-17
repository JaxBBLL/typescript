export default class LButton extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const button = document.createElement("button");

    // 创建一个slot元素
    const slot = document.createElement("slot");
    button.appendChild(slot);

    shadowRoot.innerHTML = `<button id="button"><slot></slot></button>`;
  }

  connectedCallback() {}
}
customElements.define("l-button", LButton);
