import React from 'react'

function Footerr() {
  return (
    <div className="h-full w-full mt-32">
        <div className="flex justify-center">
            <div className="h-[1px] w-[80vw] bg-gradient-to-r from-purple-500 to-blue-500 " />
        </div>
        <div className="flex justify-around gap-80">
            <span>Copyright © 2022 DOML. All rights reserved.</span>
            <span>Terms of Use & Privacy Policy</span>
        </div>
    </div>
  )
}

export default Footerr;
