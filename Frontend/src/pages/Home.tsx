import Popular from "./Popular";
import noodles from "../images/noodles.svg"
import Menu from "./Menu";
import { useNavigate } from "react-router";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
const Home = () => {
  const [loggedinuser,setloggedinuser]=useState("")
  const navigate =useNavigate()
  useEffect(()=>{
  const user= localStorage.getItem("loggedinuser")||"Guest"
  setloggedinuser(user)
  },[])
  return (
    <div>
      <div className="bg-gradient-to-r from-[#FBAB7E] to-[#F7CE68] h-screen flex   pt-[4rem] justify-center">
      <div className=" py-10">
        <h1 className="text-7xl font-bold text-white">Best Restaurant <br /> in <span className="text-[#f54748]">Town. {loggedinuser}</span></h1>

        <p className=" leading-[200%] text-[1.25rem] text-[#5c4429] w-[80%] font-normal md:w-full undefined">We provide best food in town, we provide <br /> home delivery and dine in services.</p>
       
        <div className="flex gap-[1.5rem]">

          <button className="rounded-[16px] min-w-[14.50rem] sm:px-[1.25rem] px-[2.13rem] font-semibold flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap h-[4.63rem]  text-[1.25rem] bg-[#f54748] text-[#ffffff]" onClick={()=>navigate("/order")}>Order now</button>
          <button className=" min-w-[14.50rem] sm:px-[1.25rem] px-[2.13rem] font-semibold flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[16px] h-[4.63rem]  text-[1.25rem] bg-[#f5474819] text-[#f54748]" onClick={()=>navigate("/reservation")}>Reservation</button>
        </div>
      </div>
      <div>
        <img src={noodles} alt="" />
      </div>
      <ToastContainer/>
    </div>
    <Popular/>
    <Menu/>
    <Footer/>
    </div>
  );
};

export default Home;
