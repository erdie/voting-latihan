import React from 'react'
import Child from './Child'

class Mine extends React.Component{
    constructor(){
        super()
        this.state = {texts: [], color: '', counter: 0}
        this.changeColor = this.changeColor.bind(this)
        this.counterClick = this.counterClick.bind(this)
    }

    componentDidMount(){
        this.setState ({texts: ['Belajar ReactJS', 'Sungguh Menyenangkan', 'Asik Sekali'], color: 'green'})
    }

    changeColor(){
        if (this.state.color === 'green'){
            this.setState({color: 'blue'})
        } else {
            this.setState({color: 'green'})
        }
    }

    counterClick(){
        this.setState({counter: this.state.counter + 1})
    }

    render(){
        let texts = this.state.texts.map((text) =>{
            return (
                <Child text = {text} counterClick = {this.counterClick} />
            )
        })

        let style = {color: this.state.color}

        return (
            <div style={style} onClick={this.changeColor}>
                <div id="mine">
                    Halo Dunia JS
                </div>

                <div>
                    React JS is cool
                </div>
                {texts}
                {this.state.counter}
            </div>
        );
    }
}

export default Mine;