import { writable } from "svelte/store";

export let init = function () {
    fetch("https://api.hetzner.cloud/v1/ssh_keys", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("networks", JSON.stringify(data.ssh_keys));
            ssh_keys.set(data.ssh_keys);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export let load = function () {
    if (localStorage.getItem('ssh_keys') == null) {
        init();
    }
    else {
        ssh_keys.set(JSON.parse(localStorage.getItem('ssh_keys') || ''));
    }
}

export let ssh_keys = writable([]);