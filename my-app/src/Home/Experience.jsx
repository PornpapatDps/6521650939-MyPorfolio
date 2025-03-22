import 'react';

const Experience = () => {
  return (
    <div className="w-full py-10 px-5 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-4">My Experience</h1>
      <p className='text-2xl text-center mb-10'>ประสบการณ์การทำโปรเจค อบรม และภาวะผู้นำ</p>

      {/* Experience Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Website Development Experience */}
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:bg-red-600 hover:text-white transition duration-300">
          <h2 className="text-2xl font-bold mb-2">Website : Logistic Website</h2>
          <p className="text-lg font-normal mb-1">ประเภท : รีโปรเจคใช้React.js, Tailwind.css</p>
          <p className="text-lg font-medium mb-5">
            Github: <a href="https://github.com/PornpapatDps/Logistic-Website" target="_blank">PornpapatDps/Logistic-Website</a>
          </p>
          <div className="mb-4">
          </div>
          <p>
            โปรเจคนี้เป็นโปรเจคของวิชา 02739241 วิชา Internet Programming โดยเป็นเว็บไซต์ที่ใช้ในการจัดการข้อมูลของระบบขนส่งสินค้า
            โดยมีการใช้ React.js ในการพัฒนา จากเดิมใช้แค่ HTML, CSS, JS ในการพัฒนาเว็บไซต์และ phpMyAdmin ในการจัดการพัฒนา SQL
            ดิฉันจึงมองเห็นว่าการใช้ React.js จะทำให้การพัฒนาเว็บไซต์นั้นง่ายขึ้น
          </p>
        </div>

        {/* Website Development Experience */}
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:bg-red-600 hover:text-white transition duration-300">
          <h2 className="text-2xl font-bold mb-2">Website : ระบบขายกุ้งแคระและปลาสวยงาม</h2>
          <p className="text-lg font-normal mb-1">ประเภท : โปรเจกต์ใช้ React.js, Tailwind.css</p>
          <p className="text-lg font-medium mb-5">
            Github: <a href="https://github.com/PornpapatDps/ProjectSystemsSell" target="_blank">PornpapatDps/ProjectSystemsSell</a>
          </p>
          <div className="mb-4">
          </div>
          <p>
            โปรเจกต์นี้เป็นโปรเจกต์ของวิชา 02739322 วิชา Information System Analysis and Design โดยเป็นเว็บไซต์ที่ใช้ในการจัดการข้อมูลของระบบขายกุ้งแคระและปลาสวยงาม
            โดยมีการใช้ React.js ในการพัฒนา
          </p>
        </div>

        {/* University Activities Experience */}
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:bg-red-600 hover:text-white transition duration-300">
          <h2 className="text-2xl font-bold mb-4">กิจกรรมมหาวิทยาลัย : คณะกรรมการสโมสรคณะศิลปศาสตร์และวิทยาศาสตร์</h2>
          <p className="text-lg font-normal mb-1">ประเภท : กิจกรรมมหาวิทยาลัย</p>
          <p className="text-lg font-medium mb-3">ตำแหน่ง : รองนายกสโมสรฝ่ายกิจการพิเศษ</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow hover:bg-red-600 hover:text-white transition duration-300">
          <h2 className="text-2xl font-bold mb-4">กิจกรรมมหาวิทยาลัย : อบรม Frontend Developer BootCamp จาก HTML สู่ REACT 12 ชั่วโมง</h2>
          <p className="text-lg font-normal mb-1">ประเภท : อบรมมหาวิทยาลัย</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow hover:bg-red-600 hover:text-white transition duration-300">
          <h2 className="text-2xl font-bold mb-4">กิจกรรมมหาวิทยาลัย : อบรมหลักสูตรเปิดโลกทัศน์ AI และความปลอดภัยทางไซเบอร์</h2>
          <p className="text-lg font-normal mb-1">ประเภท : อบรมมหาวิทยาลัยกับหน่วยงานภายนอก Microsoft</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow hover:bg-red-600 hover:text-white transition duration-300">
          <h2 className="text-2xl font-bold mb-4">กิจกรรมมหาวิทยาลัย : โครงการพัฒนานิสิตตามคุณลักษณะที่พึ่งประสงค์ของบัณฑิต กิจกรรม The Future of work by Huawei ICT Academy</h2>
          <p className="text-lg font-normal mb-1">ประเภท : อบรมมหาวิทยาลัยกับหน่วยงานภายนอก Huawei ICT Academy</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
