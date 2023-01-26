import { RiveView } from '..';
let installed = false;
export default {
    install(Vue) {
        if (!installed) {
            installed = true;
            Vue.registerElement('RiveView', () => RiveView, {});
        }
    }
};
