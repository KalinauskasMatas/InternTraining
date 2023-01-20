import "./Header.css";
import { Title } from "../../interfaces";

const Header = (props: Title) => {
  return <header className="header-name">{props.title}</header>;
};

export default Header;
