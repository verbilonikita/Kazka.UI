import type { Meta, StoryObj } from "@storybook/react";
// styled
import styled from "styled-components";
// provider
import AccordionProvider from "../../providers/AccordionProvider/AccordionProvider";
// components
import Accordion from "./Accordion";
import AccordionBody from "./AccordionBody/AccordionBody";
import AccordionHeader from "./AccordionHeader/AccordionHeader";
import Text from "../Typography/Text/Text";
// types
import { IAccordionProviderProps } from "../../providers/AccordionProvider/AccordionProvider.types";
// styles
import styles from "./Accordion.module.scss";

const meta = {
  title: "Basic/Accordion",
  component: AccordionProvider,
  args: {
    size: "lg",
    allowMultiple: true,
    variant: "shadow",
  },
} satisfies Meta<typeof AccordionProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const AccordionFC: React.FC<IAccordionProviderProps> = (args) => {
  return (
    <AccordionProvider {...args} variant="border" size="sm">
      <Accordion>
        <AccordionHeader fontWeight="800">Blublu</AccordionHeader>
        <AccordionBody>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            illum id eius vitae, neque incidunt aliquid pariatur dicta enim hic,
            est veritatis natus quis? Officiis rem eos sed voluptates ex! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illum id
            eius vitae, neque incidunt aliquid pariatur dicta enim hic, est
            veritatis natus quis? Officiis rem eos sed voluptates ex! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illum id
            eius vitae, neque incidunt aliquid pariatur dicta enim hic, est
            veritatis natus quis? Officiis rem eos sed voluptates ex! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illum id
            eius vitae, neque incidunt aliquid pariatur dicta enim hic, est
            veritatis natus quis? Officiis rem eos sed voluptates ex! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illum id
            eius vitae, neque incidunt aliquid pariatur dicta enim hic, est
            veritatis natus quis? Officiis rem eos sed voluptates ex! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illum id
            eius vitae, neque incidunt aliquid pariatur dicta enim hic, est
            veritatis natus quis? Officiis rem eos sed voluptates ex!
          </Text>
        </AccordionBody>
      </Accordion>
      <Accordion>
        <AccordionHeader fontWeight="400">Blublu</AccordionHeader>
        <AccordionBody>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            illum id eius vitae, neque incidunt aliquid pariatur dicta enim hic,
            est veritatis natus quis? Officiis rem eos sed voluptates ex! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illum id
            eius vitae, neque incidunt aliquid pariatur dicta enim hic, est
            veritatis natus quis? Officiis rem eos sed voluptates ex! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illum id
            eius vitae, neque incidunt aliquid pariatur dicta enim hic, est
            veritatis natus quis? Officiis rem eos sed voluptates ex! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illum id
            eius vitae, neque incidunt aliquid pariatur dicta enim hic, est
            veritatis natus quis? Officiis rem eos sed voluptates ex! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illum id
            eius vitae, neque incidunt aliquid pariatur dicta enim hic, est
            veritatis natus quis? Officiis rem eos sed voluptates ex! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illum id
            eius vitae, neque incidunt aliquid pariatur dicta enim hic, est
            veritatis natus quis? Officiis rem eos sed voluptates ex!
          </Text>
        </AccordionBody>
      </Accordion>
      <Accordion>
        <AccordionHeader fontWeight="400">Blublu</AccordionHeader>
        <AccordionBody>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            illum id eius vitae, neque incidunt aliquid pariatur dicta enim hic,
            est veritatis natus quis? Officiis rem eos sed voluptates ex! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illum id
            eius vitae, neque incidunt aliquid pariatur dicta enim hic, est
            veritatis natus quis? Officiis rem eos sed voluptates ex! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illum id
            eius vitae, neque incidunt aliquid pariatur dicta enim hic, est
            veritatis natus quis? Officiis rem eos sed voluptates ex! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illum id
            eius vitae, neque incidunt aliquid pariatur dicta enim hic, est
            veritatis natus quis? Officiis rem eos sed voluptates ex! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illum id
            eius vitae, neque incidunt aliquid pariatur dicta enim hic, est
            veritatis natus quis? Officiis rem eos sed voluptates ex! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Ducimus illum id
            eius vitae, neque incidunt aliquid pariatur dicta enim hic, est
            veritatis natus quis? Officiis rem eos sed voluptates ex!
          </Text>
        </AccordionBody>
      </Accordion>
      {/* <Bubu className={`${styles["checkHover_b"]}`}>blabla</Bubu> */}
      <Text fontWeight="800" fontSize="1rem">
        blabla
      </Text>
    </AccordionProvider>
  );
};

export const AccordionUI: Story = {
  render: (args: Partial<IAccordionProviderProps>) => <AccordionFC {...args} />,
};
