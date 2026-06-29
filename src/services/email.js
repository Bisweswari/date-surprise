import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function sendResponse(answers) {
  const now = new Date();

  const templateParams = {
    name: "❤️ She Said YES ❤️",
    accepted: "YES ❤️",

    q1: answers[0] || "",
    q2: answers[1] || "",
    q3: answers[2] || "",
    q4: answers[3] || "",
    q5: answers[4] || "",
    q6: answers[5] || "",

    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),

    message: `
Question 1: ${answers[0] || ""}
Question 2: ${answers[1] || ""}
Question 3: ${answers[2] || ""}
Question 4: ${answers[3] || ""}
Question 5: ${answers[4] || ""}
Question 6: ${answers[5] || ""}

Accepted: YES ❤️
    `,
  };

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY
  );
}
