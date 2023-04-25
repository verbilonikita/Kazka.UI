import useClass from "../../hooks/useClass";
// dto
import IAvatar from "./Avatar.types";
// styles
import styles from "./Avatar.module.scss";

const Avatar: React.FC<IAvatar> = ({ className, src, ...rest }) => {
  return (
    <img
      src={
        src ??
        "https://avtovelomoto.by/upload/Sh/imageCache/138/625/6258991984917302.jpg.webp"
      }
      className={styles["avatar"]}
      {...rest}
    />
  );
};

export default Avatar;
