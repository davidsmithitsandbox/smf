export const mixinInputEmail = {
  inheritAttrs: false,
  props: {
    label: {
      default: "",
      type: String
    },
    placeholder: {
      default: "Email",
      type: String
    },
    id: {
      default: "email",
      type: String
    }
  }
};
