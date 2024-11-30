import React from "react";
import rasm from "../../assets/18.png"

function Desktop2() {
    return (
        <>
            <div class="sm:px-6 lg:px-8 flex md:flex-row flex-col justify-center md:pt-0 md:text-opacity-0 items-center md:justify-evenly w-full h-[60vh] mt-52">
                <div class="relative xl:hidden flex items-end  ">
                    <img className="w-[531px] h-[531px]" src="https://s3-alpha-sig.figma.com/img/e509/f62d/d8da0e72ccc47f8e3c0cd9c94f9d8c4e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FemiyYTGfn~S~lhKmk5LivDeg-cEvlq4GRiRvYEvDOA2l9Naw~QCGMs5ypT8HmhrydDNgh5oKhhXsz7I3tsF3JH6bHhpR7veT~12MjG3spqKMsplswMRc9rcLGEjLGcW0gqwt1QVNI7MEPErrBlTXcJMYpz6RsBkZnRe2WXCRhODKmdbvxrv69gvmAfKBMwkksHW1VrlctSZ9t-gNgJq7fZaDkrbFtZ0lxPS8LePjoL8MCRjYQJcGISIaKOEXHwXykSaxvgZrX08EqhtDAk98BFpt6o2vIJ8zJqIXlggzBLNnMhKsuy-9FKwHN22G4GFuBls34NJfoHu5xe4udE3jQ__" alt="" />
                </div>
                <div class="relative xl:flex hidden items-end  ">
                    <img className="w-[531px] h-[531px]" src={rasm} alt="" />
                </div>
                <div class="px-4 flex flex-col md:items-start gap-4 md:text-left text-center ">
                    <h1 class="text-4xl md:text-4xl ">
                        <span class="bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] bg-clip-text text-transparent">
                            AI Marketing
                        </span>
                        <br />
                        <span class="text-gray-100">Optimized Reach</span>
                    </h1>
                    <p class="my-6 font-thin text-gray-200 cursor-vertical-text text-2xl max-w-2xl mx-auto">
                        It's all about getting your message in front of the right{" "}
                        <br className="hidden lg:block" />audience and creating those valuable {" "}
                        <span class="text-[#0075FF]">relationships.</span>
                        <br className="hidden lg:block" /> Learn More about how DOML can help you do just
                        <br className="hidden lg:block" /> that - all with a simple, easy-to-use platform.
                    </p>
                    <div className="h-[1px] w-full bg-gradient-to-r from-purple-500 to-blue-500" />
                    <button class="mt-8 flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-[1px] px-[1px] rounded-full transition-all duration-300">
                        <div className="text-xl justify-center flex items-center gap-3 font-thin w-full h-full py-2 px-7 bg-black rounded-full">
                        <p>Learn More</p>
                            <p class="text-4xl bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 bg-clip-text text-transparent">
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Desktop2;