import App from "./App.svelte";

import { register, addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

//this would only be possible if svelte/rollup would output a bundle that has importable chunks instead of an iife which cant dynamically import
//when using sveltekit or any bundler or similar the dynamic variant should be used
//but this app has such few strings that importing all languages should be fine
// register('en', () => import('./locales/en.json'));
// register('ru', () => import('./ru.json'));
// register('de', () => import('./de.json'));

import en from './locales/en.json';
import ru from './locales/ru.json';
import de from './locales/de.json';
import es from './locales/es.json';

addMessages('en', en);
addMessages('ru', ru);
addMessages('de', de);
addMessages('es', es);

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});

const app = new App({
  target: document.body,
  props: {
    name: "Password Crack Time Check",
  },
});

export default app;
