import { writable } from "svelte/store";

export let init = async function () {
    let response = await fetch("https://api.hetzner.cloud/v1/certificates", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    });
    let data = await response.json();
    if (data.certificates) {
        certificates.set(data.certificates);
    }
};

export let load = function () {
    if (localStorage.getItem('certificates') == null) {
        init();
    }
    else {
        certificates.set(JSON.parse(localStorage.getItem('certificates') || ''));
    }
}

export let certificates = writable([]);