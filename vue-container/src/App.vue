<template>
  <div>
    <Header title="CONTAINER" />
    <div id="my-card"></div>
  </div>
</template>
<script>
export default {
  components: {
    Header: () => import("header/Header"),
  },
  created() {
    this.lazyload();
  },
  methods: {
    async lazyload() {
      let module = await import("card/Card");
      module.mount(document.querySelector("#my-card"), "Container");
    },
  },
};
</script>
