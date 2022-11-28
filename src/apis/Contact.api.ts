import { camelCase } from "./Utils.api";

export async function createTicket(
  name: string,
  email: string,
  feedback: string,
  recaptchaToken: string
): Promise<any> {
  let response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/create-ticket/`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        feedback,
        recaptchaToken,
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json().then((d) => camelCase(d[0]));
}
