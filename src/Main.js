import React, { Component, useState } from 'react';


class SearchBar extends Component {
    


    render() {
        return(
            <div className="search-box">
                <div className="search-bar">
                    <form action="/action_page.php">
                        <label for="fname"></label>
                        <input type="text" id="fname" name="fname" placeholder="    What's on your mind?"></input>
                    </form>
                </div>
            </div>
        )
    }
    
}

export default SearchBar;