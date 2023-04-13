import { writable } from "svelte/store";
import { browser } from "$app/environment";
export const types = writable([]);

export const load = async function () {
    if (browser) {
        const response = await fetch('https://api.hetzner.cloud/v1/server_types',
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem('htoken')
                }
            });
        const json = await response.json();
        types.set(json.server_types);
    }
}