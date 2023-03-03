import { writable } from "svelte/store";

export const init = function () {
    fetch("https://api.hetzner.cloud/v1/volumes", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("volumes", JSON.stringify(data.volumes));
            volumes.set(data.volumes);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const load = function () {
    if (localStorage.getItem('volumes') == null) {
        init();
    }
    else {
        volumes.set(JSON.parse(localStorage.getItem('volumes') || ''));
    }
}

export const volumes = writable([]);