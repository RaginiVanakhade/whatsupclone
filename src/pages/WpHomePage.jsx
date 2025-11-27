import  { useState } from 'react';

const WpHomePage = () => {
  const [openChatBox, setOpenChatBox] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);

  const chatlist = [
    {
      profile: 'https://tse2.mm.bing.net/th?id=OIP.MNYMRopweKA9axhd73z_GwHaE8&pid=Api&P=0&h=180',
      name: 'First Chat',
    },
    {
      profile: 'https://cdna.artstation.com/p/assets/images/images/053/054/138/large/avetetsuya-studios-alien.jpg?1661309922',
      name: 'Second Chat',
    },
    {
      profile: 'https://mommateen.com/wp-content/uploads/2022/07/Teenage-Profile-Picture.jpg',
      name: 'Third Chat',
    },
  ];

  const filteredChatList = chatlist.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProfileClick = (chat) => {
    setOpenChatBox(true);
    setSelectedChat(chat);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log(`Message sent to ${selectedChat.name}: ${message}`);
      setMessage('');
    }
  };

  return (
    <div className="flex bg-amber-50 h-full">
      {/* Sidebar */}
      <div className="w-96 p-4 border border-r-black bg-white h-screen">
        <input
          type="search"
          placeholder="Search name here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 mb-4 w-full text-black rounded"
        />
        {filteredChatList.length > 0 ? (
          filteredChatList.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 p-2 items-center hover:bg-green-500 rounded cursor-pointer"
              onClick={() => handleProfileClick(item)}
            >
              <img
                src={item.profile}
                alt={`${item.name}'s profile`}
                className="w-12 h-12 rounded-full"
              />
              <span>{item.name}</span>
            </div>
          ))
        ) : (
          <div>No chats found.</div>
        )}
      </div>

      {/* Chat Box */}
      {openChatBox && selectedChat && (
        <div className="flex-1 flex flex-col bg-white h-screen">
          <div className="flex items-center p-4 border-b border-gray-300">
            <img
              src={selectedChat.profile}
              alt={`${selectedChat.name}'s profile`}
              className="w-12 h-12 rounded-full"
            />
            <span className="ml-4 text-lg font-semibold">{selectedChat.name}</span>
          </div>
          <div className="flex-1 p-4">
            {/* Chat messages can be rendered here */}
            <p className="text-gray-500">Start chatting with {selectedChat.name}...</p>
          </div>
          <div className="p-4 border-t border-gray-300">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
                className="flex-1 p-2 border rounded"
              />
              <button
                onClick={handleSendMessage}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WpHomePage;






