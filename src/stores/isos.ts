import { writable } from "svelte/store";

export let init = function () {
    fetch("https://api.hetzner.cloud/v1/isos", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("isos", JSON.stringify(data.isos));
            isos.set(data.isos);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
};

export let load = function () {
    if (localStorage.getItem('isos') == null) {
        init();
    }
    else {
        isos.set(JSON.parse(localStorage.getItem('isos') || ''));
    }
}

export let isos = writable([]);