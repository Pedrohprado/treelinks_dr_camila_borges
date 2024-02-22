import { Instagram, Linkedin, Phone, MessageCircleMore } from 'lucide-react';

const Main = () => {
  const number = import.meta.env.PHONE_NUMBER;
  const message = import.meta.env.MESSAGE_DATA;
  return (
    <main className=' w-full h-1/2 mt-24 flex flex-col items-center sm:mt-28'>
      <h1 className=' text-2xl'>Camila Borges</h1>

      <ul className=' mt-10 grid grid-cols-2 gap-10'>
        <li className=' h-20 w-20 bg-[#0C2D57] rounded'>
          <a
            href={`https://web.whatsapp.com/send?phone=${number}&text=${message}&app_absent=0`}
            className=' w-full h-full text-[#FC6736] flex items-center justify-center'
          >
            <MessageCircleMore />
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
