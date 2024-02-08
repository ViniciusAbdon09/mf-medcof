import { createApp } from 'vue';
import About from './About.vue';

export default function placeCards(el) {
    createApp(About).mount(el);
}