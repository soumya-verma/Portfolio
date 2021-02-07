import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <form
        method="POST"
        action="https://formsubmit.co/3fcba17ce019626858ba99ef98dd6003"
      >
        <h2>Leave me a message</h2>
        <input
          type="text"
          name="name"
          class="input"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          class="input"
          placeholder="Your Email"
          required
        />
        <textarea
          placeholder="Your Message"
          class="input"
          name="message"
          rows="10"
          required
        ></textarea>
        <button type="submit" class="btn btn-lg btn-dark btn-block">
          Submit Form
        </button>
        <input type="hidden" name="_captcha" value="false"></input>
        {/* <input
          type="hidden"
          name="_next"
          value="https://yourdomain.co/thanks.html"
        ></input> */}
      </form>
    </div>
  );
};

export default Contact;
