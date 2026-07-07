const API_URL = "http://localhost:4000/api/chat";

export async function streamMessage(
  message: string,
  onChunk: (chunk: string) => void
) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok || !response.body) {
    throw new Error("Failed to connect to server");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { value, done } = await reader.read();

    if (done) break;

    const chunk = decoder.decode(value);
    onChunk(chunk);
  }
}