import React from "react";

function Comments() {
  return (
    <div>
      <div className="lg:mt-[3.18rem] mt-[2.19rem]">
        <div id="fb-root"></div>
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v20.0&appId=1463024787898104"
          nonce="Rs6MAKE9"
        ></script>
        <div className=" mx-auto flex justify-center items-center lg:px-0 px-4">
          <div className=" rounded-[1.25rem] flex justify-center py-[50px]">
            <div
              className="fb-comments w-full flex justify-center flex-important px-[14px]"
              data-href="https://vendatodosantodia.com.br/cursodigital/vtsd/l10/blog/"
              data-width=""
              data-lazy="true"
              data-colorscheme="light"
              data-numposts="10"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
