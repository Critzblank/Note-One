import React, {Component} from 'react';
import { View, Text, CheckBox, Image, TouchableOpacity } from "react-native";
import {connect} from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import {removeTask} from "../actions";
import logo from "../images/logo.png"

class Index extends Component {

    constructor(props){

        super(props);

        this.state = {checked: false}

    }

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (
                <Image style={{
                    width: 25,
                    height: 25,
                    marginLeft: 190

                }} source={require('../images/logo.png')}/>
            ),
            headerStyle: {
                backgroundColor: "rgb(30,30,35)",
            }


    }}


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
                        style={styles.trash}
                        name="trash"
                        size={25}
                        color="white"
                        onPress={() => {

                            this.props.removeTask(task.id)
                        }}
                    />

                    </View>

                </View>
            )
        })

    }

    render() {

        console.log("STATE",this.props)
        return(
            <View style={{backgroundColor: '#333333', height: '100%'}}>
            <View style={{marginTop: 3}}>
                {this.taskList()}
            </View>
                <TouchableOpacity style={styles.addButton}
                                  onPress = { () => {
                    this.props.navigation.navigate("ToDo", {
                        text: "",
                        edit: false,
                        id: null
                    });
                }
                }>
                    <Text

                        style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
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
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        top: 500,
        backgroundColor: '#e6394d',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    },
    TaskStyle: {
        backgroundColor: 'rgb(30,30,35)',
        borderColor: 'rgb(30,30,35)',
        borderRadius: 3,
        borderWidth: 1,
        margin: 3,
        marginLeft: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 8
    },
    addText: {
        color: 'white',
        margin: 10
    },
    TaskText: {
        color: 'white',
        fontSize: 20,
        marginLeft: 15,
        margin: 10,
        width: '80%'

    },
    CheckBoxStyle: {
        margin: 5
    },
    trash:{
        marginRight: 15

    },
}

export default connect(mapStateToProps, {removeTask})(Index);