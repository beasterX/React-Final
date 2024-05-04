import "./styles.css";

function HomePage() {
  return (
    <div className="home">
      <section>
        <div className="container">
          <img
            className="main-image"
            src="./Resources/12bc5c5c95ee9a9e57e165f3c5ba1615.png"
            alt="Image 1"
          />
          <div className="quote-box">
            <blockquote>
              <p>“Football is the best, is the biggest sport in the world.”</p>
              <footer>
                — Pelé
                <img
                  src="./Resources/pele.jpg"
                  alt="Pelé"
                  className="pele-image"
                />
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <div className="intro">
        <div className="intro-text">
          <h1>What is Football?</h1>
          <p>
            Football, also known as soccer in some countries, is a popular sport
            played and enjoyed by millions of people worldwide. It is a team
            sport that involves two teams competing to score goals by getting a
            ball into the opposing team's net. The game is played on a
            rectangular field with goalposts at each end, and players use their
            feet (and sometimes other parts of their bodies) to control and pass
            the ball.
          </p>
          <p>
            Football is not just a game; it's a passion that brings people
            together, fostering a sense of camaraderie and teamwork. From local
            matches to international competitions, football has the power to
            unite fans and create unforgettable moments.
          </p>
          <p>
            Whether you're a player on the field or a passionate supporter in
            the stands, football is a sport that transcends borders and
            cultures, creating a global community bound by the love of the game.
          </p>
        </div>
        <div className="stadium-container">
          <img
            src="./Resources/stadium.jpg"
            alt="stadium"
            className="stadium-img"
          />
        </div>
      </div>

      <div className="basics">
        <div className="salah-container">
          <img src="./Resources/salah.png" alt="salah" className="salah" />
        </div>
        <div className="basics-text">
          <h1>Basics of Football</h1>
          <h3>1. The Objective</h3>
          <p>
            The primary objective of football is to score goals by getting the
            ball into the opponent net. Each goal is worth one point, and the
            team with the most goals at the end of the match wins.
          </p>

          <h3>2. Teams and Players</h3>
          <p>
            A standard football match is played between two teams, each
            consisting of 11 players, including one goalkeeper. Players are not
            allowed to use their hands or arms to touch the ball, except for the
            goalkeeper within their penalty area.
          </p>

          <h3>3. The Pitch</h3>
          <p>
            The game is played on a rectangular field, known as the pitch, with
            goalposts at each end. The pitch is divided into two halves, and
            each team defends one half while trying to score in the opponent
            half.
          </p>

          <h3>4. Offsides</h3>
          <p>
            The offside rule is in place to ensure fair play. A player is
            considered offside if they are nearer to the opponent goal line than
            the ball and the second-to-last defender when the ball is played to
            them.
          </p>

          <h3>5. Fouls and Free Kicks</h3>
          <p>
            Fouls occur when a player engages in unfair play, such as tripping,
            pushing, or handball. The opposing team is awarded a free kick or a
            penalty kick, depending on the severity and location of the foul.
          </p>

          <h3>6. Yellow and Red Cards</h3>
          <p>
            Referees may issue yellow cards for caution and red cards for
            serious offenses. A player receiving a red card is sent off the
            field, and their team plays with one player fewer for the remainder
            of the match.
          </p>
          <br />
          <p>
            Understanding and following these rules is essential for players,
            coaches, and fans alike to appreciate the beauty of the game and
            ensure a fair and competitive playing environment.
          </p>
        </div>
      </div>
      <footer>
        <div>
          <p>© 2024 by Mir Faiyazur Rahman</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
