import { assets } from "../../assets/assets"

const MainBar = () => {
  return (
    <div className="main flex-1 h-full ">

      {/* NAVBAR */}
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-1.5 text-xl text-[#585858]">
        <p>Gemini</p>
      <img src={assets.down} className="w-3  h-3" alt="" />
        </div>
        <img src={assets.user_icon} className="w-10 rounded-full" alt="user_icon" />
      </div>


      {/* MAIN CONTENT */}
      <div className=" max-w-[900px] mx-auto ">
        <div className="text-[56px] my-12 p-5 font-medium text-[#c4c7c5]">
          <p> <span className=" bg-clip-text	text-transparent bg-gradient-to-r from-[#4b90ff] to-[#ff5546] 	">Hello, DHANIYEL</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="card">
          <p>Evaluate and rank common camera categories</p>
          <img src={assets.bulb_icon} alt="" />
        </div>
        <div className="card">
          <p>Brainstorm presentation ideas about a topic</p>
          <img src={assets.compass_icon} alt="" />
        </div>
        <div className="card">
          <p>Come up with a product name for a new app</p>
          <img src={assets.message_icon} alt="" />
        </div>
        <div className="card">
          <p>Come up with a complex word riddle, including hints</p>
          <img src={assets.code_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default MainBar
