import React from "react";
import Link from "next/link";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar  flex backdrop-blur lg:backdrop-blur-none  justify-between items-center px-14 py-3 sticky top-0 ">
      <p className="text-white text-4xl ">Avishek</p>
      <ul className="nav-links hidden  md:flex gap-5 px-5 py-2 rounded-full border border-white/30 backdrop-blur-xl bg-black/30">
        <li className="flex items-center gap-2 px-7 py-2 transition-all duration-300 rounded-full hover:bg-slate-100 group">
          <svg
            className="w-7  group-hover:fill-black"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 495.398 495.398"
          >
            <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391-15.669,0-28.377,12.709-28.377,28.391v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747c5.567,5.551,12.825,8.312,20.081,8.312 7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/>
            <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"/>
          </svg>
          <Link className="text-white text-xl group-hover:text-black" href="/">Home</Link>
        </li>
        <li className="flex items-center gap-2 px-5 py-2 transition-all duration-300 rounded-full hover:bg-slate-100 group">
          <svg
            className="w-7 group-hover:stroke-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#ffffff"
            viewBox="0 0 24 24"
          >
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" y1="19" x2="20" y2="19"></line>
          </svg>
          <Link className="text-white text-xl group-hover:text-black" href="/">Projects</Link>
        </li>
        <li className="flex items-center gap-2 px-5 py-2 transition-all duration-300 rounded-full hover:bg-slate-100 group">
          <svg
            className="w-7 group-hover:stroke-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#ffffff"
            viewBox="0 0 24 24"
          >
            <circle className=" group-hover:stroke-black" cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5"></circle>
            <path className=" group-hover:stroke-black" d="M12 17V11" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
            <circle cx="12" cy="9" r="1" fill="#ffffff"></circle>
          </svg>
          <Link className="text-white text-xl group-hover:text-black" href="/">About</Link>
        </li>
      </ul>


     
      <Link href="/">
        <svg
          className="w-14 border border-white/30 rounded-full p-3"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <path
            d="M31.75,6.479c6.7339,3.8881,10.3177,11.5721,8.969,19.23-1.3496,7.6616-7.3484,13.6604-15.01,15.01-7.6579,1.3487-15.3419-2.2351-19.23-8.969"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.02,6.75c4.1858,7.2511,2.98,16.4095-2.94,22.33-5.9205,5.92-15.0789,7.1258-22.33,2.94"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M10,8v4" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8,10h4" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12,18v3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.5,19.5h3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30.5,14v3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29,15.5h3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M38.5,5.5v3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M37,7h3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.5,41h3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9,39.5v3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M39.5,36h3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M41,34.5l.02,3" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </nav>
  );
};

export default Navbar;
