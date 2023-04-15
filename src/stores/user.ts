import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const token = writable('');
export const authData = writable({});
export const isLoggedIn = writable(false);

export const init = function () {
    if (browser && localStorage.getItem('pocketbase_auth') != null) {
        const data = JSON.parse(localStorage.getItem('pocketbase_auth'));

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