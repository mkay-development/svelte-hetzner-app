import { writable } from "svelte/store";

export let init = function () {
    fetch("https://api.hetzner.cloud/v1/images", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("images", JSON.stringify(data.images));
            images.set(data.images);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export let load = function () {
    if (localStorage.getItem('images') == null) {
        init();
    }
    else {
        images.set(JSON.parse(localStorage.getItem('images') || ''));
    }
}

export let images = writable([]);