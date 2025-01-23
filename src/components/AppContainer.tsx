import BottomBar from "./BottomBar";
import Header from "./Header";
import Input from "./Input";
import ListBox from "./ListBox";

const AppContainer = () => {
  return (
    <section className="z-10 flex flex-col gap-5 max-h-max md:w-[500px]">
      <Header />
      <Input />
      <ListBox />
      <BottomBar />
    </section>
  );
};

export default AppContainer;
