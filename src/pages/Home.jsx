import { useEffect, useState } from "react";
import { axiosEcommerce } from "../utils/configAxios";
import ProductCard from "../components/layout/ProductCard";
import { Link } from "react-router-dom";

const slliderPosition = {
  0: "-ml-[0%]",
  1: "-ml-[100%]",
  2: "-ml-[200%]",
};

const Home = () => {
  const [allProducts, setAllProducts] = useState();
  const [position, setPosition] = useState(0);

  const stoves = allProducts?.filter(
    (product) => product.category.name === "Stoves"
  );
  console.log(stoves);
  useEffect(() => {
    axiosEcommerce
      .get("products")
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClickPrev = () => {
    const newPosition = position - 1;
    newPosition < 0 ? setPosition(2) : setPosition(newPosition);
  };

  const handleClickNext = () => {
    const newPosition = position + 1;
    newPosition > 2 ? setPosition(0) : setPosition(newPosition);
  };

  return (
    <section className="w-full pt-[115px] sm:pt-[70px] mt-[50px]">
      <section className="w-full max-w-[1200px] mx-auto min-h-screen p-3">
        <article className="flex flex-col bg-gray-100 rounded-2xl p-5">
          <div className="w-full grid-rows-[60%,_40%] sm:grid-cols-[60%,_40%] sm:grid-rows-1 h-[50vh] relative grid">
            <div className="h-full relative z-10 grid justify-center items-center">
              <h1 className="text-3xl uppercase font-semibold sm:text-4xl md:text-[50px] text-red-600">
                SAMSUNG GALAXY BOOK PRO
              </h1>
            </div>
            <div className="h-full w-full absolute row-start-2 sm:row-start-1  sm:col-start-2 bottom-[25%] sm:right-[15%] sm:bottom-0">
              <img
                className="h-full sm:w-full object-contain z-0 m-auto"
                src="/home/mainproduct2.png"
                alt=""
              />
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-4 sm:grid-rows-1  gap-[2px] bg-gray-300">
            <div className="w-full bg-gray-100 h-full p-3 text-center flex flex-col justify-center items-center">
              <div>5G</div>
              <div>5G</div>
            </div>
            <div className="w-full bg-gray-100 h-full p-3 text-center flex flex-col justify-center items-center">
              <div>
                {" "}
                <img
                  className="w-[50px] m-auto"
                  src="/home/mainproduct/img.svg"
                  alt=""
                />
              </div>
              <span>2-in-1 Convertible Design</span>
            </div>
            <div className="w-full bg-gray-100 h-full p-3 text-center flex flex-col justify-center items-center">
              <div>
                {" "}
                <img
                  className="w-[50px] m-auto"
                  src="/home/mainproduct/img2.svg"
                  alt=""
                />
              </div>
              <span>Stunning Display</span>
            </div>
            <div className="w-full bg-gray-100 h-full p-3 text-center flex flex-col justify-center items-center">
              <div>
                {" "}
                <img
                  className="w-[50px] m-auto"
                  src="/home/mainproduct/img3.svg"
                  alt=""
                />
              </div>
              <span>S-Pen</span>
            </div>
          </div>
        </article>
        <div className="w-full flex justify-center items-center my-[100px]">
          <img src="/home/industry.png" alt="" />
        </div>
      </section>

      <article className="flex flex-col gap-3 p-3">
        <h3 className="text-4xl uppercase tracking-[4px] my-[1rem] font-medium text-center text-red-500">
          The most popular products
        </h3>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {allProducts?.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </article>

      <Link to="/products" className="flex justify-center">
        <h3 className="my-[25px] p-3 aspect-[5/2] w-[150px] text-white bg-gray-950 flex justify-center items-center shadow-md shadow-black/50 hover:tracking-wider hover:bg-gray-100 hover:text-gray-800">
          VIEW ALL
        </h3>
      </Link>

      <section className="w-full aspect-[3/5] sm:aspect-[5/2] relative overflow-hidden my-[120px]">
        <div
          className={`w-[300%] h-full flex absolute ${slliderPosition[position]} transition-all duration-500`}
        >
          <div className="w-[calc(100%/3)] h-full relative">
            <img
              domwload="lazy"
              className="w-full h-full  object-cover object-bottom sm:invisible"
              src="/home/slider/tv1movil.jpg"
              alt=""
            />
            <img
              domwload="lazy"
              className="w-full h-full  object-cover object-right invisible sm:visible absolute bottom-0"
              src="/home/slider/tv1.jpg"
              alt=""
            />
            <span className="text-[6vw] w-[80%] absolute left-[10%] top-[20%] sm:text-[4vw]  sm:w-[40%] sm:top-[50%] sm:translate-y-[-50%] text-white">
              Take your gaming experience to the next level
            </span>
          </div>
          <div className="w-[calc(100%/3)] h-full relative">
            <img
              domwload="lazy"
              className="w-full h-full  object-cover object-bottom sm:invisible"
              src="/home/slider/tv3movil.jpg"
              alt=""
            />
            <img
              domwload="lazy"
              className="w-full h-full  object-cover invisible sm:visible absolute top-0 object-right"
              src="/home/slider/tv3.jpg"
              alt=""
            />
          </div>
          <div className="w-[calc(100%/3)] h-full relative">
            <img
              domwload="lazy"
              className="w-full h-full  object-cover sm:invisible"
              src="/home/slider/tv2movil.jpg"
              alt=""
            />
            <img
              domwload="lazy"
              className="w-full h-full  object-cover invisible sm:visible absolute top-0 object-left"
              src="/home/slider/tv2.jpeg"
              alt=""
            />
          </div>
        </div>
        <button
          onClick={handleClickPrev}
          className="absolute top-[50%] translate-y-[-50%] left-1 aspect-square w-[40px] text-4xl text-red-600"
        >
          <i className="bx bxs-left-arrow"></i>
        </button>
        <button
          onClick={handleClickNext}
          className="absolute top-[50%] translate-y-[-50%] right-1 aspect-square w-[40px] text-4xl text-red-600"
        >
          <i className="bx bxs-right-arrow"></i>
        </button>
      </section>
      <h3 className="text-3xl text-red-500 px-8 my-[40px] tracking-[4px]">
        PCs & LAPTOPS
      </h3>

      <section className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] sm:grid-cols-2 gap-5 pb-[50px] p-3">
        <article className="w-full border-[2px] border-gray-400 p-5 flex flex-col gap-5">
          <div className="flex-grow p-3">
            <img
              src="/home/products/pc.png"
              className="h-full object-contain m-auto"
              alt=""
            />
          </div>
          <Link
            to="/products"
            className="text-2xl self-end h-[70px] w-[200px] flex justify-center items-center border-[2px] border-gray-400 hover:bg-black hover:text-white"
          >
            Shop Now
            <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </article>
        <div className="w-full h-full relative border-[2px] border-black min-h-[400px]">
          <img
            className="w-full h-full object-cover"
            src="/home/products/laptop2.jpg"
            alt=""
          />
          <Link
            to="/products/4"
            className="text-2xl h-[70px] w-[200px] flex justify-center items-center border-[2px] border-gray-400 absolute bottom-5 right-5 text-white hover:bg-white hover:text-black"
          >
            Shop Now
            <i className="bx bx-right-arrow-alt"></i>
          </Link>
        </div>
      </section>

      <section className="flex flex-col p-3 gap-10">
        <h3 className="self-start px-5 text-3xl text-red-500 tracking-[4px]">
          STOVES
        </h3>
        <div className="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] sm:grid-cols-3">
          {stoves?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link to="/products" className="flex justify-center">
          <h3 className="my-[25px] p-3 aspect-[5/2] w-[150px] text-white bg-gray-950 flex justify-center items-center shadow-md shadow-black/50 hover:tracking-wider hover:bg-gray-100 hover:text-gray-800">
            VIEW ALL
          </h3>
        </Link>
      </section>
      <section className="my-[150px]">
        <h3 className="text-4xl text-center mb-10">
          The best way to buy is with us
        </h3>
        <div className="w-full grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 max-w-[1200px] gap-5 mx-auto justify-center items-center p-3">
          <div className="grid justify-center items-center grid-cols-2 sm:grid-cols-1 gap-3">
            <img
              domwload="lazy"
              className="mx-auto h-[60px] sm:h-auto"
              src="/home/utils/Shipping.png"
              alt=""
            />
            <div>
              <h4 className="text-center font-medium text-xl">Free Shipping</h4>
              <span className="text-gray-600 flex justify-center">
                Free, fast delivery straight to your door.
              </span>
            </div>
          </div>
          <div className="grid justify-center items-center grid-cols-2 sm:grid-cols-1 gap-3">
            <i className="bx bx-credit-card text-5xl sm:text-9xl flex justify-center"></i>
            <div>
              <h4 className="text-center font-medium text-xl">
                Buy Now, Pay Later
              </h4>
              <span className="text-gray-600 flex justify-center">
                Choose from 4 interest-free installments or 12-36 month
              </span>
            </div>
          </div>
          <div className="grid justify-center items-center grid-cols-2 sm:grid-cols-1 gap-3">
            <img
              domwload="lazy"
              className="mx-auto h-[60px] sm:w-[128px] sm:h-[136px]"
              src="/home/utils/scheduling.png"
              alt=""
            />
            <div>
              <h4 className="text-center font-medium text-xl">
                Dynamic Scheduling
              </h4>
              <span className="text-gray-600 flex justify-center">
                Schedule your appliance delivery appointments during checkout.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="my-[150px]">
        <h4 className="text-3xl text-center mb-10">Service and Support</h4>
        <div className="w-full grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-1 max-w-[1200px] gap-5 mx-auto justify-center items-center p-3">
          <div className="grid justify-center items-center grid-cols-2 sm:grid-cols-1 gap-3">
            <i className="bx bx-message-rounded-dots text-5xl sm:text-7xl flex justify-center"></i>
            <div>
              <h4 className="text-center font-medium text-xl">Online Chat</h4>
              <span className="text-gray-600 flex justify-center">
                Chat available 24/7
              </span>
            </div>
          </div>
          <div className="grid justify-center items-center grid-cols-2 sm:grid-cols-1 gap-3">
            <i className="bx bx-envelope text-5xl sm:text-7xl flex justify-center"></i>
            <div>
              <h4 className="text-center font-medium text-xl">Email</h4>
              <span className="text-gray-600 flex justify-center">
                Send an email if you need support
              </span>
            </div>
          </div>
          <div className="grid justify-center items-center grid-cols-2 sm:grid-cols-1 gap-3">
            <i className="bx bxl-instagram text-5xl sm:text-7xl flex justify-center"></i>
            <div>
              <h4 className="text-center font-medium text-xl">Instagram</h4>
              <span className="text-gray-600 flex justify-center">
                Follow us
              </span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export default Home;
