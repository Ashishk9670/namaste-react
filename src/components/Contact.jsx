import React from "react";

const Contact = () => {
   return (
   <div className="contact">
        <h1 className="font-bold text-xl p-4 m-4"> Contact Us</h1>
        {/* <h2 > Please reach out to us through mail.</h2> */}
        <form action="">
         <input type="text" placeholder="name" className="border-black p-2 m-2" />
         <input type="text" placeholder="Message" className="border-black p-2 m-2" />
         <button className="border-black bg-slate-600 rounded-lg p-2 m-2"> Submit</button>
        </form>
    </div>
   );
};

export default Contact;