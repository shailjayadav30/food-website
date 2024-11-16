import aboutimage3 from "../../images/aboutimage3.png";

const Aboutpage3 = () => {
  return (
    <div className="max-w-[69.63rem] w-full mx-auto flex flex-col md:flex-row gap-10 items-center p-8">
      {/* Owner Image Section */}
      <img
        src={aboutimage3}
        alt="Owner"
        className="w-full md:w-1/2 h-96 object-contain rounded-lg shadow-lg"
      />

      {/* Text Section */}
      <div className="flex flex-col gap-5 w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-[2.5rem] md:text-[3.25rem] font-bold text-[#311f09] leading-tight">
          <span className="text-[#f54748]">Owner</span> &amp; <span>Executive Chef</span>
        </h2>
        <p className="text-2xl text-[#5c4529] font-semibold">Ismail Marzuki</p>
        <p className="text-lg text-[#5c4529] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis, urna id tincidunt luctus, lorem ipsum sodales velit, a venenatis nisi erat et urna. Nulla facilisi.
        </p>
      </div>
    </div>
  );
};

export default Aboutpage3;
