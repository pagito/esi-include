require('./bootstrap');

window.Vue = require('vue');

Vue.component('test', require('./components/test.vue').default);

const app = new Vue({
    el: '#app',
    data: {
    	//
    },
});
