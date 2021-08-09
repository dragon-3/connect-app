import React from 'react';
import { render, Compnent } from 'react-dom';

class NewPost extends React.Component {

    constructor () {
        super();
        this.state = {
            fullName: null
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const fullName = this.state

        return(
        
            <div className="post-box">
                <div className="post">
                    <form >
                        <input type="text" id="name" name="fullName" onChange={this.handleInputChange} placeholder="    Type here"></input>
                    </form>
                </div>
            </div>
        )
    }
    
}

export default NewPost;