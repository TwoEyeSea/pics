import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    // This is the convention for defining event handler callback function
    // "on" to indicate that this callback function corresponds to an event handler
    // "input" the element that using the event handler on
    // "Change" the type of event handler that we're utiilizing for this callback function
    // Some people will use "handleInputChange" instetad
    console.log(event.target.value);
  }

  onInputClick() {
    console.log("Input was clicked");
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" placeholder="booya" onClick={this.onInputClick} onChange={this.onInputChange} />
            {/* Notice that the "this.onInputChange" callback function isn't defined with a set of parentheses "()",  */}
            {/* this is because we don't want to call the function on startUp of the application. This way allows us to call the onInputChange function at a later time  */}
            {/* MAIN TAKEAWAY -> We do not add parentheses when we pass a callback function to onChange */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
