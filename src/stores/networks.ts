import { writable } from "svelte/store";

export let init = async function () {
    let response = await fetch("https://api.hetzner.cloud/v1/networks", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    });
    let data = await response.json();
    if (data.networks) {
        networks.set(data.networks);
    }
};

export let load = function () {
    if (localStorage.getItem('networks') == null) {
        init();
    }
    else {
        networks.set(JSON.parse(localStorage.getItem('networks') || ''));
    }
}

export let networks = writable([]);