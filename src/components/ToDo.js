import React, {Component} from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import {connect} from "react-redux";
import {addTask, editTask} from "../actions";

class ToDo extends Component {

    constructor(props){

        super(props);
        this.state = {
            Task: this.props.navigation.state.params.text,
            edit: this.props.navigation.state.params.edit,
            id: this.props.navigation.state.params.id}
    }

    static navigationOptions = () => {
        return {
            headerStyle: {
                backgroundColor: "rgb(30,30,35)",
            },
            headerTintColor: 'white',
            headerTitle: <Text
                style={{marginLeft: 110, color: 'white', fontSize: 20}}
            >New Task</Text>
        }
    }

    EditCheck(edit, text, id){

        console.log("EDITCHECK", edit, text, id)
        if(edit){
            console.log("This is edit")
            this.props.editTask(text, id);
        }

        else{
            console.log("This is add")
            this.props.addTask(this.state.Task)
        }
    }

    render() {
        console.log("PROPS", this.props);

        const {params} = this.props.navigation.state;
        const edit = params ? params.edit : null;
        const text = params ? params.text : null;
        const id = params ? params.id: null;

        console.log("PROPERTIES", edit, text, id);
        return(
            <View style={{backgroundColor: '#333333', height: '100%'}}>

                    <TextInput
                        multiline
                        underlineColorAndroid = 'rgb(30,30,35)'
                        style = {styles.inputStyle}
                        placeholder = "..."
                        placeholderTextColor = 'white'
                        value={this.state.Task}
                        onChangeText={text => {
                            this.setState({Task: text})
                        }}
                    />

                    <TouchableOpacity
                        style = {styles.doneButton}
                        onPress = {() => {
                            console.log("ONPRESS", this.state.edit, this.state.text, this.state.id)
                            this.EditCheck(this.state.edit, this.state.Task, this.state.id);
                            this.props.navigation.goBack();
                        }}>
                        <Text style = {styles.doneText}>Done</Text>
                    </TouchableOpacity>

            </View>
        )
    }
}

const styles = {
    inputStyle: {
        height: 150,
        width: 380,
        marginLeft: 15,
        color: 'white'
    },
    doneButton: {
        position: 'absolute',
        zIndex: 5,
        top: 510,
        backgroundColor: '#e6394d',
        width: 390,
        height: 70,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        alignSelf: 'center'
    },
    doneText: {
        fontSize: 20,
        color: 'white'
    }
}

export default connect(null, {addTask, editTask})(ToDo);