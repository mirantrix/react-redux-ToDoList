import React, { Component } from "react";
import { connect } from "react-redux";

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
        }

    updateInput = input => {
        this.setState({ input });
    };

    handleAddToDo = () => {
        this.props.ToDoInput(this.state.input);
        this.setState({ input: "" });
    };
        
    render() {
        return (
            <div>
                <input onChange = { (e) => this.updateInput(e.target.value)} value = { this.state.input }/>
                <button onClick = {this.handleAddToDo} >Add To Do</button>
            </div>   
        );
    }
}



const mapDispachToProps = dispatch => {
    return {
        ToDoInput: (input) => dispatch({type: 'TODO_INPUT', input: input}),
    };
};

export default connect(null, mapDispachToProps)(AddToDo);

