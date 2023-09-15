import { type } from "os";

type SVGImage = React.SVGProps<SVGSVGElement>;

export type Item = {
  text: string;
  log: SVGImage;
};

export type Block = {
  id: number;
  title: string;
  item1: Item;
  item2: Item;
  item3: Item;
  item4: Item;
  item5: Item;
};

export type BlockInfo = {
  id: number;
  title: string;
  log: string;
  text: string;
};
