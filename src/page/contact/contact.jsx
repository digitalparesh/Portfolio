import React from "react";
import "./contact.styles.scss";

const Contact = () => (
  <section id="contact">
    <div className="contact">
      <h2 className="text-center text-uppercase title">contact me</h2>
      <h5 className="text-center mb-4">Here is how you can reach me</h5>

      <div className="container">
        <form className="" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              id="mobile"
              placeholder="Mobile"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="textarea"
              rows="3"
              placeholder="Enter message"
            ></textarea>
          </div>
          <button type="submit" className="btn w-100 btn-outline-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
