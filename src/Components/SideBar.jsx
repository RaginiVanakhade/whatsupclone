import { useState, useEffect } from 'react'
import { IoMdSearch } from "react-icons/io";
const SideBar = () => {


  const api = "https://randomuser.me/api/?results=10"
  const fetchChatUsers = async () => {
    try {
      const response = await fetch(api);
      console.log(response, "response")
      const data = await response.json();
      setUsers(data.results); // Store in state
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchChatUsers();
  }, []);

  console.log(users, "usersdata")

  return (
    <div className="w-80 ">
      {/* profile section  */}
      <div className="flex gap-4">
        <div className="bg-red-500 rounded-full w-16 h-16 mt-6 ml-4"> <img src="" alt="" /></div>
        <div className="mt-10 font-semibold" >Ragini🦋📸</div>
      </div>

      {/* search  */}
      <div className="relative w-full mt-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoMdSearch size={28} color="grey" />
        </div>

        <input
          type="search"
          className="w-[96%] ml-2 mr-2 pl-12 pr-4 py-2 border rounded-3xl outline-none"
          placeholder="Search..."
        />
      </div>


     {/* user list */}
<div className="ml-6 mt-4 h-[70vh] overflow-y-auto pr-4">
  {users.map((user) => {
    return (
      <ul key={user.login.uuid}>
        <div className="flex items-center gap-3 py-2">
          <img src={user.picture.thumbnail} alt={user.name.first} className="rounded-full" />
          <li>{user.name.first}</li>
        </div>
      </ul>
    );
  })}
</div>
    </div>
  )
}

export default SideBar