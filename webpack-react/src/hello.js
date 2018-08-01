import './hello.styl'
export default function () {
  const element=document.createElement('div');
  element.className='hello'
  element.innerHTML='欢迎关注公众号'
  // ele.style.opacity=1;
  return element;
}