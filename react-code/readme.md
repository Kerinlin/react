虚拟DOM? 
mvvm框架封装了DOM层，Dom太耗性能？ Vnode+diff算法

Jsx 背后隐含着Vnode的真相
React.createElement(
  h1 第一个参数   ele=document.createElement()
  attributes 第二个参数 ele.setAttribute(key,value)
  children 第三个参数 文本节点 textnode node递归
)

虚拟DOM 描述 JSON
<h1 className="title">hello
  <span>world</span>
</h1>
  Vnode={
  tag:"h1",
  attrs:{
    class:"title"
  },
  children:{
    '标题'
    递归Vnode
  }
}