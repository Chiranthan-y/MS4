import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='container mt-4 home text-center align-self-center'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className='row mt-10 lightbg text-center justify-content-center text-light'>
          <h1 align='center'> Welcome to the Central Library</h1>
        </div>
      </div>
    );
  }
}

export default Home;
