import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

class List extends Component {

    render() {
        return (
            <div className='row'>
                <div className='list'>
                    <h4>Incomplete</h4>
                    <ul className='column'>{this.props.incomplete.map(item => (
                        <li key={item.id} onClick={ () => this.props.DeleteToDo(item.id, item.todo)}>{item.todo}</li>))}
                    </ul>
                </div>
                <div className='list'>
                    <h4>Completed</h4>
                        <ul className='column'>{this.props.completed.map(item => (
                            <li className='done' key={item.id} onClick={ () => this.props.IncompleteToDo(item.id, item.todo)}>{item.todo}</li>))}
                        </ul>
                </div>
                <div className='list'>
                    <h4>History</h4>
                        <ul className='column'>{this.props.history.map(item => (
                            <li key={item.id}>{item.todo}</li>))}
                        </ul>
                </div>
            </div>   
        );
    }
}


const mapStateToProps = state => {
  return {
    incomplete: state.todoInput.incomplete,
    completed: state.todoInput.completed,
    history: state.todoInput.history
  };
};

const mapDispachToProps = dispatch => {
    return {
        DeleteToDo: (id, todo) => dispatch({type: 'DELETE_TODO', id: id, todo: todo}),
        IncompleteToDo: (id, todo) => dispatch({type: 'INCOMPLETE_TODO', id: id, todo: todo}),
    };
};


export default connect(mapStateToProps, mapDispachToProps)(List);

