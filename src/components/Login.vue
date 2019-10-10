<template>
  <base-card
    :id="'body'"
    v-bind:header="'Create Your ' + this.appName + ' Account'"
  >
    <BaseForm action="#" @submit.prevent="get">
      <BaseRow>
        <BaseColumn :id="'name_first_column'">
          <BaseInputText
            v-model="name_first"
            :name="'name'"
            :id="'name_first'"
            :placeholder="'First name'"
          ></BaseInputText>
        </BaseColumn>
        <BaseColumn :id="'name_last_column'">
          <BaseInputText
            v-model="name_last"
            :name="'name_last'"
            :id="'name_last'"
            :placeholder="'Last name'"
          ></BaseInputText>
        </BaseColumn>
      </BaseRow>
      <BaseInputEmail :name="'usernamename'" v-model="email"></BaseInputEmail>
      <!-- <BaseInputPassword
        :name="'password'"
        v-model="password"
      ></BaseInputPassword>-->
      <BaseButtonSubmit></BaseButtonSubmit>
    </BaseForm>
  </base-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name_first: "",
      name_last: "",
      email: "",
      password: ""
    };
  },
  methods: {
    get() {
      axios
        .get("http://sm.test/a")
        .then(response => {
          console.log(response.data);
        })
        .catch(response => {
          console.log(response.data);
        });
    }
  },
  created() {
    axios
      .get("http://sm.test/a")
      .then(response => {
        console.log(response.data);
      })
      .catch(response => {
        console.log(response.data);
      });
  }
};
</script>

<style scoped>
#body {
  padding-left: 0.5em;
  padding-right: 0.5em;
  margin: 0;
}
#name_first_column {
  padding-right: 0.5em;
}
#name_last_column {
  padding-left: 0.5em;
}
</style>
