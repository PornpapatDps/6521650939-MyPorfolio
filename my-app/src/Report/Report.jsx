import { useEffect, useState } from "react";
import axios from "axios";

const Report = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    interests: "",
    description: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/users/${id}`);
      setEditingUser(id);
      setFormData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8000/users/${editingUser}`, formData);
      setUsers(
        users.map((user) =>
          user.id === editingUser ? { ...user, ...formData } : user
        )
      );
      setEditingUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen p-4 sm:p-10">
      <div className="bg-white overflow-x-auto shadow-md rounded-lg p-4 sm:p-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 sm:text-center">รายงานรายชื่อผู้ใช้</h1>
        <table className="min-w-full bg-white border border-gray-100 rounded-3xl">
          <thead className="bg-gray-200 text-gray-900 border rounded-3xl">
            <tr className="text-lg sm:text-3xl">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">ชื่อจริง</th>
              <th className="p-3 border">นามสกุล</th>
              <th className="p-3 border">อายุ</th>
              <th className="p-3 border">เพศ</th>
              <th className="p-3 border">ความสนใจ</th>
              <th className="p-3 border">คำอธิบาย</th>
              <th className="p-3 border">ลบ</th>
              <th className="p-3 border">แก้ไข</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition duration-200 text-gray-900 border-b border-gray-100 text-sm sm:text-3xl"
                >
                  <td className="p-3 border text-center">{user.id}</td>
                  <td className="p-3 border text-center">{user.firstname}</td>
                  <td className="p-3 border text-center">{user.lastname}</td>
                  <td className="p-3 border text-center">{user.age}</td>
                  <td className="p-3 border text-center">{user.gender}</td>
                  <td className="p-3 border text-center">{user.interests}</td>
                  <td className="p-3 border text-center">{user.description}</td>
                  <td className="p-3 border text-center">
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition duration-200"
                      onClick={() => handleDelete(user.id)}
                    >
                      ลบ
                    </button>
                  </td>
                  <td className="p-3 border text-center">
                    <button
                      className="bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500 transition duration-200"
                      onClick={() => handleEdit(user.id)}
                    >
                      แก้ไข
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center p-4 text-gray-500">
                  ไม่พบข้อมูล
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {editingUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-96">
            <h2 className="text-lg font-bold mb-4">แก้ไขข้อมูล</h2>
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="ชื่อจริง"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="นามสกุล"
                className="border p-2 rounded w-full"
              />
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="อายุ"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="เพศ"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                placeholder="ความสนใจ"
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="คำอธิบาย"
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                onClick={handleUpdate}
              >
                บันทึก
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
                onClick={() => setEditingUser(null)}
              >
                ยกเลิก
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Report;
