import Vue from "vue";
import { CreateElement, RenderContext, VNode } from "vue/types";

interface Props {
  /**
   * Image mandatory source
   * @type {String}
   * @required
   */
  src: string;
  /**
   * Image optional alt. Default value is provided
   * @type {String}
   * @default "Img"
   */
  alt: string;
  /**
   * If true, image fills parent container with `object-fit: cover`
   * @type {Boolean}
   * @default false
   */
  isCover: boolean;
}

export default Vue.extend<Props>({
  name: "BaseImage",
  functional: true,

  props: {
    src: { type: String, required: true },
    alt: { type: String, default: "Img" },
    isCover: { type: Boolean, default: false }
  },

  render: function(
    this: undefined,
    createElement: CreateElement,
    { props, children }: RenderContext<Props>
  ): VNode {
    // Image source
    // TODO: how to with `require...`?
    // const imgSrc = props.src.startsWith("@/")
    //   ? require.context(props.src)
    //   : props.src;
    const imgSrc = props.src;

    // CSS classes
    let cssClasses = ["al-image"];
    if (props.isCover) cssClasses = [...cssClasses, "is-cover"];

    return createElement(
      "img",
      {
        attrs: {
          src: imgSrc,
          alt: props.alt
        },
        class: cssClasses.join(" ")
      },
      children
    );
  }
});
