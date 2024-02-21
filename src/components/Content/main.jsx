import { Instagram, Linkedin, Phone } from 'lucide-react';
const Main = () => {
  return (
    <main className=' w-full h-1/2 mt-24 flex flex-col items-center sm:mt-28'>
      <h1 className=' text-2xl'>Camila Borges</h1>

      <ul className=' mt-10 grid grid-cols-2 gap-10'>
        <li className=' h-20 w-20 bg-[#0C2D57] rounded'>
          <a
            href=''
            className=' w-full h-full text-[#FC6736] flex items-center justify-center'
          >
            w
          </a>
        </li>
        <li className=' h-20 w-20 bg-[#0C2D57] rounded'>
          <a
            href=''
            className=' w-full h-full text-[#FC6736] flex items-center justify-center'
          >
            <Phone />
          </a>
        </li>
        <li className=' h-20 w-20 bg-[#0C2D57] rounded'>
          <a
            href=''
            className=' w-full h-full text-[#FC6736] flex items-center justify-center'
          >
            <Instagram />
          </a>
        </li>
        <li className=' h-20 w-20 bg-[#0C2D57] rounded'>
          <a
            href=''
            className=' w-full h-full text-[#FC6736] flex items-center justify-center'
          >
            <Linkedin />
          </a>
        </li>
      </ul>
    </main>
  );
};

export default Main;
