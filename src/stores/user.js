import { writable } from "svelte/store";
import PocketBase from "pocketbase";
import { browser } from "$app/environment";
import { goto } from "$app/navigation";

export let token = writable('');
export let userData = writable({});
export let isLoggedIn = writable(false);

export let init = async function () {
    const pb = new PocketBase("https://tf7voewz4y2hz8z.pocketbase.tech");

    const authData = await pb
        .collection("users").authRefresh();
    if (authData.token) {
        token.set(authData.token);
        userData.set(authData.record);
        isLoggedIn.set(true);
        goto("/servers");
    }
}

token.subscribe(function (value) {
    if (browser) {
        localStorage.setItem('token', value);
    }
});