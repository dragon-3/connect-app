import React from 'react';

const NewPost = (props) => {
    return(
        <div className="post-box">
            <div className="post">
                <form >
                    <label for="fname"></label>
                    <input type="text" id="fname" name="fname" placeholder="    Type here"></input>
                </form>
            </div>
        </div>
    )
}

export default NewPost;