<template>
  <div>
    <baseFormGroup>
      <baseLabel v-if="label" :for="id">{{ label }}</baseLabel>
      <input
        :id="id"
        class="form-control"
        type="text"
        :placeholder="placeholder"
      />
    </baseFormGroup>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      default: ""
    },
    id: {
      default: ""
    },
    placeholder: {
      default: ""
    }
  }
};
</script>

<style></style>
