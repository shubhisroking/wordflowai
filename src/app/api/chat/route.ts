import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const hackclub = createOpenAICompatible({
  name: "hackclub",
  baseURL: "https://ai.hackclub.com",
});

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: hackclub("openai/gpt-oss-120b"),
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
