Vue.component('button-counter', {
  data: function() {
    return {
      count: 0
    }
  },
  methods: {
    addOne: () => { count++ }
  },
  template: '<button v-on:click="addOne">You clicked me {{count}} times</button>'
});

const app = new Vue({
  el: '#components-demo'
})
