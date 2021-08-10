import {
  Client,
  newProductionClient,
  newSandboxClient,
} from "../lib/monoova_client.ts";

function getAPIKey(): string {
  const apiKey: string | undefined = Deno.env.get("MONOOVA_API_KEY");

  if (apiKey === undefined) {
    console.error("MONOOVA_API_KEY is missing!");
    Deno.exit(1);
  }

  return apiKey;
}

export function newClient(): Client {
  const apiKey = getAPIKey();

  const env = getUserInput(
    "Please select environment:\n1. sandbox\n2. production\n>>",
  );

  if (env === "1") {
    return newSandboxClient(apiKey);
  } else if (env === "2") {
    return newProductionClient(apiKey);
  } else {
    Deno.exit(1);
  }
}

export function getUserInput(message: string): string {
  const input = prompt(message) || "";
  return input.trim();
}
