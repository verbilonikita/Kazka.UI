import HStack from "../../Stack/HStack";
import Text from "../../Typography/Text/Text";
import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
// styles
import styles from "./AccordionHeader.module.scss";

interface IAccordionHeader {
  handleToggle: () => void;
  open: boolean;
  customTitle?: React.ReactElement;
  customButton?: React.ReactElement;
  title?: string;
  size?: string;
}

const AccordionHeader: React.FC<IAccordionHeader> = ({
  handleToggle,
  open,
  title,
  customTitle,
  customButton,
  size,
}) => {
  return (
    <HStack
      className={styles["kazka-accordion_header"]}
      justify="space-between"
      align="center"
      onClick={handleToggle}
    >
      {customTitle || (
        <Text size={size} ellipsis>
          {title}
        </Text>
      )}

      {customButton || (
        <motion.div
          initial={{ rotate: 0 }}
          animate={open ? { rotate: "180deg", y: "-3px" } : { rotate: "0deg" }}
        >
          <Text size={size}>
            <AiOutlineArrowDown width="100%" height="100%" />
          </Text>
        </motion.div>
      )}
    </HStack>
  );
};

export default AccordionHeader;
