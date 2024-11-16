import Aboutimage2 from "../../images/aboutimage2.png";
const Aboutpage2 = () => {
    return (
      <div className="bg-[#f9f9f9] h-screen flex flex-col items-center justify-center p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full max-w-[69.63rem] ">
          
          <p className="text-xl text-[#5c4529] w-full leading-10 md:w-1/2  text-center md:text-left p-4">
            Sed ut perspiciatis unde omnis iste natus <br /> error sit voluptatem accusantium <br />doloremque laudantium, totam rem <br /> aperiam, eaque ipsa quae ab illo inventore <br /> veritatis et quasi architecto beatae vitae <br /> dicta sunt explicabo. Nemo enim ipsam <br /> voluptatem quia voluptas sit aspernatur aut <br />
             odit aut fugit.
          </p>
  
          <div className="bg-[#d0ccc719] w-[25rem] h-[25rem] rounded-full  flex items-center justify-center overflow-hidden">
            <img
              src={Aboutimage2}
              alt="Secondary Image"
              className="w-[20rem] h-[20rem] rounded-full object-cover"
            />
          </div>         
        </div>
      </div>
    );
  };
  
  export default Aboutpage2;
  