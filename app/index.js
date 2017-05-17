import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NewRoot = require('./containers/Root').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}

// ....................................
// redux-thunk
//
// import React, { PropTypes, Component } from 'react';
// import { render } from 'react-dom';
// import { createStore, combineReducers } from 'redux';


// const counter = (state = 0, action) => {
//     switch(action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default :
//             return state;
//     }
// };

// const Counter = ({
//     value,
//     onIncrement,
//     onDecrement
// }) => (
//     <div>
//         <h1>{value}</h1>
//         <button onClick={onIncrement}>+</button>
//         <button onClick={onDecrement}>-</button>
//     </div>
// );
// Counter.propTypes = {
//     value: PropTypes.number,
//     onIncrement: PropTypes.func,
//     onDecrement: PropTypes.func
// };
// const store = createStore(counter);
// const render1 = () => {
//     render(
//     <Counter value={ store.getState() }
//     onIncrement={() =>
//         store.dispatch({
//             type: 'INCREMENT'
//         })
//     }
//     onDecrement={() =>
//         store.dispatch({
//             type: 'DECREMENT'
//         })
//     }
//     />,
//     document.getElementById('root')
//     );
// };
// store.subscribe(render1);
// render1();

// ..........................................
// import React, { PropTypes, Component } from 'react';
// import { render } from 'react-dom';
// import { createStore, combineReducers } from 'redux';
// const todo = (state, action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return  {
//                 id: action.id,
//                 text: action.text,
//                 completed: false
//             };
//         case 'TOGGLE_TODO':
//             if(state.id !== action.id) {
//                 return state;
//             }
//             return {
//                 ...state,
//                 completed: !state.completed
//             };
//         default :
//             return state;
//     }
// };

// const todos = (state = [], action) => {
//     switch(action.type) {
//         case 'ADD_TODO' :
//             return [
//                 ...state,
//                 todo(undefined, action)
//             ];
//         case 'TOGGLE_TODO' :
//             return state.map(t => todo(t, action));
//         default:
//             return state;
//     }
// };

// const visibilityFilter = (state = 'SHOW_ALL', action) => {
//     switch (action.type) {
//         case 'SET_VISIBILITY_FILTER':
//             return action.filter;
//         default :
//             return state;
//     }
// };


// const todoApp = combineReducers({
//     todos,
//     visibilityFilter
// });

// const store = createStore(todoApp);

// let nextTodoId = 0;
// class TodoApp extends Component {
//     render() {
//         return (
//             <div>
//                 <input ref={node => {this.input = node;}} />
//                 <button onClick={() => {
//                     store.dispatch({
//                         type: 'ADD_TODO',
//                         text: this.input.value,
//                         id: nextTodoId++
//                     });
//                     this.input.value = '';
//                 }}>
//                 Add Todo
//                 </button>
//                 <div>{
//                     this.props.todos.length > 0 &&
//                     <div>
//                     <button>Show All</button>
//                     <button>Completed</button>
//                     <button>Pending</button>
//                     </div>
//                 }
//                 </div>
//                 <ul>
//                     {this.props.todos.map(t =>
//                         <li key={t.id} onClick={() => {
//                             store.dispatch({
//                                 type: 'TOGGLE_TODO',
//                                 id: t.id
//                             });
//                         }}>
//                             {t.text}
//                         </li>
//                     )}
//                 </ul>
//             </div>
//         );
//     }
// }
// TodoApp.propTypes = {
//     todos: PropTypes.array
// };

// const render1 = () => {
//     render(
//         <TodoApp todos={store.getState().todos} />,
//         document.getElementById('root')
//     );
//     console.log(store.getState());
// };
// store.subscribe(render1);
// render1();
