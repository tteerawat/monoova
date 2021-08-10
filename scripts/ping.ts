import { newClient } from "./_helpers.ts";
import { request } from "../lib/monoova_client.ts";

const client = newClient();
const json = await request(client, "GET", "/tools/v1/ping");

console.log(json);
