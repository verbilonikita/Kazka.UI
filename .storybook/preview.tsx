import React from "react";
import type { Preview } from "@storybook/react";

import KazkaProvider from "../src/providers/KazkaProvider/KazkaProvider";
import KazkaForm from "../src/providers/KazkaForm/KazkaForm";

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <KazkaProvider>
          <Story />
        </KazkaProvider>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    canvasElement: document.getElementById("root"),
  },
};

export default preview;

const observer = new ResizeObserver((entries) => {
  // handle size changes
});

const element = document.getElementById("element-to-observe");
if (element) {
  observer.observe(element);

  const observerParent = element.parentNode;
  const observerCallback = () => {
    observer.disconnect();
  };

  if (observerParent) {
    observerParent.addEventListener("DOMNodeRemoved", observerCallback);
  }
}
