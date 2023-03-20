import Link from "next/link";
import EventItem from "./event-item";
import classes from "./componentsStyles/event-list.module.css";
const EventList = (props) => {
  const { items } = props;

 
  return (
    <ul className={classes.list}>
      {items.map((item, index) => {
        return <EventItem item={item} index={index} />;
      })}
    </ul>
  );
};

export default EventList;
