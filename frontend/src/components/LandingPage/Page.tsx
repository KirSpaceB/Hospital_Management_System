import CallToAction from "../../shared/CallToAction";
import ComapnyLogo from "../../shared/ComapnyLogo";

export default function LandingPage() {
  return (
    <div>
      <nav className="flex flex-row space-x-20 justify-center items-center">

        <div className="mt-10">
          <ComapnyLogo/>
        </div>
        <div className="mt-10 text-black">
          Solution
        </div>
        <div className="mt-10 text-black">
          Who we serve
        </div>
        <div className="mt-10 text-black">
          Resources
        </div>
        <div className="mt-10 text-black">
          Company
        </div>
        <div className="mt-10 text-black">
          Pricing
        </div>
        <div className="mt-10 text-black">
          <CallToAction/>
        </div>
      </nav>
    </div>
  )
}
