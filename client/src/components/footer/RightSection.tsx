import { footer } from "@/settings/footer";
import List from "./List";

const RightSection = () => {
  return (
    <div className="w-3/5 lg:flex justify-between  ">
      <div className="flex gap-10 w-full justify-between">
        <List item={footer.company} />
        <List item={footer.services} />
        <List item={footer.other} />
      </div>
      <div className="w-2/5">

      </div>
    </div>
  );
};

export default RightSection;
