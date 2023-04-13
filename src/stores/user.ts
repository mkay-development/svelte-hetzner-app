import { browser } from "$app/environment";
import { writable } from "svelte/store";

export let token = writable('');
export let authData = writable({});
export let isLoggedIn = writable(false);

export let init = function () {
    if (browser && localStorage.getItem('pocketbase_auth') != null) {
        let data = JSON.parse(localStorage.getItem('pocketbase_auth'));

        authData.set(data);
        token.set(data.token);
        isLoggedIn.set(true); 
    }
}

token.subscribe(value => {
    if (browser) {
        localStorage.setItem('token', value);
    }
})