import * as React from "react";

interface props {
  subject?: string;
  message?: string;
}

export const EmailTemplate = ({ subject, message }: props) => (
  <>
    <h1>{subject}</h1>
    <p>Thank you for contacting me!</p>
    <p>New message submitted</p>
    <p>{message}</p>
  </>
);
