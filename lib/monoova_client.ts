export type Client = {
  apiKey: string;
  baseUrl: string;
};

export function newSandboxClient(apiKey: string): Client {
  return {
    apiKey: apiKey,
    baseUrl: "https://api.m-pay.com.au",
  };
}

export function newProductionClient(apiKey: string): Client {
  return {
    apiKey: apiKey,
    baseUrl: "https://api.mpay.com.au",
  };
}

export async function request(
  client: Client,
  method: string,
  path: string,
  body?: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  const url = client.baseUrl + path;
  const headers = new Headers({
    "Authorization": "Basic " + btoa(client.apiKey + ":"),
    "Content-Type": "application/json",
  });
  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  });
  return response.json();
}
