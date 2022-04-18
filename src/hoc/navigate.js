import { useNavigate } from "react-router-dom";

export const Location = (Component) => {
  let LocationComp = (props) => {
    return <Component {...props} navigate={useNavigate()} />;
  };
  return LocationComp;
};
