import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props){
        super();
        this.state = {}
    }
    render(){
        return (
            <div>
                <div style={{background:'#333',color:'#fff'}}>This is Home</div>
                <div>
                     { this.props.children }
                </div>
            </div>
        )
    }
}