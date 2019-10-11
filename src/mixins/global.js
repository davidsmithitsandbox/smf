export default {
  data() {
    return {
      brandName: "Hover"
    };
  },
  created() {
    const title = getTitle(this);

    if (title) {
      document.title = this.brandName + " | " + title;
    }
  }
};

function getTitle(vm) {
  const { title } = vm.$options;
  if (title) {
    return typeof title === "function" ? title.call(vm) : title;
  }
}
