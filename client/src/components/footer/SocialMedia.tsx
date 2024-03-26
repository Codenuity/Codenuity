import {
  FaBehance,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className="lg:bg-neutral-800 rounded-2xl flex items-center justify-between lg:w-fit w-full py-4 md:px-9 px-4">
      <ul className="flex text-neutral-600 w-full justify-center items-center text-2xl md:gap-9 gap-4">
        <li className="cursor-pointer">
          <FaLinkedinIn className="hover:text-blue-400 hover:scale-110 transform ease-in-out duration-300" />
        </li>
        <li className="cursor-pointer">
          <FaGithub className="hover:text-neutral-50 hover:scale-110 transform ease-in-out duration-300" />
        </li>
        <li className="cursor-pointer">
          <FaBehance className="hover:text-blue-600 hover:scale-110 transform ease-in-out duration-300" />
        </li>
        <li className="cursor-pointer">
          <FaInstagram className="hover:text-pink-400 hover:scale-110 transform ease-in-out duration-300" />
        </li>
        <li className="cursor-pointer">
          <FaXTwitter className="hover:text-neutral-50 hover:scale-110 transform ease-in-out duration-300" />
        </li>
        <li className="cursor-pointer">
          <FaFacebookF className="hover:text-blue-500 hover:scale-110 transform ease-in-out duration-300" />
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
