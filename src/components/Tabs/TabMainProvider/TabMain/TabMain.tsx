interface ITabMain {
  children: React.ReactElement | string;
}

const TabMain: React.FC<ITabMain> = ({ children }) => {
  return <>{children}</>;
};

export default TabMain;
