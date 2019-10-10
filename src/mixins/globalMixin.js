export default {
  data() {
    return {
      appName: "SM"
    };
  },
  created() {
    const title = getTitle(this);

    if (title) {
      document.title = this.appName + " | " + title;
    }
  }
};

function getTitle(vm) {
  const { title } = vm.$options;
  if (title) {
    return typeof title === "function" ? title.call(vm) : title;
  }
}
