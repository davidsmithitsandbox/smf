<template>
  <base-card
    :id="'body'"
    v-bind:header="'Create Your ' + this.appName + ' Account'"
  >
    <BaseForm action="#" @submit.prevent="register">
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
      <BaseInputPassword
        :name="'password'"
        v-model="password"
      ></BaseInputPassword>
      <BaseButtonSubmit></BaseButtonSubmit>
    </BaseForm>
  </base-card>
</template>

<script>
import Axios from "axios";
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
    login() {
      console.log("hi");
      this.$store.dispatch("retrieveToken", {
        username: this.email,
        password: this.password
      });
    },
    register(context, data) {
      console.log("hi");
      return new Promise((resolve, reject) => {
        Axios.post("http://192.168.10.30/api/register", {
          name: data.name,
          email: data.email,
          password: data.password
        })
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
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
