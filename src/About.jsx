import React from "react";
import founder from "./images/Founder.png";
import kiss from "./images/infrastructure.png";
import kiit from "./images/KIIT.png";

function About() {
  return (
    <>
      <div className="md:flex hidden text-white flex-col space-y-20 max-w-screen  items-center justify-center mt-[35px]">
        <div className="flex relative max-w-screen  bg-gray-300/80   rounded-xl bg-grey-500  items-center  h-[1233px] w-[1233px]">
          <div className="h-full mix-blend-multiply">
            <img
              src={founder}
              alt=""
              className="shadow-inner  md:h-full md:w-full h-40 w-40"
            />
          </div>
          <div className="absolute h-[1156px] w-[595px] rounded-md   bg-[rgba(127,127,127,0.45)] backdrop-blur-lg top-10 right-10 p-16 text-justify">
            <h1 className=" font_header">ABOUT FOUNDER</h1>
            <p className=" font_body">
              Prof. Achyuta Samanta is a social worker, philantrophist and
              educationalist. He established the prestigious educational
              institutions known as the Kalinga Institute of Social Sciences
              (KISS) and the Kalinga Institute of Industrial Technology (KIIT).
              With more than 30,000 students from India and 53 other countries,
              KIIT is a prominent institution and one of the most prestigious
              institutes in the world for professional education. 60,000
              indigenous children receive free homes through KISS. Shri.Samanta
              has made important contributions to education, tribal upliftment,
              health care, and rural development in addition to art, culture,
              literature, film, media,society, and national integration. In such
              a short period of time for the society, a youngster who lost his
              father at the age of four and was reared in a gorgeous town in
              Odisha with seven siblings and a widow mother has succeeded in
              this amazing attempt without any assistance or support. He became
              the hero of the locals after transforming the remote village of
              "Kalarabanka" in Cuttack into a Smart Village and the entire
              Manpur Panchayat into a model Panchayat (cluster of villages). He
              has won over 50 international and national honours, over 200 state
              awards, including the two highest civilian honours from the Royal
              Kingdom of Bahrain and Mongolia.He has been awarded 44 honorary
              doctorates, both domestically and abroad. He is the first Odia to
              hold memberships in the Association of Indian Colleges and
              Teachers of Engineering and the University of Georgia. He
              represents Kandhamal, Odisha, in the Lok Sabha and serves as the
              president of the Indian Volleyball Federation.He has pushed the
              "Art of Giving" (concept of life) as a social reformer, an idea
              designed to make the world a happier and more peaceful place.
              Despite his successes, he lives a modest life and works tirelessly
              to eradicate hunger, poverty, and illiteracy while providing
              smiles to millions of people.
            </p>
          </div>
        </div>
        
        <div className="flex relative  rounded-xl bg-[rgba(186,186,186,0.34)]  items-center  h-[1127px] w-[1233px]">

          <img
            src={kiss}
            alt=""
            className="shadow-inner  md:h-full md:w-full object-cover "
          />

          <div className="absolute h-fit w-[595px] rounded-xl   bg-[rgba(127,127,127,0.45)] backdrop-blur-lg top-10 left-10 p-16 text-justify">
            <h1 className="font_header">ABOUT KISS</h1>
            <p className="font_body">
            KISS was designated a Deemed University by the Ministry of Human Resource Development of the Government of India on August 25, 2017 (U/S 3 of the UGC Act, 1956).As a result, it has become India's and the world's first university completely dedicated to tribal students. The Kalinga Institute of Social Sciences (KISS), the world's largest tribal institute, provides food, housing, health care, and all other basic necessities of life to 50,000 poor tribal children (27,500 current students, 12,500 well-placed alumni, and 10,000 students in its various satellite centres) so that they can pursue their education from kindergarten to graduate school, as well as vocational training. Politicians, policymakers, planners, and social workers from India and abroad have lauded KISS as a one-of-a-kind effort to eradicate poverty via education and to utilise education as a weapon to empower the impoverished section of society and provide long-term employment.<br />
              •We have a special consultative status with the Economic and Social Council of the United Nations (ECOSOC), the highest degree of UN accreditation for a non-governmental organization, and Guide star India's champion degree-Platinum Certification for NGO Transparency (2016) since 2015.<br />
              •In the prestigious list of 189 top NGOs worldwide and the top 10 best NGOs in India published in 2019 by NGO Advisor, a Geneva-based independent media organization.<br />
              •Programs and initiatives that are linked to and actively working to achieve the Sustainable Development Goals (SDGs) of the United Nations.<br />
              •Collaborations with a wide range of international organizations, including the US Federal Government, UNESCO, UNICEF, and UNEPA.<br />
              •Visited and lauded by dignitaries from 70 nations, including ambassadors and chiefs of state.<br />
              •15 Nobel Prize winners have resided at the Institute
              <br />
            </p>
          </div>
        </div>{" "}
        <div className="flex  md:flex-row  relative  rounded-md bg-[rgba(186,186,186,0.34)]  items-center  h-[1127px] w-[1233px]">

          <img height={1127}
            src={kiit}
            alt=""
            className="shadow-inner object-cover h-full w-full"
          />

          <div className="absolute md:block  hidden lg:h-[1050px] lg:w-[595px] mg:px-10 md:w-screen rounded-md   bg-[rgba(127,127,127,0.45)] backdrop-blur-lg top-10 right-10 p-16 text-justify">
            <h1 className="font_header">ABOUT KIIT</h1>
            <p className="font_body">
            KISS was designated a Deemed University by the Ministry of Human Resource Development of the Government of India on August 25, 2017 (U/S 3 of the UGC Act, 1956).As a result, it has become India's and the world's first university completely dedicated to tribal students. The Kalinga Institute of Social Sciences (KISS), the world's largest tribal institute, provides food, housing, health care, and all other basic necessities of life to 50,000 poor tribal children (27,500 current students, 12,500 well-placed alumni, and 10,000 students in its various satellite centres) so that they can pursue their education from kindergarten to graduate school, as well as vocational training. Politicians, policymakers, planners, and social workers from India and abroad have lauded KISS as a one-of-a-kind effort to eradicate poverty via education and to utilise education as a weapon to empower the impoverished section of society and provide long-term employment.<br />
              •We have a special consultative status with the Economic and Social Council of the United Nations (ECOSOC), the highest degree of UN accreditation for a non-governmental organization, and Guide star India's champion degree-Platinum Certification for NGO Transparency (2016) since 2015.<br />
              •In the prestigious list of 189 top NGOs worldwide and the top 10 best NGOs in India published in 2019 by NGO Advisor, a Geneva-based independent media organization.<br />
              •Programs and initiatives that are linked to and actively working to achieve the Sustainable Development Goals (SDGs) of the United Nations.<br />
              •Collaborations with a wide range of international organizations, including the US Federal Government, UNESCO, UNICEF, and UNEPA.<br />
              •Visited and lauded by dignitaries from 70 nations, including ambassadors and chiefs of state.<br />
              •15 Nobel Prize winners have resided at the Institute
            </p>
          </div>
        </div>
        <div className="mt-10" />
      </div>
      <div className="  bg-transparent md:hidden p-6 flex flex-wrap mt-8 space-y-20">
        <div className="block rounded-lg bg-white/10  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-te-ripple-init=""
            data-te-ripple-color="light"
          >
            <img
              className="rounded-t-lg sm:bg-slate-800/20  w-full "
              src={founder}
              alt=""
            />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
            </a>
          </div>
          <div className="p-4">
            <h5 className="mb-2 text-xl font-medium leading-tight text-black ">
              ABOUT FOUNDER
            </h5>
            <p className="mb-4 h-40 text-justify overflow-x-scroll text-base text-black ">
              Prof. Achyuta Samanta is a social worker, philantrophist and educationalist. He established the prestigious educational institutions known as the Kalinga Institute of Social Sciences (KISS) and the Kalinga Institute of Industrial Technology (KIIT). With more than 30,000 students from India and 53 other countries, KIIT is a prominent institution and one of the most prestigious institutes in the world for professional education. 60,000 indigenous children receive free homes through KISS. Shri.Samanta has made important contributions to education, tribal upliftment, health care, and rural development in addition to art, culture, literature, film, media,society, and national integration. In such a short period of time for the society, a youngster who lost his father at the age of four and was reared in a gorgeous town in Odisha with seven siblings and a widow mother has succeeded in this amazing attempt without any assistance or support. He became the hero of the locals after transforming the remote village of "Kalarabanka" in Cuttack into a Smart Village and the entire Manpur Panchayat into a model Panchayat (cluster of villages). He has won over 50 international and national honours, over 200 state awards, including the two highest civilian honours from the Royal Kingdom of Bahrain and Mongolia.He has been awarded 44 honorary doctorates, both domestically and abroad. He is the first Odia to hold memberships in the Association of Indian Colleges and Teachers of Engineering and the University of Georgia. He represents Kandhamal, Odisha, in the Lok Sabha and serves as the president of the Indian Volleyball Federation.He has pushed the "Art of Giving" (concept of life) as a social reformer, an idea designed to make the world a happier and more peaceful place. Despite his successes, he lives a modest life and works tirelessly to eradicate hunger, poverty, and illiteracy while providing smiles to millions of people.
            </p>

          </div>
        </div>
        <div className="block rounded-lg bg-white/10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-te-ripple-init=""
            data-te-ripple-color="light"
          >
            <img
              className="rounded-t-lg bg-slate-800/20 "
              src={kiss}
              alt=""
            />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
            </a>
          </div>
          <div className="p-4">
            <h5 className="mb-2 text-xl font-medium leading-tight  text-black ">
              ABOUT KISS
            </h5>
            <p className="mb-4 h-40 text-justify overflow-x-scroll text-base text-black ">
              KISS was designated a Deemed University by the Ministry of Human Resource Development of the Government of India on August 25, 2017 (U/S 3 of the UGC Act, 1956).As a result, it has become India's and the world's first university completely dedicated to tribal students. The Kalinga Institute of Social Sciences (KISS), the world's largest tribal institute, provides food, housing, health care, and all other basic necessities of life to 50,000 poor tribal children (27,500 current students, 12,500 well-placed alumni, and 10,000 students in its various satellite centres) so that they can pursue their education from kindergarten to graduate school, as well as vocational training. Politicians, policymakers, planners, and social workers from India and abroad have lauded KISS as a one-of-a-kind effort to eradicate poverty via education and to utilise education as a weapon to empower the impoverished section of society and provide long-term employment.<br />
              •We have a special consultative status with the Economic and Social Council of the United Nations (ECOSOC), the highest degree of UN accreditation for a non-governmental organization, and Guide star India's champion degree-Platinum Certification for NGO Transparency (2016) since 2015.<br />
              •In the prestigious list of 189 top NGOs worldwide and the top 10 best NGOs in India published in 2019 by NGO Advisor, a Geneva-based independent media organization.<br />
              •Programs and initiatives that are linked to and actively working to achieve the Sustainable Development Goals (SDGs) of the United Nations.<br />
              •Collaborations with a wide range of international organizations, including the US Federal Government, UNESCO, UNICEF, and UNEPA.<br />
              •Visited and lauded by dignitaries from 70 nations, including ambassadors and chiefs of state.<br />
              •15 Nobel Prize winners have resided at the Institute.<br />
            </p>

          </div>
        </div>
        <div className="block rounded-lg bg-white/10  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-te-ripple-init=""
            data-te-ripple-color="light"
          >
            <img
              className="rounded-t-lg bg-slate-800/20 "
              src={kiit}
              alt=""
            />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
            </a>
          </div>
          <div className="p-4">
            <h5 className="mb-2 text-xl font-medium leading-tight text-black ">
              ABOUT KIIT
            </h5>
            <p className="mb-4 h-40 text-justify overflow-x-scroll text-base text-black ">
              Prof. Achyuta Samanta is a social worker, philantrophist and educationalist. He established the prestigious educational institutions known as the Kalinga Institute of Social Sciences (KISS) and the Kalinga Institute of Industrial Technology (KIIT). With more than 30,000 students from India and 53 other countries, KIIT is a prominent institution and one of the most prestigious institutes in the world for professional education. 60,000 indigenous children receive free homes through KISS. Shri.Samanta has made important contributions to education, tribal upliftment, health care, and rural development in addition to art, culture, literature, film, media,society, and national integration. In such a short period of time for the society, a youngster who lost his father at the age of four and was reared in a gorgeous town in Odisha with seven siblings and a widow mother has succeeded in this amazing attempt without any assistance or support. He became the hero of the locals after transforming the remote village of "Kalarabanka" in Cuttack into a Smart Village and the entire Manpur Panchayat into a model Panchayat (cluster of villages). He has won over 50 international and national honours, over 200 state awards, including the two highest civilian honours from the Royal Kingdom of Bahrain and Mongolia.He has been awarded 44 honorary doctorates, both domestically and abroad. He is the first Odia to hold memberships in the Association of Indian Colleges and Teachers of Engineering and the University of Georgia. He represents Kandhamal, Odisha, in the Lok Sabha and serves as the president of the Indian Volleyball Federation.He has pushed the "Art of Giving" (concept of life) as a social reformer, an idea designed to make the world a happier and more peaceful place. Despite his successes, he lives a modest life and works tirelessly to eradicate hunger, poverty, and illiteracy while providing smiles to millions of people.
            </p>

          </div>
        </div>
      </div>
      <div className="fixed top-0 -z-20 right-0 w-screen h-screen back">

      </div>
    </>
  );
}

export default About;
