import React from 'react';
import './App.css';
import './styles/Adminform.css';

function Adminform() {
  const handleSubmit = event => {
   event.preventDefault();
   alert('You have submitted the data')
 }

  return(
    <div className="wrapper">
      <h1>Input Project Data</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Project Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Project Leader</p>
            <input name="leader" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Project description</p>
            <input name="description" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Image Link</p>
            <input name="link1" />
            <input name="link2" />
            <input name="link3" />
            <input name="link4" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Github Link</p>
            <input name="github" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Demo Link</p>
            <input name="demolink" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Documentation</p>
            <input name="documentation" />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Tech Stack</p>
            <input name="tech" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Adminform;
