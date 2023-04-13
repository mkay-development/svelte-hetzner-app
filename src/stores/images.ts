import { writable } from "svelte/store";
import { browser } from "$app/environment";
export const images = writable([]);

export const load = async function () {
    if (browser) {
        const response = await fetch('https://api.hetzner.cloud/v1/images',
            {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem('htoken')
                }
            });
        const json = await response.json();
        images.set(json.images);
    }
}