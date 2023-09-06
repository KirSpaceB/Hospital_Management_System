import LandingPage from "./components/LandingPage/Page";
import TestGet from "./API/post_create_staff";
function App() {
  TestGet();
  return (
    <div>
      <div className="w-screen h-screen bg-white">
        <LandingPage/>
      </div>
    </div>
  )
}

export default App;