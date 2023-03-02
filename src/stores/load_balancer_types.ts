import { writable } from "svelte/store";

export let init = function () {
    fetch("https://api.hetzner.cloud/v1/load_balancer_types", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("load_balancer_types", JSON.stringify(data.load_balancer_types));
            load_balancer_types.set(data.load_balancer_types);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export let load = function () {
    if (localStorage.getItem('load_balancer_types') == null) {
        init();
    }
    else {
        load_balancer_types.set(JSON.parse(localStorage.getItem('load_balancer_types') || ''));
    }
}

export let load_balancer_types = writable([]);