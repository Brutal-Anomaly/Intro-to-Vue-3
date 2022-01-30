const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [ 
                {id: '2234', color: 'green'},
                {id: '2235', color: 'blue'}
            ],
            sizes: [
                {id: '3000', size: 'small'},
                {id: '3001', size: 'medium'},
                {id: '3002', size: 'large'}
            ]
        }
    }
})
