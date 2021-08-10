import { getUserInput, newClient } from "./_helpers.ts";
import { request } from "../lib/monoova_client.ts";

const client = newClient();

const bsbNumber = getUserInput("bsb number:");

const json = await request(client, "GET", "/tools/v1/bsbValidate/" + bsbNumber);

console.log(json);
