import React, {Component} from 'react'

// this is called a higher order component because it wraps around other components
// we wrapped it around the App.js component at render but we won't use it (it was just for a module)
// it's usefull but we won't use it for now
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }

    render(){
        if(this.state.hasError){
            return (
                <h1> {this.state.errorMessage} </h1>
            )
        } else {
            // the reason we return props.childer if there isn't an error is because we'll wrap the components
            // we want to check for errors with this component and if everything goes smooth, we'll let the props.children
            // pass 
            return this.props.children
        }
    }
}

export default ErrorBoundary