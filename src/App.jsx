import React from "react";
import axios from "axios";
import "./index.css";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    axios.get("https://api.github.com/users")
      .then(response => {
        this.setState({
          isLoaded: true,
          data: response.data
        });
      }) // <-- Corrected: properly closing .then() before .catch()
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  render() {
    const { error, isLoaded, data } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div  style={{ display: 'inline-block',
        marginLeft: '15px'}}>
          <h1>GitHub Users</h1>
          <br />
          {data.map((item) => (
            <div key={item.id} className="UserBlock">
              <img src={item.avatar_url} alt="User Icon" />

              <div className="UserDetails">
                <p><strong>Username:</strong> {item.login}</p>
                <p><strong>ID:</strong> {item.id}</p>
                <p>
                  <strong>URL:</strong>{" "}
                  <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                    {item.html_url}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default MyComponent;
