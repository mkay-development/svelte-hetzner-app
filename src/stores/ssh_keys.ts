import { writable } from "svelte/store";
import { browser } from "$app/environment";
export const ssh_keys = writable([]);

export const load = async function () {
    if (browser && !localStorage.getItem('ssh_keys')) {
        const response = await fetch('https://api.hetzner.cloud/v1/ssh_keys',
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem('htoken')
                }
            });
        const json = await response.json();
        ssh_keys.set(json.ssh_keys);
        localStorage.setItem('ssh_keys', JSON.stringify(json.ssh_keys));
    }
    else {
        ssh_keys.set(JSON.parse(localStorage.getItem('ssh_keys')));
    }
}