import { writable } from "svelte/store";

export const init = async function () {
    const response = await fetch("https://api.hetzner.cloud/v1/certificates", {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("selected_token"),
        },
    });
    const data = await response.json();
    if (data.certificates) {
        certificates.set(data.certificates);
    }
};

export const load = function () {
    if (localStorage.getItem('certificates') == null) {
        init();
    }
    else {
        certificates.set(JSON.parse(localStorage.getItem('certificates') || ''));
    }
}

export const certificates = writable([]);