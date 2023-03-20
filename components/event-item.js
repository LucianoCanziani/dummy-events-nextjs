import classes from "./componentsStyles/event-item.module.css";
import Button from "./ui/button.js";
import AddressIcon from "../public/icons/address-icon";
import DateIcon from "../public/icons/date-icon";
import ArrowRightIcon from "../public/icons/arrow-right-icon";
const EventItem = (props) => {
  const { title, image, date, location, id } = props.item;

  console.log("props", props);

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  return (
    <li key={props.index} className={classes.item}>
      <img src={"/" + image} alt={image} />

      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <Button link={"/events/" + id}>
          <span>Explore Event</span>
          <span className={classes.icon}>
            <ArrowRightIcon />
          </span>
        </Button>
      </div>
    </li>
  );
};

export default EventItem;
