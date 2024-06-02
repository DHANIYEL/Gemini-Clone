import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import "../../App.css";

const MainBar = () => {
  const {
    onSent,
    recentPrompt,
    showReslut,
    loading,
    resultData,
    input,
    setInput,
    newChat,
  } = useContext(Context);

  return (
    <div className="main flex-1 h-full ">
      {/* NAVBAR */}
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-1.5 text-xl text-[#585858]">
          <p onClick={() => newChat()} className="cursor-pointer">
            Gemini
          </p>
          {/* <img src={assets.down} className="w-3  h-3" alt="" /> */}
        </div>
        <img src={assets.spider} className="w-10 rounded-full" alt="spider" />
      </div>

      {/* MAIN CONTENT */}

      <div className=" max-w-[900px] mx-auto">
        {!showReslut ? (
          <>
            <div className="text-[56px] max-sm:text-4xl my-6 p-5 font-medium text-[#c4c7c5]">
              <p>
                <span className=" bg-clip-text	text-transparent bg-gradient-to-r from-[#4b90ff] to-[#ff5546] max-sm:text-5xl">
                  Hello, DHANIYEL
                </span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="grid grid-cols-4 max-sm:grid-cols-2  p-5 gap-5 text-lg text-[#585858] mb-12 ">
              <div
                className="h-[200px] bg-[#f0f4f9] p-4 rounded-lg shadow-sm cursor-pointer relative  hover:bg-[#dfe4ea]"
                onClick={() =>
                  onSent(
                    "NATO wraps up its largest exercise since the Cold War"
                  )
                }
              >
                <p>NATO wraps up its largest exercise since the Cold War</p>
                <img
                  src={assets.bulb_icon}
                  className="w-8 absolute right-3 bottom-3 rounded-full bg-white p-1"
                  alt=""
                />
              </div>

              <div className="h-[200px] bg-[#f0f4f9] p-4 rounded-lg shadow-sm cursor-pointer relative hover:bg-[#dfe4ea]">
                <p
                  onClick={() =>
                    onSent("real madrid or barcelona who has more trophies")
                  }
                >
                  real madrid or barcelona who has more trophies
                </p>
                <img
                  src={assets.message_icon}
                  className="w-8 absolute right-3 bottom-3 rounded-full bg-white p-1"
                  alt=""
                />
              </div>
              <div className="h-[200px] bg-[#f0f4f9] p-4 rounded-lg shadow-sm cursor-pointer relative hover:bg-[#dfe4ea]">
                <p
                  onClick={() => onSent("why one piece is the best anime ..?")}
                >
                  why one piece is the best anime ..?
                </p>
                <img
                  src={assets.compass_icon}
                  className="w-8 absolute right-3 bottom-3 rounded-full bg-white p-1"
                  alt=""
                />
              </div>
              <div className="h-[200px] bg-[#f0f4f9] p-4 rounded-lg shadow-sm cursor-pointer relative hover:bg-[#dfe4ea]">
                <p onClick={() => onSent("PS5 exclusives coming to pc")}>
                  PS5 exclusives coming to pc
                </p>
                <img
                  src={assets.code_icon}
                  className="w-8 absolute right-3 bottom-3 rounded-full bg-white p-1"
                  alt=""
                />
              </div>
            </div>
          </>
        ) : (
          // THE RESULT DIV

          <div className="result overflow-y-scroll h-[70vh] px-[10%] ">
            <div className="flex items-center gap-3 my-7">
              <img src={assets.spider} alt="" className="w-10 rounded-full" />
              <p className="font-semibold">{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-3">
              <img
                src={assets.gemini_icon}
                alt=""
                className="w-10 rounded-full"
              />
              {loading ? (
                <div className="flex flex-col gap-2 w-full bg-[#f6f7f8] gradient">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="text-lg font-light"
                ></p>
              )}
              {/* <div className="h-20 w-full bg-gradient-to-t from-gray-300 to-white sticky"></div> */}
            </div>
          </div>
        )}

        {/* SEARCH BOX */}

        <div className="m-auto fixed bottom-0 max-w-[900px] w-full mt-12 max-md:flex-none max-md:max-w-md">
          <div className="flex items-center justify-between gap-5 px-3 py-4 bg-[#dfe4ea] rounded-full">
            <input
              name="userInput"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              className="border-none outline-none bg-transparent px-3 flex-auto text-lg max-md:py-1 max-md:px-2"
            />
            <div className="flex gap-3 max-sm:gap-1  items-center">
              <img
                src={assets.gallery_icon}
                className="cursor-pointer w-6 max-md:w-5"
                alt=""
              />
              <img
                src={assets.mic_icon}
                className="cursor-pointer w-6 max-md:w-5"
                alt=""
              />
              {input ? (
                <>
                  <img
                    onClick={() => onSent()}
                    src={assets.send_icon}
                    className="cursor-pointer w-6 max-md:w-5"
                    alt=""
                    name=""
                  />
                </>
              ) : null}
            </div>
          </div>
          <p className="mx-auto my-2 text-center text-[12px] font-light">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.{" "}
            <u className="cursor-pointer">
              {" "}
              <a href="https://support.google.com/gemini/answer/13594961?visit_id=638527756948490289-1974958993&p=privacy_notice&rd=1#privacy_notice">
                Your privacy & Gemini Apps{" "}
              </a>{" "}
            </u>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBar;
