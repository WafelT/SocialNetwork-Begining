import {renderEntireTree} from './render';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'

renderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
