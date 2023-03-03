import { writable } from "svelte/store";

export let init = function () {
    fetch("https://api.hetzner.cloud/v1/datacenters", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("datacenters", JSON.stringify(data.datacenters));
            datacenters.set(data.datacenters);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export let load = function () {
    if (localStorage.getItem('datacenters') == null) {
        init();
    }
    else {
        datacenters.set(JSON.parse(localStorage.getItem('datacenters') || ''));
    }
}

export let datacenters = writable([]);