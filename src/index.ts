class HiElement extends HTMLElement {
  static elementName = 'hi-element'
  child: HTMLHeadElement

  number: number = 0

  constructor() {
    super()
    this.child = document.createElement('h1')
  }

  render() {
    this.className = 'someclass'
    this.update()
    this.appendChild(this.child)
  }

  update() {
    this.child.innerText = this.number.toString()
  }

  clickElment(): void {
    this.number += 1
    this.update()
  }

  connectedCallback() {
    this.render()
    this.onclick = this.clickElment
  }
}

customElements.define(HiElement.elementName, HiElement)

const c = document.createElement(HiElement.elementName) as HiElement

document.body.appendChild(c)

