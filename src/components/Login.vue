<template>
  <base-card v-bind:header="loginHeader">
    <BaseForm>
      <BaseRow>
        <BaseColumn>
          <BaseInputText
            :id="'name_first'"
            :placeholder="'First name'"
          ></BaseInputText>
        </BaseColumn>
        <BaseColumn>
          <BaseInputText
            :id="'name_last'"
            :placeholder="'Last name'"
          ></BaseInputText>
        </BaseColumn>
      </BaseRow>
      <BaseInputEmail></BaseInputEmail>
      <BaseButtonSubmit></BaseButtonSubmit>
    </BaseForm>
  </base-card>
</template>

<script>
import { app } from "../mixins/app.js";
export default {
  mixins: [app],
  data: function() {
    return {};
  },
  computed: {
    loginHeader: function() {
      return "Create Your " + this.appName + " Account";
    }
  }
};
</script>

<style></style>
