import CallToAction from "../../shared/CallToAction";
import { textForLandingPage } from "./LP_texts";
import gloves from '../../public/gloves.jpg'
import LP_Navbar from "./Navbar/LP_Navbar";

export default function LandingPage() {
  return (
    <div>
      <nav className="flex flex-row space-x-20 justify-center items-center">
        <LP_Navbar/>
      </nav>

      <hr className="bg-black h-[1px] mt-4"></hr>

      <div id="product_pitch" className="w-screen flex flex-row justify-center items-center space-x-28">
        <div className="flex flex-col justify-start items-start space-y-4">
          <h1 className="font-extrabold	text-4xl text-black">Just like your staff were here to help!</h1>
          <p className="text-black text-xl sm:w-[497px]">
            {textForLandingPage.pTagAboveCallToAction}
          </p>
          <div>
            <CallToAction/>
          </div>
        </div>
        <div className="">
          <img src={gloves} className="sm:w-[578px] sm:h-[588px] mt-28"></img>
        </div>
      </div>
    </div>
  )
}
