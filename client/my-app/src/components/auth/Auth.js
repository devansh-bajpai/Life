import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";

import { useState } from "react";

export default function Auth() {
  const [page, setPage] = useState(0);
  // assigning 0 for signin and 1 for signup

  return (
    <div className="bg-sky-500 w-full h-150 flex justify-center items-center">
      <div className="bg-sky-400 w-120 h-100 rounded-md flex flex-col items-center">
        {page === 0 && <Signin setPage={setPage}/>}
        {page === 1 && <Signup setPage={setPage}/>}
      </div>
    </div>
  );
}
