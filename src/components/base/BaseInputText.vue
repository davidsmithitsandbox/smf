<template>
  <div>
    <baseFormGroup>
      <baseLabel :for="id"></baseLabel>
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
