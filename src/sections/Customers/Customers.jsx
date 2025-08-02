const Customers = () => {
  return (
    <section>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 h-270 max-w-screen-xl m-auto xl:px-20 xl:py-20">
        <div
          className="col-span-2 row-span-1 bg-[url('https://www.kartavya.io/images/home/customerStories/customer_bg_img.jpg')]
       h-[100%] bg-cover rounded-3xl"
        >
          <div className="text-white p-8 h-[100%] flex flex-col items-start justify-between">
            <div>
              <p className="uppercase text-zinc-400 font-semibold">
                Customer stories
              </p>
            </div>
            <div>
              <p className="text-2xl">
                “Kartavya’s expertise transformed my vision into success!”
              </p>
              <p>Nidhi Mendiratta</p>
              <p className="text-zinc-400 font-semibold">
                Founder of Campbells.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-1 bg-[#F6E683] rounded-3xl ">
          <div className="text-white p-8 h-[100%] flex flex-col items-start justify-between">
            <div>
              <p className="uppercase text-zinc-600">Facts & numbers</p>
            </div>
            <div>
              <p className="text-black font-semibold text-8xl">91%</p>
              <p className="text-2xl text-black font-semibold">
                Clients recommend our design services.”
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 row-span-1 bg-[#1B1D1E] rounded-3xl ">
          <div className="text-white p-8 h-[100%] flex flex-col items-start justify-between">
            <div>
              <p className="uppercase text-zinc-400 font-semibold">
                Customer stories
              </p>
              <p className="text-2xl">
                Their creativity and attention to detail transformed our brand
                completely!
              </p>
            </div>  
            <div>
              <img
                src="https://www.kartavya.io/images/home/customerStories/creativity_img.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-1 bg-[#F3F3F4] rounded-3xl">
          <div className="text-white p-8 h-[100%] flex flex-col items-start justify-between">
            <div>
              <p className="uppercase text-zinc-600 font-semibold">
                Customer stories
              </p>
              <p className="text-5xl font-semibold text-black">
                Kartavya brought our ideas to life with exceptional creativity
                and precision, exceeding expectations.”
              </p>
            </div>
            <div>
              <p className="text-black">Anushka Sharma</p>
              <p className="text-zinc-600">Founder of DB Corp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
