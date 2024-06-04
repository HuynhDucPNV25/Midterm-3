import { useEffect } from "react";
import "./App.css";
import { Navbar } from "./layouts/Navbar";
import axios from "axios";

function App() {
  // Use the 'useEffect' hook to perform side effects in function components
  useEffect(() => {
  // Define an asynchronous function 'fetchData' to fetch data from the GitHub API
  const fetchData = async () => {
  try {
  // Use the 'axios' library to make a GET request to the GitHub API endpoint
  const response = await axios.get("https://api.github.com/users");
  // Log the fetched data to the console
  console.log("GitHub Users:", response.data);
  } catch (error) {
  // Log an error message if there's an issue fetching data
  console.error("Error fetching data:", error);
  }
  };
  // Call the 'fetchData' function when the component mounts
  fetchData();
  }, []); // The empty dependency array ensures that 'useEffect' runs only once when the component mounts
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>Hello from React</h1>
      </div>
    </div>
  );
}
export default App;