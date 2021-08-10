import { getUserInput, newClient } from "./_helpers.ts";
import { request } from "../lib/monoova_client.ts";

const client = newClient();

const id = getUserInput("id:");

const json = await request(client, "DELETE", "/subscriptions/v1/delete/" + id);

console.log(json);
