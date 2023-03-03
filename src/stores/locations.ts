import { writable } from "svelte/store";

export let init = function () {
    fetch("https://api.hetzner.cloud/v1/locations", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("locations", JSON.stringify(data.locations));
            locations.set(data.locations);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export let load = function () {
    if (localStorage.getItem('locations') == null) {
        init();
    }
    else {
        locations.set(JSON.parse(localStorage.getItem('locations') || ''));
    }
}

export let locations = writable([]);