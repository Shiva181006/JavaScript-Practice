// const element = document.createElement('h1')
// element.textContent = "Hello World"
// element.style.backgroundColor="pink";
// element.className="classs";
// element.id="iddd";


function jsdepth(tag,attribute,children,style){
  const element = document.createElement("tag");
  element.textContent=children;
  for(const key in attribute){
    element[key]=attribute[key]
  }
  
  return element
}

const element1=jsdepth("h1",{className:"element",id:"first"},"hello world")
const main = document.getElementById("root");

main.append(element1)