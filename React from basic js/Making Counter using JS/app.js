let count = 0;

const para = document.createElement('p')
para.textContent = `Counter : ${count}`

const incre = document.createElement('button')
incre.textContent = "Increment"

const element = document.getElementById('root')

element.append(para,incre)

incre.addEventListener('click',()=>{
  count++;
  para.textContent = `Counter : ${count}`
})