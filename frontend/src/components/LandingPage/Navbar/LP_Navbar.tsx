import CompanyLogo from "../../../shared/CompanyLogo"
import Items from "./Items";

export default function LP_Navbar() {
  return (
    <div>
      <nav className="flex flex-row space-x-20 justify-center items-center">
        <div className="mt-10">
          <CompanyLogo/>
          {/* HamburgerIcon onClick={openSidebar} */}
        </div>
        <Items/>
      </nav>

    </div>
  )
}
