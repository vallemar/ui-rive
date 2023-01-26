import Vue from 'nativescript-vue';
import RiveView from '@nativescript-community/ui-rive/vue';

import Home from './components/Home.vue';

Vue.use(RiveView);

new Vue({
    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
