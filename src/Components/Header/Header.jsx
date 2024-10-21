// import React from "react";
// import "./Header.css";

// const Header = () => {
//   return (
//     <>
//       <div className="header">
//         <div className="header-contents">
//           <h2>Lorem ipsum dolor sit amet</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
//             nemo sunt ipsam, iste soluta accusamus optio illo dolores magni
//             eius?
//           </p>
//           <button>View menu</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import React from "react";

const Header = () => {
  return (
    <>
      <div className="relative h-[30vw] bg-cover bg-no-repeat bg-center rounded-[50px]" style={{ backgroundImage: `url('/public/Images/Mobile banner.jpg')` }}>
        <div className="absolute flex flex-col items-center gap-[1.5vw] max-w-[50%] bottom-[15%] right-[2vw] animate-fadeIn">
          <h2 className="font-medium text-whitesmoke text-[max(4.5vw,22px)] text-shadow-[1px_0_10px_black]">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-wheat text-[1vw] text-shadow-[1px_0_10px_black]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            nemo sunt ipsam, iste soluta accusamus optio illo dolores magni
            eius?
          </p>
          <button className="border-none text-black font-medium bg-white text-[15px] py-[7px] px-[15px] rounded-full cursor-pointer">
            View menu
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
