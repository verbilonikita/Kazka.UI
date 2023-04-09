import "./Divider.scss";

interface IDivider {
  type?: "h" | "v";
}

const Divider: React.FC<IDivider> = ({ type = "h" }) => {
  return <div className={`kazka-divider kazka-divider-${type}`}></div>;
};

export default Divider;
