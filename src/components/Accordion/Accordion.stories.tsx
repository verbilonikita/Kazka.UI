import type { Meta, StoryObj } from "@storybook/react";
// provider
import AccordionProvider from "../../providers/AccordionProvider/AccordionProvider";
// components
import Accordion from "./Accordion";
import AccordionBody from "./AccordionBody/AccordionBody";
import AccordionHeader from "./AccordionHeader/AccordionHeader";
import Text from "../Typography/Text/Text";
// dto
import { IAccordionProps } from "./Accordion.types";

const meta = {
  title: "Basic/Accordion",
  component: Accordion,
  args: {
    size: "lg",
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const AccordionFC: React.FC<IAccordionProps> = (args) => {
  return (
    <AccordionProvider variant="border" size="sm" allowMultiple>
      <Accordion {...args}>
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
      <Accordion {...args}>
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
      <Accordion {...args}>
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
    </AccordionProvider>
  );
};

export const AccordionUI: Story = {
  render: (args: Partial<IAccordionProps>) => <AccordionFC {...args} />,
};
