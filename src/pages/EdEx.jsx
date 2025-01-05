import React from "react";
import bg2 from "../assets/bg2.jpg";

const EdEx = () => {
  return (
    <div className="w-10/12 ">
      <div>
        <h1 className="text-5xl text-slate-400">Education & Experience</h1>
      </div>
      <div>
        <div className="hero bg-black opacity-70 min-h-screen rounded-xl mt-4">
          <div className="flex flex-col lg:flex-row-reverse">
            <img src={bg2} className="max-w-sm object-cover rounded-lg shadow-2xl" />
            <div>
              <div className="px-4">
                <h1 className="text-5xl font-bold text-slate-500 mt-10">Exprience</h1>
                <h1 className="text-3xl font-bold text-slate-500 mt-10">SuperTel Ltd</h1>
                <h3 className="text-xl font-semibold text-slate-500">Business Development Intern</h3>
                <p className="py-6 text-slate-400 text-xl ">
                  Supertel Ltd is a BPO company.As an intern I assisted BDM with SEO which in turn increased the market for the company.the company benefitted from the outsourcing platform -Upwork-Fiver- in generating leads and contracts.
                </p>
                <h1 className="text-3xl font-bold text-slate-500 mt-10">Freelancing</h1>
                <h3 className="text-xl font-semibold text-slate-500">Virtual Assistant</h3>
                <p className="py-6 text-slate-400 text-xl ">
                  I have worked on upwork -Level 1- for a year completing contracts with the objective of generating leads.
                </p>
              </div>
              <div className="px-4 text-slate-500">
                <h1 className="text-5xl font-bold  mt-5">
                  Education
                </h1>
                <h3 className="text-2xl mt-2">
                  American International University Bangladesh-(2018-2023)
                </h3>
                <h3 className="text-xl mt-2">Govt. Azizul Haque College Bogura-(2015-2016)</h3>
                <h3 className="text-xl mt-2">Bogura Zilla School-(2005-2014)</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdEx;
