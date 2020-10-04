Vue.component('app', {
  template: '#app',
  data() {
    return {
      source: '' };

  },
  mounted() {
    this.source = this.$refs.source.outerHTML;
  } });


Vue.component('ui-button', {
  template: '#ui-button',
  props: ['size', 'look', 'type', 'icon'] });


Vue.component('html-tree', {
  template: '#html-tree',
  props: ['code'],
  computed: {
    showTree() {
      // thx @yoksel_en for html-tree (https://yoksel.github.io/html-tree/)
      return createTreeFromHTML(this.code);
    } } });



Vue.use(vueBemCn);

new Vue({
  el: '#mount',
  render: h => h('app') });