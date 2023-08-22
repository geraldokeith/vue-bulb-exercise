const app = Vue.createApp({
  data() {
    return {
      isBulbOn: false,
    };
  },
  computed: {
    bulbImage() {
      return this.isBulbOn ? 'bulb-on.jpeg' : 'bulb-off.png';
    },
  },
  methods: {
    toggleBulb() {
      this.isBulbOn = !this.isBulbOn;
    },
  },
});

app.mount('#app');

