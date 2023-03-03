import { writable } from "svelte/store";

export const init = async function () {
    const response = await fetch("https://api.hetzner.cloud/v1/servers", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    });
    const data = await response.json();
    if (data.servers) {
        servers.set(data.servers);
    }
};

export const load = function () {
    if (localStorage.getItem('servers') == null) {
        init();
    }
    else {
        servers.set(JSON.parse(localStorage.getItem('servers') || ''));
    }
}

export const servers = writable([]);