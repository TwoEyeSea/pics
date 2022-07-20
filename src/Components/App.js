import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./imageList";

class App extends React.Component {
  state = { images: [] };
  // We default the images prop to be an empty array because we receive the image results data from the API in the form of an array
  // this allows us to use methods associated with arrays

  onSearchSubmit = async (term) => {
    //Async keyword in front of the event handler indicates that we're going to use async syntax within the function
    const response = await unsplash.get("https://api.unsplash.com/search/photos", {
      // we can call the custom clinet "unsplash" as shown above.
      params: { query: term },
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
        <ImageList images={this.state.images} />
        {/* We define a new prop on the ImageList Component "images={this.state.images}"
        This passes the array of images from the parent to the component */}
      </div>
    );
  }
}

export default App;
