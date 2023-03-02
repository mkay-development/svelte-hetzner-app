import { writable } from "svelte/store";

export let init = function () {
    fetch("https://api.hetzner.cloud/v1/server_types", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("server_types", JSON.stringify(data.server_types));
            server_types.set(data.server_types);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export let load = function () {
    if (localStorage.getItem('server_types') == null) {
        init();
    }
    else {
        server_types.set(JSON.parse(localStorage.getItem('server_types') || ''));
    }
}

export let server_types = writable([]);