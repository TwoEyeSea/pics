import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
    placeholder: "Hi there, please define a search parameter",
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
              placeholder={this.state.placeholder}
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            {/* Notice that the "this.onInputChange" callback function isn't defined with a set of parentheses "()",  */}
            {/* this is because we don't want to call the function on startUp of the application. This way allows us to call the onInputChange function at a later time  */}
            {/* MAIN TAKEAWAY -> We do not add parentheses when we pass a callback function to onChange */}
            {/* NB we can use the arrow function alternate event handller syntax anytime we have a single line of code */}
            {/* NB CONTROLLED ELEMENTS - The only way to determine the value of the input element at any given moment in time, utilizing the uncontrolled element code format, */}
            {/* was to reach into the DOM and pull the value out of it. The only time that the React component could determine what the value was, was during the time that the user actually typed */}
            {/* something into the input and the callback function was invoked. */}
            {/* MAIN TAKEAWAY - we don't want to store information within our HTML elements, instead we want to centralize all of the information within the react component. */}
            {/* We can also use this approach to manipulate string case, we can force capitalized input quite easily too */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
