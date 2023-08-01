"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// https://www.emailjs.com/

export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null); // Add type annotation for "form" useRef.

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    // Add type annotation for "e" event parameter.
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID",
          "YOUR_TEMPLATE_ID",
          form.current,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

Contact.displayName = "Contact";
export default Contact;
