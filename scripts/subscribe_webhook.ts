import { getUserInput, newClient } from "./_helpers.ts";
import { request } from "../lib/monoova_client.ts";

const client = newClient();

const eventName = getUserInput("event name:");
const targetUrl = getUserInput("target url:");

const json = await request(client, "POST", "/subscriptions/v1/create", {
  "eventName": eventName,
  "targetUrl": targetUrl,
  "subscriptionStatus": "On",
});

console.log(json);
