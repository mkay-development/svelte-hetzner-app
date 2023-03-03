import { writable } from "svelte/store";

export const init = function () {
    fetch("https://api.hetzner.cloud/v1/ssh_keys", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("ssh_keys", JSON.stringify(data.ssh_keys));
            ssh_keys.set(data.ssh_keys);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const load = function () {
    if (localStorage.getItem('ssh_keys') == null) {
        init();
    }
    else {
        ssh_keys.set(JSON.parse(localStorage.getItem('ssh_keys') || ''));
    }
}

export const ssh_keys = writable([]);