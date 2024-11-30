import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="main_style pt-12">
      <h2 className="title pb-5">
        Get to Know Me
        <hr className="line"></hr>
      </h2>
      <div className="flex flex-col md:flex-row  ml-36">
        <div className="w-full md:w-1/2">
          <h2 className="mini_title pt-6">Let's Chat</h2>
          <h2 className="mini_title">And Build something together</h2>
          <Link href={""} className="border rounded-md shadow-xl">
            Download Resume
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <form>
            <div className="flex flex-col">
              <label className="text-[16px] roboto pb-2">Full Name*</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="inputFeild"
              />
            </div>
            <div className="flex flex-col py-3">
              <label>Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="inputFeild"
              />
            </div>
            <div className="flex flex-col">
              <label>Message*</label>
              <textarea
                type="text"
                name="message"
                rows="4"
                placeholder=""
                className="inputFeild"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
