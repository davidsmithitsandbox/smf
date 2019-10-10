<template>
  <base-card :id="'body'" v-bind:header="loginHeader">
    <BaseForm>
      <BaseRow>
        <BaseColumn :id="'name_first_column'">
          <BaseInputText
            :id="'name_first'"
            :placeholder="'First name'"
          ></BaseInputText>
        </BaseColumn>
        <BaseColumn :id="'name_last_column'">
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

<style scoped>
#body {
  padding-left: 0.5em;
  padding-right: 0.5em;
}
#name_first_column {
  padding-right: 0.5em;
}
#name_last_column {
  padding-left: 0.5em;
}
</style>
