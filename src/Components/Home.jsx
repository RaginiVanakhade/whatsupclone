import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3001";

function Home() {
  const [users, setUsers] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    address: "",
  });

  // ✅ Fetch users
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API_URL}/users`);
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ✅ Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Open form
  const handleOpenForm = (user = null) => {
    if (user) {
      setEditingId(user.ID);
      setFormData({
        id: user.ID,
        name: user.NAME,
        email: user.EMAIL,
        age: user.AGE,
        mobile: user.MOBILE_NO,
        work: user.WORK,
        address: user.ADDRESS,
      });
    } else {
      setEditingId(null);
      setFormData({
        id: "",
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        address: "",
      });
    }
    setFormVisible(true);
  };

  // ✅ Close form
  const handleCloseForm = () => {
    setFormVisible(false);
    setEditingId(null);
    setFormData({
      id: "",
      name: "",
      email: "",
      age: "",
      mobile: "",
      work: "",
      address: "",
    });
  };

  // ✅ Submit (Create/Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_URL}/update/${editingId}`, formData);
      } else {
        await axios.post(`${API_URL}/create`, formData);
      }
      fetchUsers();
      handleCloseForm();
    } catch (err) {
      console.error("Error saving user:", err);
    }
  };

  // ✅ Delete user
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`${API_URL}/delete/${id}`);
        fetchUsers();
      } catch (err) {
        console.error("Error deleting user:", err);
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2>User Management</h2>

      {!formVisible && (
        <button onClick={() => handleOpenForm()} style={styles.createBtn}>
          ➕ Create User
        </button>
      )}

      {formVisible && (
        <div style={styles.formContainer}>
          <h3>{editingId ? "Edit User" : "Create User"}</h3>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input name="id" placeholder="ID" value={formData.id} onChange={handleChange} style={styles.input} />
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={styles.input} />
            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={styles.input} />
            <input name="age" placeholder="Age" value={formData.age} onChange={handleChange} style={styles.input} />
            <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} style={styles.input} />
            <input name="work" placeholder="Work" value={formData.work} onChange={handleChange} style={styles.input} />
            <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange} style={styles.textarea} />
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
              <button type="submit" style={styles.saveBtn}>{editingId ? "Update" : "Save"}</button>
              <button type="button" onClick={handleCloseForm} style={styles.cancelBtn}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Age</th><th>Mobile</th><th>Work</th><th>Address</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.ID}>
              <td>{user.ID}</td>
              <td>{user.NAME}</td>
              <td>{user.EMAIL}</td>
              <td>{user.AGE}</td>
              <td>{user.MOBILE_NO}</td>
              <td>{user.WORK}</td>
              <td>{user.ADDRESS}</td>
              <td>
                <button style={styles.editBtn} onClick={() => handleOpenForm(user)}>Edit</button>
                <button style={styles.deleteBtn} onClick={() => handleDelete(user.ID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// 💅 Styles
const styles = {
  container: { maxWidth: "900px", margin: "30px auto", padding: "20px", textAlign: "center" },
  formContainer: { border: "1px solid #ddd", padding: "20px", borderRadius: "10px", backgroundColor: "#f9f9f9" },
  form: { display: "flex", flexDirection: "column", gap: "8px" },
  input: { padding: "8px", fontSize: "14px" },
  textarea: { padding: "8px", fontSize: "14px", resize: "none" },
  createBtn: { background: "#007bff", color: "white", border: "none", padding: "8px 16px", cursor: "pointer" },
  saveBtn: { background: "#28a745", color: "white", border: "none", padding: "8px 16px", cursor: "pointer" },
  cancelBtn: { background: "#6c757d", color: "white", border: "none", padding: "8px 16px", cursor: "pointer" },
  editBtn: { background: "#ffc107", border: "none", padding: "5px 10px", cursor: "pointer" },
  deleteBtn: { background: "#dc3545", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" },
  table: { width: "100%", borderCollapse: "collapse", marginTop: "20px" },
};

export default Home;
