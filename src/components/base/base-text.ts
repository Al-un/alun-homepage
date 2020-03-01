import Vue from "vue";
import { CreateElement, RenderContext, VNode } from "vue/types";
import { TranslatedExpression, TranslatedParagraphs } from "@/models";
import { translate } from "@/utils";

interface Props {
  /**
   * A content can be a single or an array of paragraphs with or without
   * translation
   */
  content: string | string[] | TranslatedExpression | TranslatedParagraphs;
}

/**
 * A BaseText renders a single or multiple paragraphs. In case of multiple
 * paragraphs, they are rendered consecutively WITHOUT a parent tag element,
 * in React's fragment-style.
 *
 * The `al-text-paragraph` CSS class then handles the first and last element
 * assuming there is no parent specially for wrapping this paragraph or
 * group of paragraphs
 */
const baseText = Vue.extend<Props>({
  name: "BaseText",
  functional: true,

  props: {
    content: { type: [String, Array, Object], required: true }
  },

  render: function(
    this: undefined,
    createElement: CreateElement,
    { props }: RenderContext<Props>
  ): VNode | VNode[] {
    const createTextElement = (text: string) => {
      return createElement("div", { class: "al-text-paragraph" }, text);
    };

    const content = translate(props.content);

    return Array.isArray(content)
      ? content.map(createTextElement)
      : createTextElement(content);
  }
});

export default baseText;
