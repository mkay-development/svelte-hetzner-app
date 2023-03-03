import { writable } from "svelte/store";

export const init = async function () {
    const response = await fetch("https://api.hetzner.cloud/v1/networks", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    });
    const data = await response.json();
    if (data.networks) {
        networks.set(data.networks);
    }
};

export const load = function () {
    if (localStorage.getItem('networks') == null) {
        init();
    }
    else {
        networks.set(JSON.parse(localStorage.getItem('networks') || ''));
    }
}

export const networks = writable([]);