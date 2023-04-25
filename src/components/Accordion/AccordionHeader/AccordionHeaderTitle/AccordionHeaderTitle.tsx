import React from "react";
// components
import Text from "../../../Typography/Text/Text";
// types
import { EnumKazkaSizes } from "../../../../types/Common.types";

interface IAccordionHeaderTitle {
  textSize: keyof typeof EnumKazkaSizes;
  ellipsis?: boolean;
  text: string;
  fontWeight?: string | number;
}

const AccordionHeaderTitle: React.FC<IAccordionHeaderTitle> = ({
  textSize,
  ellipsis,
  text,
  fontWeight = "400",
}) => {
  return (
    <Text size={textSize} ellipsis={ellipsis} fontWeight={fontWeight}>
      {text}
    </Text>
  );
};

export default React.memo(AccordionHeaderTitle);
