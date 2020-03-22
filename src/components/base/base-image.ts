import Vue from "vue";
import { CreateElement, RenderContext, VNode } from "vue/types";

interface Props {
  /**
   * Image mandatory source
   */
  src: string;
}

const baseImage = Vue.extend<Props>({
  name: "BaseImage",
  functional: true,

  props: {
    src: { type: String, required: true }
  },

  render: function(
    this: undefined,
    createElement: CreateElement,
    { props, children, data }: RenderContext<Props>
  ): VNode {
    // Image source
    // TODO: how to with `require...`?
    // const imgSrc = props.src.startsWith("@/")
    //   ? require.context(props.src)
    //   : props.src;
    const imgSrc = props.src;

    // Default alt value
    const alt = data.attrs ? data.attrs["alt"] || "image" : "image";

    return createElement(
      "img",
      {
        attrs: {
          src: imgSrc,
          alt: alt,
          ...data.attrs
        },
        staticClass: data.staticClass,
        staticStyle: data.staticStyle,
        class: ["al-image"]
      },
      children
    );
  }
});

export default baseImage;
