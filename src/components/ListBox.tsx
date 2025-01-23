import ListItem from "./ListItem";

const ListBox = () => {
  return (
    <ul className="flex flex-col-reverse w-full gap-1">
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </ul>
  );
};

export default ListBox;
