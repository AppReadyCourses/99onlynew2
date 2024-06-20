import React from "react";
import Footer from "../components/Footer";

import Link from "next/link";

import { FaYoutube, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const ContactsDetail = () => {
  return (
    <div className="text-center min-h-screen p-4">
      <h1 className="font-bold text-lg">Our Contacts</h1>
      <br />
      <Link href="https://www.instagram.com/99only.fullstack/" className="link">
        {" "}
        <span className="font-bold">Instagram</span>:
      </Link>
      
      <div className="divider"></div> 
      <Link href="https://99only-fullstack.com" className="link">
        {" "}
        <span className="font-bold">Website</span>
      </Link>
      <div className="divider"></div> 
      <Link href="https://www.youtube.com/@appready" className="link">
        {" "}
        <span className="font-bold">Youtube</span>
      </Link>
      <div className="divider"></div> 
      <Link href="https://www.facebook.com/profile.php?id=61558742771196" className="link">
        {" "}
        <span className="font-bold">Facebook</span>
      </Link>
      <div className="divider"></div> 
      <Link href="#" className="link">
        {" "}
        <span className="font-bold">Email</span>
        appreadycourses@gmail.com
      </Link>
      <div className=" sticky top-[100vh]">
        <Footer />
      </div>
    </div>
  );
};

export default ContactsDetail;
