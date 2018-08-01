import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// redux 没有直接map， 将ui组建分为两部分，新增一个container,redux给数据给container,container再将数据给component
// import App from '@/components/App';
import Root from '@/components/Root'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();
