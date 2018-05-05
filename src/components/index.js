import React, {Component} from 'react';
import { View, Text, CheckBox } from "react-native";
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import {removeTask} from "../actions";

class Index extends Component {

    constructor(props){

        super(props);

        this.state = {checked: false}

    }

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: "NoteOne",
            headerStyle: {
                backgroundColor: "rgb(30,30,35)"
            },
            headerRight: (
                <Text
                    onPress = { () => {
                        navigation.navigate("ToDo", {
                            text: "",
                            edit: false,
                            id: null
                        });
                    }
                    }

                >
                    Add
                </Text>
            )
        }
    }


    taskList(){
       return this.props.taskList.map(task => {
            return (
                <View style={styles.TaskStyle}>
                    <Text style={styles.TaskText}

                        onPress ={() => {

                            this.props.navigation.navigate("ToDo", {

                                id: task.id,
                                text: task.taskText,
                                edit: true

                            })

                        }}

                    >
                        {task.taskText}

                    </Text>
                    <View>

                    <Icon
                        name="trash"
                        size={25}
                        color="#"
                        onPress={() => {

                            this.props.removeTask(task.id)
                        }}
                    />

                    </View>
                    <CheckBox style={styles.CheckBoxStyle}

                              value={this.state.checked}
                              onChange={() => this.setState({checked: !this.state.checked})}
                    />
                </View>
            )
        })

    }

    render() {

        console.log("STATE",this.props)
        return(
            <View>
                {this.taskList()}
            </View>
        )
    }
}

function mapStateToProps(state){
    return {
        taskList: state.tasks
    }
}

const styles = {

    TaskStyle: {
        borderColor: '#000',
        borderWidth: 0.2,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 80,
        alignItems: "center"
    },
    TaskText: {
        fontSize: 20,

    },
    CheckBoxStyle: {
    }

}

export default connect(mapStateToProps, {removeTask})(Index);