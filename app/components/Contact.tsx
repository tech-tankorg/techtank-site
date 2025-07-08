"use client";

import React, { forwardRef, useState } from "react";
import { sendEmail } from "../../utils/service/emailService";

const Contact = React.forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [emailErrored, setEmailErrored] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [submittedUserName, setSubmittedUserName] = useState<string>("");

  const isFormValid = userName.length > 0;

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const sendFormEmail = (e: React.FormEvent<HTMLFormElement>) => {
    sendEmail(
      e,
      userName,
      setEmailSent,
      setEmailErrored,
      setUserName,
      setSubmittedUserName
    );
  };

  return (
    <div
      id="contact-us" // Necessary for creating a link to the contact us section.
      ref={ref}
      className="min-h-[90vh] max-w-[1440px] mx-auto my-6 wrapper sm:pt-32"
    >
      <h2 className="text-4xl text-center pb-6">Contact Us!</h2>
      <form
        onSubmit={sendFormEmail}
        className="flex flex-col w-[600px] mx-auto sm:w-[90%]"
      >
        <label
          htmlFor="user_name"
          className="block text-sm font-medium text-gray-700"
        >
          Your Name
        </label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          value={userName}
          onChange={handleUserNameChange}
          className="mt-1 p-2 mb-6 w-full border rounded-md border-gray-800"
          required
        />

        <label
          htmlFor="reply_to"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          type="email"
          name="reply_to"
          id="reply_to"
          className="mt-1 p-2 mb-6 w-full border rounded-md border-gray-800"
          required
        />

        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="mt-1 p-3 mb-6 w-full border rounded-md border-gray-800 min-h-[180px]"
          required
        />

        <div className="flex justify-center">
          <button type="submit" className="btn" disabled={!isFormValid}>
            Send
          </button>
        </div>
      </form>
      {emailSent && !emailErrored && (
        <p className="text-center mt-10">
          Thank you for your email, {submittedUserName}. We will respond as soon
          as we can✨!{" "}
        </p>
      )}
      {emailErrored && !emailSent && (
        <p className="text-center mt-10">
          Something went wrong🥺. Please try again!
        </p>
      )}
    </div>
  );
});

Contact.displayName = "Contact";
export default Contact;
