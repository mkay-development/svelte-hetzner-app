import { writable } from "svelte/store";

export let init = async function () {
    let response = await fetch("https://api.hetzner.cloud/v1/servers", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    });
    let data = await response.json();
    if (data.servers) {
        servers.set(data.servers);
    }
};

export let load = function () {
    if (localStorage.getItem('servers') == null) {
        init();
    }
    else {
        servers.set(JSON.parse(localStorage.getItem('servers') || ''));
    }
}

export let servers = writable([]);