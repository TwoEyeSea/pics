import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputClick() {
    console.log("Input was clicked");
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="booya"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* Notice that the "this.onInputChange" callback function isn't defined with a set of parentheses "()",  */}
            {/* this is because we don't want to call the function on startUp of the application. This way allows us to call the onInputChange function at a later time  */}
            {/* MAIN TAKEAWAY -> We do not add parentheses when we pass a callback function to onChange */}
            {/* NB we can use the arrow function alternate event handller syntax anytime we have a single line of code */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
