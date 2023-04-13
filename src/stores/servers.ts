import { writable, get } from "svelte/store";
import { htoken, init } from "./hetzner";
import { browser } from "$app/environment";

export const servers = writable([]);

export let addServer = function (server) {
    servers.set([...get(servers), ...[server]])
}

export const add = async function (server) {
    if (browser) {
        const response = await fetch('https://api.hetzner.cloud/v1/servers/',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem('htoken')
                },
                body: JSON.stringify(server)
            });
        const json = await response.json();
        console.log(json);
    }
}

export const remove = async function (id) {
    if (browser) {
        const response = await fetch('https://api.hetzner.cloud/v1/servers/' + id,
            {
                method: 'DELETE',
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('htoken')
                }
            });
        const json = await response.json();
        console.log(json);
    }
}

export const load = async function () {
    init();
    if (browser) {
        const response = await fetch('https://api.hetzner.cloud/v1/servers',
            {
                method: 'GET',
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('htoken')
                }
            });
        const json = await response.json();
        servers.set(json.servers);
    }
}