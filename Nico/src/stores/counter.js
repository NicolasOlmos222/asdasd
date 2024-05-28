import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
    // data reactiva
    state: () => ({
        count: 0,
    }),
    // methods
    actions: {
        increment() {
            this.count++;
        },
    },
    // computed
    getters: {
        double: (state) => state.count * 2,
    },
});
