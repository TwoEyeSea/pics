import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  // We default the images prop to be an empty array because we receive the image results data from the API in the form of an array
  // this allows us to use methods associated with arrays

  onSearchSubmit = async (term) => {
    //Async keyword in front of the event handler indicates that we're going to use async syntax within the function
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID uyojAcvL3i5GzARBDhnFQlQ34joOii7ZE3qUkAjKqjo",
      },
    });
    console.log(response.data.results);
    // Displays the results array within the console
    console.log(this);
    // Displaying "this" on the console to determine what it's representing
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length}
      </div>
    );
  }
}

export default App;
