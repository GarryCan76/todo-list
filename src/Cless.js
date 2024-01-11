import React, {Component} from "react";

class Cless extends Component{
    constructor(props) {
        super(props);

        this.state = {
            'clickState':"click me "+props.name
        }
    }

    changeClick(){
        this.setState({'clickState':'Thanks for clicking me'})
    }

    render() {
        return <h1 onClick={()=>{this.changeClick()}} >{this.state.clickState}</h1>
    }
}

export default Cless;