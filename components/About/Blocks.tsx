import { Block } from "@/types/blocks";

export const List = ({ item }) => {
  const { text, log } = item;

  return (
    <p className="mb-5 flex items-baseline text-base font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {log}
      </span>
      {text}
    </p>
  );
};

function Blocks({ block }: { block: Block }) {
  const { title, item1, item2, item3, item4, item5 } = block;
  return (
    <div className=" rounded-3xl h-auto p-5 shadow-signUp bg-white dark:bg-[#1D2144]">
      <div>
      <h3 className="text-xl font-bold text-black dark:text-white truncate">{title}</h3>
      </div>
      <div className="py-9 space-y-2">
        <List item={item1} />
        <List item={item2} />
        <List item={item3} />
        <List item={item4} />
        <List item={item5} />
      </div>
    </div>
  );
}

export default Blocks;
