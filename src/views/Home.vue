<template>
  <div>
    home
    <el-button @click="toMyprofile()">默认按钮</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    toMyprofile() {
      this.$router.push({ path: "/myprofile" });
    },
  },
};
</script>

<style scoped></style>
