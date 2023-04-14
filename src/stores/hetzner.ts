import { browser } from "$app/environment";
import { writable, get } from "svelte/store";

export const htokens = writable([]);
export const htoken = writable('');

export const init = function () {
    if (browser) {
        htoken.set(localStorage.getItem('htoken'));
        htokens.set(JSON.parse(localStorage.getItem('htokens')));
    }
}

export const add = function (token) {
    htokens.set([...get(htokens), ...[token]]);
    htoken.set(token);
}

htokens.subscribe(function () {
    if (browser && get(htokens).length > 0) {
        localStorage.setItem('htokens', JSON.stringify(get(htokens)));
    }
});


htoken.subscribe(function () {
    if (browser && get(htoken)) {
        localStorage.setItem('htoken', get(htoken));
    }
});