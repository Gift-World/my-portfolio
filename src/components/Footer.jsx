import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-[#000b16] py-4 px-20 text-center">
  <div className="flex justify-between items-center">
    <a href="#" className="text-white text-2xl font-bold">Charles A.</a>
    <p className="text-gray-400">&copy; Charles Gift, 2024 All Rights Reserved</p>
    <ul className="flex space-x-4">
      <li className="flex justify-center items-center w-12 h-12 rounded-full border border-[#1aeeef] hover:bg-[#1aeeef] transition duration-500">
        <a href="#"><FaGithub size={20} /></a>
      </li>
      <li className="flex justify-center items-center w-12 h-12 rounded-full border border-[#1aeeef] hover:bg-[#1aeeef] transition duration-500">
        <a href="#"><FaFacebook size={20}/></a>
      </li>
      <li className="flex justify-center items-center w-12 h-12 rounded-full border border-[#1aeeef] hover:bg-[#1aeeef] transition duration-500">
        <a href="#"><FaInstagram size={20}/></a>
      </li>
      <li className="flex justify-center items-center w-12 h-12 rounded-full border border-[#1aeeef] hover:bg-[#1aeeef] transition duration-500">
        <a href="#"><i className="bx bxl-tiktok text-white text-xl"></i></a>
      </li>
    </ul>
    <div>
      <img
        src="https://t3.ftcdn.net/jpg/03/54/12/40/360_F_354124027_Tsgobgsh832Sg3dh40E2iio0AlYxZ8is.jpg"
        alt="Gamers Hub Logo"
        className="w-12 h-12"
      />
    </div>
  </div>
</footer>

  );
}