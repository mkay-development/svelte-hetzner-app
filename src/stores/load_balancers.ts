import { writable } from "svelte/store";

export const init = function () {
    fetch("https://api.hetzner.cloud/v1/load_balancers", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("load_balancer", JSON.stringify(data.load_balancers));
            load_balancers.set(data.load_balancers);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export const load = function () {
    if (localStorage.getItem('load_balancers') == null) {
        init();
    }
    else {
        load_balancers.set(JSON.parse(localStorage.getItem('load_balancers') || ''));
    }
}

export const load_balancers = writable([]);