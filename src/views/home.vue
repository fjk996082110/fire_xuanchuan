<template>
  <div class="home-wrap">
    this is home
    <button @click="btn">展示组件</button>
    <Calendar
      v-if="showPop"
      v-model="dateSelect"
      type="range"
      color="#3975C6"
      :show-title="false"
      :allow-same-day="true"
      :round="true"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="onDateConfirm"
    />
  </div>
</template>

<script>
import { Calendar } from 'vant';

export default {
  name: "Home",
  components: {
    Calendar,
  },
  data() {
    return {
      showPop: false,
      dateSelect: '',
      minDate: new Date(2021, 0, 1),
      maxDate: new Date(),
    }
  },
  methods: {
    btn() {
      this.showPop = true;
    },
    onDateConfirm() {
      console.log('onDateConfirm', this.dateSelect);
    }
  }
}
</script>

<style scoped lang="scss">
.home-wrap {
  color: red;
}
</style>