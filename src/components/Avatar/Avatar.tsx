import noAvatar from "../../../assets/no-avatar.png";
// styles
import "./Avatar.scss";

interface IAvatar {
  className?: string;
  src: string;
}

const Avatar: React.FC<IAvatar> = ({ className }) => {
  return <img src={noAvatar} className={`kazka-avatar ${className} `} />;
};

export default Avatar;
