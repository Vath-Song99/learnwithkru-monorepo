import React from 'react';
import Image from 'next/image'

const ProfileUser: React.FC = () => {
  return (
    <section className="pt-10 bg-blueGray-50">
      <div className="w-full lg:w-[80%] px-4 mx-auto">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
          <div className="px-6">
            <div className="flex flex-wrap  justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative ">
                  <div className="flex absolute w-[150px] h-[150px]">
                  <Image
               src={"https://thumbs.dreamstime.com/z/cute-chibi-kawaii-characters-alphabet-professions-letter-q-quantity-surveyor-flat-style-92341296.jpg"}
                 alt="Benner"
                    className="shadow-xl rounded-xl  align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 w-[150px] h-[150px] "
                    width={150}
                    height={150}
                  />
                  
                  </div>
             
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">Jenna Stones</h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Los Angeles, California
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Solution Manager - Creative Tim Officer
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                University of Computer Science
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy
                    writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove
                    structure. An artist of considerable range.
                  </p>
                  <a href="javascript:void(0);" className="font-normal text-pink-500">
                    Show more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileUser;