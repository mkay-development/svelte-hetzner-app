import { writable } from "svelte/store";
import { browser } from "$app/environment";

export let htoken = writable('');

export let init = async function () {
    if (browser && localStorage.getItem('htoken') != null && localStorage.getItem('htoken') != '') {
        let token = localStorage.getItem('htoken');
        htoken.set(token || '');
    }
}

htoken.subscribe(function (value) {
    if (browser && value != '') {
        localStorage.setItem('htoken', value)
    }
});