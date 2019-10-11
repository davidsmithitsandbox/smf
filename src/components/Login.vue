<template>
  <base-card :id="'body'">
    <BaseCardHeader>
      <p class="text-center">
        {{ "Login to " + this.brandName }} |
        <a href="/register" role="button">Create an Account</a>
      </p>
    </BaseCardHeader>
    <BaseCardBody id="body">
      <BaseForm action="#" @submit.prevent="get">
        <BaseInputEmail :name="'usernamename'" v-model="email"></BaseInputEmail>
        <BaseInputPassword
          :name="'password'"
          v-model="password"
        ></BaseInputPassword>
        <BaseButtonSubmit></BaseButtonSubmit>
      </BaseForm>
    </BaseCardBody>
  </base-card>
</template>

<script>
export default {};
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
