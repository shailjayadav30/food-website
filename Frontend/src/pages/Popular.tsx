import leaf from "../images/leaf.png";
import secondimage from "../images/secondimage.png";

const Popular = () => {
  return (
    <section className="bg-[#e7f7ed]  flex justify-center h-screen">
      <div className=" md:px-[1.25rem]  gap-28 mx-auto flex w-full items-start ">
        
        {/* Image Section */}
        <div className=" relative flex-1 self-center w-[60%] md:w-[50%] md:flex-none md:self-stretch">
          <div className="bottom-0 absolute left-0 right-0 m-auto flex flex-1 flex-col items-center">
            <div className="flex items-center self-stretch sm:flex-col">
              <img
                className="z-[1] w-[22%] h-[10.88rem] relative self-end object-contain sm:w-full sm:self-auto"
                src={leaf}
                alt="Leaf decoration"
                loading="lazy"
              />
              <img
                className="ml-[-10rem] w-[70%] h-[70%] relative object-contain sm:ml-0"
                src={secondimage}
                alt="Main dish"
                loading="lazy"
              />
            </div>
            <img
              className="mt-[-4.63rem] w-[16%] h-[7.25rem] relative object-contain"
              src={leaf}
              alt="Small leaf decoration"
              loading="lazy"
            />
          </div>
          <img
            className="top-0 right-0 w-[22%] h-[9.88rem] absolute m-auto object-contain"
            src={leaf}
            alt="Large leaf decoration"
            loading="lazy"
          />
        </div>
        
        {/* Text Section */}
        <div className="gap-[2.13rem] mt-[14rem] w-[50%] flex flex-col items-start md:w-[50%]">
          <div className="gap-[1rem] flex flex-col self-stretch">
            <h2 className="sm:text-[2.38rem] md:text-[2.75rem] leading-[110%] text-[3.25rem] font-['Open_Sans'] text-[#f54748] w-[80%] font-bold md:w-full">
              <span className="leading-[4.38rem] text-[#301e08]">
                Our Most <br />
                Popular&nbsp;
              </span>
              <span className="text-[#f54748]">Dish.</span>
            </h2>
            <p className="leading-[200%] text-[1.25rem] text-[#5c4529] font-normal">
              This dish is full of flavor and nutrition! Quinoa  is a <br /> complete
              protein, providing all the  essential amino <br /> acids your body needs,
              and  is also a good source of fiber.
            </p>
          </div>
          <button 
            type="button"
            className="rounded-[16px] min-w-[14.5rem] sm:px-[1.25rem] px-[2.13rem] font-semibold flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap h-[4.63rem] text-[1.25rem] bg-[#f54748] text-[#ffffff]"
          >
            Order now
          </button>
        </div>

      </div>
    </section>
  );
};

export default Popular;