class HiElement extends HTMLElement {
  static elementName = 'hi-element'
  contentChild: HTMLHeadElement
  buttonChild: HTMLButtonElement

  number: number = 0

  constructor() {
    super()
    this.contentChild = document.createElement('h1')
    this.buttonChild = document.createElement('button')
    this.buttonChild.innerText = 'click me'
    this.buttonChild.onclick = () => {
      this.number += 1
      this.update()
    }
  }

  render() {
    this.className = 'someclass'
    this.setStaticContent()
    this.appendChild(this.contentChild)
    this.appendChild(this.buttonChild)
  }

  setStaticContent() {
    this.contentChild.innerText = `Hello ${this.number}`
  }

  setStateContent() {
    this.contentChild.innerText = `Hello ${this.number}`
  }

  update() {
    this.setStateContent()
  }

  connectedCallback() {
    this.render()
  }
}

customElements.define(HiElement.elementName, HiElement)

const c = document.createElement(HiElement.elementName) as HiElement

document.body.appendChild(c)

