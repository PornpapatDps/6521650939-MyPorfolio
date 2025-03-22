import  { useState } from "react";
import { FaCertificate } from "react-icons/fa";

import cssBasic from "../../src/assets/Css-B.png";
import JsBasic from "../../src/assets/Js-Basic.png";
import Jsin from "../../src/assets/Js-in.png";
import Node from "../../src/assets/Node.png";
import python from "../../src/assets/python.png";
import C from "../../src/assets/C.jpg";
import st1 from "../../src/assets/นิสิตดีเด่น2565.jpg";
import st2 from "../../src/assets/นิสิตดีเด่น2566.jpg";
import st3 from "../../src/assets/อบรมภาวะผู้นำ.jpg";

const certificates = [
  {
    title: "ภาษา C",
    Certificate: "ทักษะการอบรมการเขียนคอมพิวเตอร์ด้วยภาษา C 12 ชั่วโมง",
    image: C,
  },
  {
    title: "Python - Basics",
    Certificate: "Python - Basics",
    image: python,
  },
  {
    title: "CSS - Basics",
    Certificate: "CSS - Basics",
    image: cssBasic,
  },
  {
    title: "JavaScript - Basics",
    Certificate: "JavaScript - Basics",
    image: JsBasic,
  },
  {
    title: "JavaScript - Intermediate",
    Certificate: "JavaScript - Intermediate",
    image: Jsin,
  },
  {
    title: "Node.js",
    Certificate: "Node.js",
    image: Node,
  },
  {
    title: "นิสิตดีเด่น 2565 ",
    Certificate: "นิสิตดีเด่น 2565 ",
    image: st1,
  },
  {
    title: "นิสิตดีเด่น 2566",
    Certificate: "นิสิตดีเด่น 2566",
    image: st2,
  },
  {
    title: "อบรมภาวะผู้นำ",
    Certificate: "อบรมภาวะผู้นำ",
    image: st3,
  }
];

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full py-10 px-5 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-5x ">My Certificates</h1>
      <p className="text-2xl text-center mb-10"> ใบเกียรติบัตร สายคอมพิวเตอร์ ด้านกิจกรรมและอื่นๆ</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow hover:bg-red-600 hover:text-white transition duration-300 cursor-pointer"
            onClick={() => setSelectedImage(cert.image)}
          >
            <div className="flex items-center mb-4">
              <FaCertificate className="text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-bold">{cert.title}</h2>
                <p className="text-sm">Certificate: {cert.Certificate}</p>
                
              </div>
            </div>
            <div className="mt-4">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-contain rounded-md shadow"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl w-full p-4">
            <img src={selectedImage} alt="Certificate" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
