import React, { Component } from "react";
import { connect } from "react-redux";

class List extends Component {
    render() {
        return (
            <div>
                <ul>{this.props.todoHistory.map(item => (
                    <li key={item.id}>{item.todo}</li>))}
                </ul>
            </div>   
        );
    }
}


const mapStateToProps = state => {
  return {
    todoHistory: state.todoInput.todoHistory
  };
};


export default connect(mapStateToProps, null)(List);

