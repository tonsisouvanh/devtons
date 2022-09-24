import { useContext } from "react";
import { HashLoader } from "react-spinners";
import { ThemeContext } from '../context/ThemeContext';

const Spinner = ({size}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="sweet-loading">
      <HashLoader
        color={theme === 'dark' ? '#64FFDA' : '#00B0FF'} loading size={size} />
    </div>
  )
}

export default Spinner