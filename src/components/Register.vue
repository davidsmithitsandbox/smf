<template>
  <base-card :id="'body'">
    <BaseCardHeader>
      <p class="text-center">
        {{ "Create Your " + this.brandName + " Account" }}
      </p>
    </BaseCardHeader>
    <BaseCardBody id="body">
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
        <BaseInputPassword
          :name="'password'"
          v-model="password"
        ></BaseInputPassword>
        <BaseButtonSubmit>Let's Go</BaseButtonSubmit>
      </BaseForm>
    </BaseCardBody>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      callback: {},
      name_first: "",
      name_last: "",
      email: "",
      password: ""
    };
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
#body {
  padding-top: 0;
}
</style>
