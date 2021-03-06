import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from '../action/actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

const Actions = {
  addTodo,
  completeTodo,
  setVisibilityFilter
}

class App extends Component {
  render() {
    const { addTodo, completeTodo, setVisibilityFilter, visibleTodos, visibilityFilter } = this.props
    return (
    <div>
      <AddTodo
        onAddClick={text =>
          addTodo(text)
        } />
      <TodoList
        todos={this.props.visibleTodos}
        onTodoClick={index =>
        completeTodo(index)
        } />
      <Footer
        filter={visibilityFilter}
          onFilterChange={nextFilter =>
            setVisibilityFilter(nextFilter)
          } />
    </div>
    );
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}

// 基于全局 state ，哪些是我们想注⼊的 props ?
// 注意：使⽤ https://github.com/faassen/reselect 效果更佳。
function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

// 包装 component ，注⼊ dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select, Actions)(App);
