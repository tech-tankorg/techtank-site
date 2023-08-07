import emailjs from "@emailjs/browser";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

export const sendEmail = (
  e: React.FormEvent<HTMLFormElement>,
  userName: string,
  setEmailSent: (value: boolean) => void,
  setEmailErrored: (value: boolean) => void,
  setUserName: (value: string) => void,
  setSubmittedUserName: (value: string) => void
) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  setSubmittedUserName(userName);
  emailjs
    .sendForm("default_service", "template_qg2k3ds", form, PUBLIC_KEY)
    .then(
      (result) => {
        setEmailSent(true);
        form.reset();
        setUserName("");
      },
      (error) => {
        setEmailErrored(true);
        console.log(error.text);
      }
    );
};
