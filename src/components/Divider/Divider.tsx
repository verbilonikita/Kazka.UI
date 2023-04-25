import "./Divider.scss";
import { IDivider } from "./Divider.types";

const Divider: React.FC<IDivider> = ({ type = "h", ...rest }) => {
  return <div className={`kazka-divider kazka-divider-${type}`} {...rest} />;
};

export default Divider;
