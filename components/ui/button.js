import Link from "next/link";
import classes from "../componentsStyles/button.module.css";
const Button = (props) => {
    console.log("props",props)
  return <Link href={props.link} className={classes.btn}>{props.children}</Link>; 
};

export default Button;
