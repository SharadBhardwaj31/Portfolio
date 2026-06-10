import React from "react";

const Education = () => {
  return (
    <section id="education" className="py-20 ">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-zinc-900">
            <span className="text-teal-800">Edu</span> 
            <span>cation</span>
          </h2>
          <p className="text-xl text-zinc-900 mt-4">
            My academic journey and qualifications.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-zinc-900">
              Bachelor of Computer Applications
            </h3>

            <p className="text-teal-800 font-medium text-xl mt-2">
              MJP Rohilkhand University Bareilly
            </p>

            <p className="text-zinc-500 mt-2">
              2022 - 2025
            </p>

            <p className="text-zinc-600 mt-4">
              Focused on Web Development, JavaScript, React.js,
              and modern frontend technologies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold text-zinc-900">
              Higher Secondary Education
            </h3>

            <p className="text-teal-800 font-medium text-xl mt-2">
              Parker Public Sr. Sec. School Budhanpur, Bijnor
            </p>

            <p className="text-zinc-500 mt-2">
              2020 - 2022
            </p>

            <p className="text-zinc-600 mt-4">
              Completed higher secondary education with a
              strong foundation in science and computer basics.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;