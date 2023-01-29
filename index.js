const { createApp } = Vue;

createApp({
    data() {
        if (count) {
            console.log(count)
        }
        return {
            count: 0,

        };
    },
}).mount("#app");