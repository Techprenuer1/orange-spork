import './App.css';

function App() {
  return (
    <body>
      <div class="container">
        <header class="header">
          <h1 id="title" class="text-center">freeCodeCamp Survey Form</h1>
          <p id="description">Thank you for taking the time to help us improve the platform</p>
        </header>
        <form id="survey-form">
          <div class="form-group">
            <label id="name-label" for="name"> Name</label>
            <input type="text" name="name" id="name" placeholder="Enter your name" class="form-control" required />
          </div>
          <div class="form-group">
            <label id="email-label" for="email">Email</label>
            <input id="email" name="email" type="email" class="form-control" placeholder="Enter your Email" required />
          </div>
          <div class="form-group">
            <label id="number-label">Age (optional)</label><input id="number" type="number" min="6" max="20" class="form-control" placeholder="Age" />
          </div>
          <div class="form-group">
            <p> Which option bests describes your current role? </p>
            <select id="dropdown" name="role" class="form-control" required>
              <option disabled selected value>Select current role</option>
              <option value="student"></option>
              <option value="Full Time Job"></option>
              <option value="Full Time Learner"></option>
              <option value="Prefer not to say"></option>
              <option value="Other"></option>
            </select>
          </div>
          <div class="form-group">
            <p> Would you recommend CodeCamp to a friend? </p>
            <label>
              <input name="user-recommend" value="definitely" type="radio" class="input-radio" checked /> Definitely
            </label>
            <label>
              <input name="user-recommend" value="maybe" type="radio" class="input-radio" checked /> Maybe
            </label>
            <label>
              <input name="user-recommend" value="notsure"
                type="radio" class="input-radio" checked /> Not Sure </label>
          </div>
          <div class="form-group">
            <p> What is your favorite feature of freeCodeCamp?</p>
            <select id="most-like" name="mostLike" class="form-control" required>
              <option disabled selected value> Select an option </option>
              <option value="challenges">Challenges</option>
              <option value="projects">Projects</option>
              <option value="community">Community</option>
              <option value="openSource">Open Source</option>
            </select>
          </div>
          <div class="form-control">
            <p>What would you like to see improved?
              <span class="clue">(Check all that apply)</span>
            </p>
            <label><input name="prefer" value="front-end-projects" type="checkbox" class="input-checkbox" /> Front-end Projects</label>
            <label><input name="prefer" value="back-end-projects" type="checkbox" class="input-checkbox" /> Back-end Projects</label>
            <label><input name="prefer" value="datavisualization" type="checkbox" class="input-checkbox" /> Data Visualization </label>
            <label><input name="prefer" value="challenges" type="checkbox" class="input-checkbox" /> Challenges </label>
            <label><input name="prefer" value="open-source-community" type="checkbox" class="input-checkbox" />Open Source Community</label>
            <label><input name="prefer" value="gitter-help-rooms" type="checkbox" class="input-checkbox" /> Gitter help rooms</label>
            <label><input name="prefer" value="videos" type="checkbox" class="input-checkbox" /> Videos </label>
            <label><input name="prefer" value="city-meetups" type="checkbox" class="input-checkbox" /> City Meetups </label>
            <label><input name="prefer" value="wiki" type="checkbox" class="input-checkbox" /> Wiki </label>
            <label><input name="prefer" value="forum" type="checkbox" class="input-checkbox" /> Forum </label>
            <label><input name="prefer" value="additional-courses" type="checkbox" class="input-checkbox" /> Additional Courses </label>
          </div>
          <div class="form-group">
            <p>Any comments or suggestions?</p>
            <textarea id="comments" class="input-textarea" name="comment" placeholder="Enter your comment here..."></textarea>
          </div>
          <div class="form-group">
            <button type="submit" id="submit" class="submit-button"> Submit </button>
          </div>
        </form>
      </div>
    </body>
  );
}

export default App;
