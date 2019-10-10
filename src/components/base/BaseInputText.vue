<template>
  <div>
    <baseFormGroup>
      <baseLabel v-if="label" :for="id">{{ label }}</baseLabel>
      <input
        :name="name"
        :id="id"
        type="text"
        class="form-control"
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
    name: {
      default: "text"
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
