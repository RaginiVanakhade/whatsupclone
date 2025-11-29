import { useState, useEffect } from 'react'
import SearchBar from "../custom/search";

const SideBar = () => {
  const api = "https://randomuser.me/api/?results=10";

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchChatUsers = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchChatUsers();
  }, []);

  // Filter users
  const filteredUsers = users.filter((user) =>
    user.name.first.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-80">
      {/* profile section */}
      <div className="flex gap-4">
        <div className="bg-red-500 rounded-full w-16 h-16 mt-6 ml-4"></div>
        <div className="mt-10 font-semibold">Ragini🦋📸</div>
      </div>

      {/* Search Bar */}
      <SearchBar value={search} onChange={setSearch} />

      {/* User list */}
      <div className="ml-6 mt-4 h-[70vh] overflow-y-auto pr-4">
        {filteredUsers.map((user) => (
          <ul key={user.login.uuid}>
            <div className="flex items-center gap-3 py-2">
              <img
                src={user.picture.thumbnail}
                alt={user.name.first}
                className="rounded-full"
              />
              <li>{user.name.first}</li>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
