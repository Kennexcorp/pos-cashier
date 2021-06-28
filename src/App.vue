<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCompanyInfo } from "./services/utils.service";
export default defineComponent({
  setup() {
    const { setCompanyDetails } = useCompanyInfo();
    setCompanyDetails();
  },
});
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";
@import "@/assets/scss/main.scss";
@import "@/assets/scss/responsive.scss";
</style>
