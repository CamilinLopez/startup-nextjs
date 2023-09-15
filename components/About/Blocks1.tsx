import { BlockInfo } from "@/types/blocks";
import Image from "next/image";


export default function Blocks1({block}:{block:BlockInfo}) {
    const {log,text,title} = block

  return (
    <div className="w-full md:w-1/2 py-3" >
      <Image className="bg-primary rounded-xl bg-opacity-25" src={log}  alt="logo" width={35} height={35} />
      <h3 className="py-6 text-xl font-bold text-black dark:text-white" >{title}</h3>
      <p className="text-base font-medium leading-relaxed text-body-color" >{text}</p>
    </div>
  )
}
