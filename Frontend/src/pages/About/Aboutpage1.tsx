import aboutimage1 from "../../images/aboutimage.png";

const Aboutpage1 = () => {
  return (
    <div className="bg-[#f9f9f9] flex flex-col items-center gap-12 sm:gap-10 md:gap-16 w-full py-20 h-screen">
      <div className="flex flex-col items-center gap-16">
        <div className="max-w-[69.63rem] w-full mx-auto flex flex-col gap-16">
          
          {/* Featured Image and Text Side by Side */}
          <div className="flex gap-5 items-center justify-between flex-col md:flex-row">
            <div className="bg-[#d0ccc719] p-8 rounded-full w-full md:w-1/2 flex items-center justify-center">
              <img
                src={aboutimage1}
                alt="Featured Image"
                className="w-[22rem] h-[22rem] rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-5 w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-[3.25rem] font-bold text-[#f54748] leading-tight">
                <span className="text-[#301e08]">About Our </span><span>Restaurant</span>
              </h1>
              <p className="text-lg text-[#5c4529] leading-relaxed">
              This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.
              </p>
              <button className="bg-[#f54748] text-white font-semibold py-2 px-5  h-[3rem] w-[10rem] rounded-md text-lg">
                Order now
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Aboutpage1;



  




// {/* Owner Section */}
//