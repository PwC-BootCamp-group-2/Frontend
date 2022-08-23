import React, { useState } from "react";
import "./contact.css";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/6ee35fd0-2226-11ed-a969-f1ede4dc5ccf";

const Contact = () => {
  const [status, setStatus] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Anything you need to inject dynamically
    const injectedData = {
      DYNAMIC_DATA_EXAMPLE: 123,
    };
    const inputs = e.target.elements;
    const data: any = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot request, so bypass it to validate via captcha
        if (response.status === 422) {
          //   Object.keys(injectedData).forEach((key) => {
          //     const el = document.createElement("input");
          //     el.type = "hidden";
          //     el.name = key;
          //     el.value = injectedData[key];

          //     e.target.appendChild(el);
          //   });

          e.target.submit();
          throw new Error("Please finish the captcha challenge");
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };

  if (status) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">{status}</div>
      </>
    );
  }

  return (
    <section className="parent-container">
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <h4>
          <h4>Contact Us</h4>
        </h4>
        <h5>Pls fill this form in a decent manner</h5>
        <div className="form_grp">
          <label className="form_label" htmlFor="name">
            Full Name:
          </label>
          <input
            type="text"
            placeholder="Your name"
            id="input"
            name="name"
            required
          />
        </div>
        <div className="form_grp">
          <label className="form_label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            placeholder="Email"
            id="input"
            name="email"
            required
          />
        </div>
        <div className="form_grp">
          <label className="form_label" htmlFor="message">
            Message:
          </label>
          <textarea
            placeholder="Your message"
            id="message"
            name="message"
            required
          />

          <button type="submit" id="submit"> Send a message </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
