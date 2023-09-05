import HamburgerIcon from "../components/LandingPage/Navbar/HamburgerIcon";

export default function CompanyLogo() {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-activity-heartbeat" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5" />
        </svg>
        <h1 className="font-extrabold ml-2 text-black">WeCare</h1>
        <div className="ml-2">
          <HamburgerIcon/>
        </div>
      </div>
    </>

  )
}
