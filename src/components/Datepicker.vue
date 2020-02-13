<template>
  <div>
    <input id="datepicker" type="text" class="form-control" :value="value" />
  </div>
</template>
<script>
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

export default {
  name: "Datepicker",
  props: {
    value: {
      type: String,
      required: true
    },
    methods: {
      update(newDate) {
        this.$emit("input", newDate);
      },
      initDatepicker() {}
    },
    mounted() {
      this.initDatepicker();
    }
  }
};
</script>
