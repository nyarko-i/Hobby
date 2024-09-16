import { FaGlobe } from "react-icons/fa";
export default function Header() {
  return (
    <div className="shadow-md p-4 sticky top-0 bg-white z-50">
      <nav>
        <ul className="flex justify-between items-center">
          <li className="ml-auto font-bold size-6 text-xl">HOBBIES</li>
          <li className="mx-auto flex">
            <a
              href="https://isaacnyarko.netlify.app/"
              className="text-blue-700 hover:text-blue-500 text-xl flex gap-2 items-center"
              target="_blank"
            >
              <FaGlobe />
              Visit Website
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
