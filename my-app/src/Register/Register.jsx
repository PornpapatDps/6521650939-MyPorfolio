import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    interests: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  // ฟังก์ชันอัปเดตค่าจากอินพุต
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ฟังก์ชันอัปเดตค่าจาก Checkbox (interests)
//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       interests: checked
//         ? [...prevData.interests, value]
//         : prevData.interests.filter((interest) => interest !== value),
//     }));
//   };

  // ฟังก์ชันส่งข้อมูลไปยัง Backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);

    try {
      const response = await fetch("http://localhost:8000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("ลงทะเบียนสำเร็จ!");
        setFormData({
          firstname: "",
          lastname: "",
          age: "",
          gender: "",
          interests: "",
          description: "",
        });
      } else {
        setErrors(result.errors || ["เกิดข้อผิดพลาดที่ไม่รู้จัก"]);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors(["เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์"]);
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-300 min-h-screen flex flex-col justify-center items-center py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white max-h-screen shadow-md rounded-xl p-8 w-full max-w-5xl"
      >
        <h2 className="text-3xl font-semibold text-gray-800 text-center pb-6">
          ลงทะเบียน
        </h2>

        {/* แสดงข้อผิดพลาด */}
        {errors.length > 0 && (
          <div className="bg-red-100 min-h-screen text-red-700 p-4 rounded-lg mb-6">
            <ul>
              {errors.map((error, index) => (
                <li key={index}>- {error}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {/* กรอกชื่อ */}
          <div className="flex flex-col">
            <label className="text-xl font-semibold text-gray-800">
              กรอกชื่อ
            </label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="border border-gray-900 rounded-xl text-lg px-5 py-2 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="กรอกชื่อ"
              required
            />
          </div>

          {/* กรอกนามสกุล */}
          <div className="flex flex-col">
            <label className="text-xl font-semibold text-gray-800">
              กรอกนามสกุล
            </label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="border border-gray-900 rounded-xl text-lg px-5 py-2 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="กรอกนามสกุล"
              required
            />
          </div>

          {/* กรอกอายุ */}
          <div className="flex flex-col">
            <label className="text-xl font-semibold text-gray-800">
              กรอกอายุ
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min={0}
              max={100}
              className="border border-gray-900 rounded-xl 
              text-lg px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="กรอกอายุ"
              required
            />
          </div>

          {/* เลือกเพศ */}
          <div className="flex flex-col">
            <label className="text-xl font-semibold text-gray-800">
              เลือกเพศ
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border border-gray-900 rounded-xl 
              text-lg px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">เลือกเพศ</option>
              <option value="ชาย">ชาย</option>
              <option value="หญิง">หญิง</option>
              <option value="ไม่ระบุ">ไม่ระบุ</option>
            </select>
          </div>

          {/* เลือกความสนใจ */}
          <div className="flex flex-col col-span-1 md:col-span-3">
            <label className="text-xl font-semibold text-gray-800">
              กรอกความสนใจ
            </label>
            <textarea
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              className="border border-gray-900 rounded-xl 
              text-lg px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="กรอกความสนใจ"
              required
            ></textarea>
          </div>

          {/* กรอกคำอธิบาย */}
          <div className="flex flex-col col-span-1 md:col-span-3">
            <label className="text-xl font-semibold text-gray-800">
              กรอกคำอธิบาย
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border border-gray-900 rounded-xl text-lg px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="กรอกคำอธิบาย"
              required
            ></textarea>
          </div>
        </div>

        {/* ปุ่มลงทะเบียน */}
        <div className="flex justify-center items-center pt-6">
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-300"
            } text-white text-xl py-3 px-6 rounded-xl transition-all duration-300`}
          >
            {loading ? "กำลังลงทะเบียน..." : "ลงทะเบียน"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
