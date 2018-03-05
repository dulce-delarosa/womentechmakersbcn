import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SectionTitle from './components/SectionTitle';
import SectionParagraph from './components/SectionParagraph';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container">
            <img src={'images/user.jpg'} alt="George" />
            <h1>Hello, this is my website!</h1>
            <p>If you learned how to add text, images and style them, <span className="highlight">then you can do awesome stuff!</span></p>
          </div>
        </header>

        <section>
          <div className="container">
            <SectionTitle>This one title</SectionTitle>
            <SectionParagraph>
              Te si esse quorum legam. Cillum a offendit do nisi, aliqua singulis quo
              sempiternum. Ipsum <span className="highlight">voluptatibus ingeniis noster</span> voluptate an consequat de
              voluptate nam malis id occaecat ubi quae se eiusmod sint quis doctrina
              dolore.Sed ubi quis probant ab an aliquip o mandaremus. Iis tamen fugiat enim
              mentitum.
            </SectionParagraph>
          </div>
        </section>

        <section>
          <div className="container">
            <SectionTitle>This is another title and its bigger than the other</SectionTitle>
            <SectionParagraph>
              Te si esse quorum legam. Cillum a offendit do nisi, aliqua singulis quo
              sempiternum. Ipsum voluptatibus ingeniis noster voluptate an consequat de
              voluptate nam malis id occaecat ubi quae se eiusmod sint quis doctrina
              dolore.Sed ubi quis probant ab an aliquip o mandaremus. Iis tamen fugiat enim
              mentitum.
            </SectionParagraph>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
