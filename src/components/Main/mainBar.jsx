import { assets } from "../../assets/assets";

const MainBar = () => {
  return (
    <div className="main flex-1 h-full ">
      {/* NAVBAR */}
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-1.5 text-xl text-[#585858]">
          <p>Gemini</p>
          <img src={assets.down} className="w-3  h-3" alt="" />
        </div>
        <img
          src={assets.user_icon}
          className="w-10 rounded-full"
          alt="user_icon"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className=" max-w-[900px] mx-auto">
        <div className="text-[56px] my-6 p-5 font-medium text-[#c4c7c5]">
          <p>
            {" "}
            <span className=" bg-clip-text	text-transparent bg-gradient-to-r from-[#4b90ff] to-[#ff5546] 	">
              Hello, DHANIYEL
            </span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="grid grid-cols-4 max-sm:grid-cols-2 p-5 gap-5 text-lg text-[#585858] mb-12">
          <div className="h-[200px] bg-[#f0f4f9] p-4 rounded-lg shadow-sm cursor-pointer relative  hover:bg-[#dfe4ea]">
            <p>Evaluate and rank common camera categories</p>
            <img
              src={assets.bulb_icon}
              className="w-8 absolute right-3 bottom-3 rounded-full bg-white p-1"
              alt=""
            />
          </div>
          <div className="h-[200px] bg-[#f0f4f9] p-4 rounded-lg shadow-sm cursor-pointer relative hover:bg-[#dfe4ea]">
            <p>Brainstorm presentation ideas about a topic</p>
            <img
              src={assets.compass_icon}
              className="w-8 absolute right-3 bottom-3 rounded-full bg-white p-1"
              alt=""
            />
          </div>
          <div className="h-[200px] bg-[#f0f4f9] p-4 rounded-lg shadow-sm cursor-pointer relative hover:bg-[#dfe4ea]">
            <p>Come up with a product name for a new app</p>
            <img
              src={assets.message_icon}
              className="w-8 absolute right-3 bottom-3 rounded-full bg-white p-1"
              alt=""
            />
          </div>
          <div className="h-[200px] bg-[#f0f4f9] p-4 rounded-lg shadow-sm cursor-pointer relative hover:bg-[#dfe4ea]">
            <p>Come up with a complex word riddle, including hints</p>
            <img
              src={assets.code_icon}
              className="w-8 absolute right-3 bottom-3 rounded-full bg-white p-1"
              alt=""
            />
          </div>
        </div>

        {/* SEARCH BOX */}

        <div className="m-auto absolute bottom-0 max-w-[900px] w-full mt-12">
          <div className="flex items-center justify-between gap-5 px-3 py-4 bg-[#f0f4f9] rounded-full">
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="border-none outline-none bg-transparent px-3 flex-auto text-lg"
            />
            <div className="flex gap-3  items-center">
              <img
                src={assets.gallery_icon}
                className="cursor-pointer w-6"
                alt=""
              />
              <img
                src={assets.mic_icon}
                className="cursor-pointer w-6"
                alt=""
              />
              <img
                src={assets.send_icon}
                className="cursor-pointer w-6"
                alt=""
              />
            </div>
          </div>
          <p className="mx-auto my-2 text-center text-[12px] font-light">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. <u className="cursor-pointer">Your privacy & Gemini Apps</u>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBar;
