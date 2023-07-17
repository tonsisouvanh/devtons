import { useContext } from "react";
// import { HashLoader } from "react-spinners";
import { ThemeContext } from "../context/ThemeContext";

const Spinner = ({ size, Loader, loaderStyle, loaderColor }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`sweet-loading  ${loaderStyle}`}>
      <Loader
        color={
          loaderColor ? loaderColor : theme === "dark" ? "#64FFDA" : "#00B0FF"
        }
        loading
        size={size}
      />
    </div>
  );
};

export default Spinner;
