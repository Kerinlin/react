import {setAttribute} from './dom'
function _render(vnode) {
  if (typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode);
    return textNode
  }

  if(typeof vnode.tag==='function'){
    // console.log(vnode);
    // 标签就是函数，
    const component=createComponent(vnode.tag,vnode.attrs)
    setComponentProps(component,vnode.attrs);
    return component.base;
  }
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      // if (key === 'className') key = 'class';
      // dom.setAttribute(key, vnode.attrs[key]);
      const value=vnode.attrs[key];
      // 不是简单的setAttribute 而是onClick className{obj}
      setAttribute(dom,key,value)
    });
  }
  vnode.children.forEach(child => render(child, dom));
  return dom;
}
function createComponent(component,props) {
  console.log(component,props);
  let inst;
  if(component.prototype&&component.prototype.render){
    inst=new component(props)
  }
  return inst;
}

function setComponentProps(component,props) {
  renderComponent(component);
}

export function renderComponent(component) {
  let base;
  const renderer=component.render();
  base = _render(renderer);
  component.base=base;
}
export function render(vnode, container) {
  return container.appendChild(_render(vnode));
}
