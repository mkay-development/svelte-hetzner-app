import { writable } from "svelte/store";
import { browser } from "$app/environment";
export const locations = writable([]);

export const load = async function () {
    if (browser && !localStorage.getItem('locations')) {
        const response = await fetch('https://api.hetzner.cloud/v1/locations',
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem('htoken')
                }
            });
        const json = await response.json();
        locations.set(json.locations);
        localStorage.setItem('locations', JSON.stringify(json.locations));
    }
    else {
        locations.set(JSON.parse(localStorage.getItem('locations')));
    }
}