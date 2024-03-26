import Link from "next/link";

type ListProp = {
  item: any;
};

const List = ({ item }: ListProp) => {
  return (
    <div className="text-neutral-400 w-fit flex flex-col gap-5">
      <h1>{item.title}</h1>
      <ul className="h-full flex flex-col list-disc gap-5 ml-5">
        {item?.item?.map((item: any, index: number) => (
          <li
            key={item + index}
          >
            <Link href={item?.href} className="link-with-underline cursor-pointer hover:text-neutral-800 ">
              {item?.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
