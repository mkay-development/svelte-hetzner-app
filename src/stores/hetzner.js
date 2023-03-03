import { writable } from "svelte/store";
import { browser } from "$app/environment";
import PocketBase from "pocketbase";

export let tokens = writable([]);
export let selected_token = writable('');

export let init = async function () {
    const pb = new PocketBase("https://tf7voewz4y2hz8z.pocketbase.tech");
    const result = await pb.collection("tokens").getList(1, 10, {
        sort: "created",
    });
    tokens.set(result.items);
}

export let load = function () {
    if (localStorage.getItem('selected_token') == null) {
        init();
    }
    else {
        tokens.set(JSON.parse(localStorage.getItem('selected_token') || '') || '');
    }
}

selected_token.subscribe((value) => {
    if (browser && value != '') {
        localStorage.setItem('selected_token', value);
    }
});