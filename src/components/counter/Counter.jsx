import React, {Component} from "react";

import Display from "./Display";
import RatioForm from "./RatioForm";
import Button from "./Button";

import './Counter.css'

export default class Counter extends Component{
    state = {
        number: this.props.initialNumber || 0,
        ratio: this.props.ratio || 1
    }

    increment = () => {
        this.setState({
            number: this.state.number + this.state.ratio
        })
    }

    decrement = () => {
        this.setState({
            number: this.state.number - this.state.ratio
        })
    }

    setRatio = (ratio) => {
        this.setState({
            ratio: parseInt(ratio)
        })
    }


    render(){
        return(
            <div className="Counter">
                <h2>Counter</h2>
                
                <Display number={this.state.number}/>

                <RatioForm ratio={this.state.ratio} setRatio={this.setRatio}/>

                <div>
                    <Button text="-" onClick={this.decrement}/>
                    <Button text="+" onClick={this.increment}/>
                </div>
            </div>
        )
    }
}