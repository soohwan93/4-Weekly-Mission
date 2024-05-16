import type { Preview } from "@storybook/react";
import "../app/globals.css";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: "blue", value: "blue" },
        { name: "red", value: "red" },
        { name: "white", value: "white" },
        { name: "dark", value: "black" },
      ],
    },
  },
};

export default preview;
