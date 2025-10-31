import React from 'react';
import profileImg from '../images/profile bild.jpeg';
import pic01 from '../images/pic01.jpg';

function Home() {
  return (
    <>
      <div id="main">
        <article className="post featured">
          <header className="major">
            <span className="date">Välkommen</span>
            <h2>
              <a href="#">
                Portfolio
                <br />
                Aladdin Marshaha
              </a>
            </h2>
            <p>
              .NET Fullstack Developer med passion för moderna webblösningar
              <br />
              och användarcentrerad design.
            </p>
          </header>
        </article>
      </div>
    </>
  );
}

export default Home;