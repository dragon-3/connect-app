import React, { Component, useState, useRef, useEffect } from 'react';
import NewPost from './NewPost';


function Main() {
    
  let [visible, setVisible] = useState(true);

  let postRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!postRef.current.contains(event.target)) {
        setVisible(true);
      }
    })
  });

        return(
            <div className="main">
                <button onClick={() => setVisible((visible) => !visible)}>Write a post</button>

                <div ref={postRef} className="post">
                    {visible ? null : <NewPost />}
                </div>

            </div>

        )
    
}

export default Main;