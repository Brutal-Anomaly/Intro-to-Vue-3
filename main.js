const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id, action) {
            if (action)
                this.cart.push(id)
            else
                this.cart.pop(id)
        }
    }
})
