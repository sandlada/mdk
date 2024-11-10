import { md } from '../../src/index'

console.log(
  md
);

const createColorBox = (backgroundColor: string, text: string) => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  const box = document.createElement('div')
  box.classList.add('box')
  box.style.setProperty('background-color', backgroundColor)

  const textBox = document.createElement('div')
  textBox.textContent = text

  wrapper.appendChild(box)
  wrapper.appendChild(textBox)
  return wrapper
}

const insert = (child: HTMLElement) => {
  document.querySelector('#app')?.appendChild(child)
}

for (const [name, value] of Object.entries(md.sys.color)) {
  insert(createColorBox(value, name))
}