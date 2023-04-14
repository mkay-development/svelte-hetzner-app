import { writable, get } from "svelte/store";

export const items = writable([]);

export const addNote = function (note) {
    const tmp = [...get(items), ...[note]]
    items.set(tmp);
}