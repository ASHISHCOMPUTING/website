import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueMatomo from 'vue-matomo'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");



Vue.use(VueMatomo, {
  // Configure your matomo server and site by providing
  host: 'https://stats.lost.services',
  siteId: 7,

  // Changes the default .js and .php endpoint's filename
  // Default: 'piwik'
  trackerFileName: 'matomo',

  // Overrides the autogenerated tracker endpoint entirely
  // Default: undefined
  // trackerUrl: 'https://example.com/whatever/endpoint/you/have',

  // Enables automatically registering pageviews on the router
  router: router,

  // Enables link tracking on regular links. Note that this won't
  // work for routing links (ie. internal Vue router links)
  // Default: true
  enableLinkTracking: true,

  // Require consent before sending tracking information to matomo
  // Default: false
  requireConsent: false,

  // Whether to track the initial page view
  // Default: true
  trackInitialView: true,

  // Whether or not to log debug information
  // Default: false
  debug: false
});