import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <section className="main_style pt-12">
      <h2 className="title pb-2 md:pb-5">
        Get to Know Me
        <hr className="line"></hr>
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mt-3 md:mt-16  ml-0 md:ml-12 lg:ml-36">
          <h2 className="mini_title mb-2">Let's Chat</h2>
          <h2 className="mini_title mb-8">And Build something together</h2>
          <Link
            href={""}
            className="border px-6 py-3 rounded-full shadow-xl bg-secondaryViolet text-white"
          >
            Download Resume
          </Link>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
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
              <label className="text-[16px] roboto pb-2">Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="inputFeild"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] roboto pb-2">Message*</label>
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
