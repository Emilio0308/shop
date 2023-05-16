import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-600 pt-[60px] ">
      <section className="w-full max-w-[1200px] grid grid-rows-[1fr,_50px,_30px] p-3 mx-auto gap-6">
        <article className="w-full h-full grid grid-rows-3 gap-6 sm:grid-cols-3 sm:grid-rows-1 justify-items-center">
          <div>
            <h4 className="text-xl font-medium">Links</h4>
            <ul className="grid">
              <Link to="/" className="w-[100px] hover:underline">
                Home
              </Link>
              <Link to="/products" className=" w-[100px] hover:underline">
                Products
              </Link>
              <Link to="/login" className="w-[100px] hover:underline">
                Login
              </Link>
              <Link to="/purchases" className="w-[100px] hover:underline">
                Purchases
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-medium">Info</h4>
            <ul>
              <li className="cursor-pointer hover:underline">Privacy Policy</li>
              <li className="cursor-pointer hover:underline">Returns</li>
              <li className="cursor-pointer hover:underline">Promotions</li>
              <li className="cursor-pointer hover:underline">Orders Tracking</li>
            </ul>
          </div>
          <div className="w-[100px]">
            <h4 className="text-xl font-medium">E-comerce</h4>
          </div>
        </article>
        <div className="flex justify-center items-center gap-5">
          <div className="h-[1px] flex-grow bg-gray-400"></div>
          <ul className="flex text-4xl gap-4">
            <li><i className='cursor-pointer hover:text-blue-600 transition-colors bx bxl-facebook-circle'></i></li>
            <li><i className='cursor-pointer hover:text-orange-600 transition-colors bx bxl-instagram-alt' ></i></li>
            <li><i className='cursor-pointer hover:text-sky-400 transition-colors bx bxl-twitter' ></i></li>
            <li><i className='cursor-pointer hover:text-red-600 transition-colors bx bxl-gmail' ></i></li>
          </ul>
          <div className="h-[1px] flex-grow bg-gray-400"></div>
        </div>
        <div className="text-center">© Developed by @EmilioRivas</div>
      </section>
    </footer>
  );
};
export default Footer;
