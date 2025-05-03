import { useState, useRef, useEffect } from 'react';
import { Send, Smile } from 'lucide-react';
import '../styles/variables.css'; // Import your CSS variables

export default function AnonymousWall() {
  const [message, setMessage] = useState('');
  const [posts, setPosts] = useState([
  
    {
      id: 2,
      author: 'Anonymous',
      isAdmin: false,
      text: "awesome portfolio",
      timestamp: "4/21/2025, 01:54 PM",
      color: 'bg-cyan-900',
      position: { x: 400, y: 750 }
    },
    {
      id: 3,
      author: 'Anonymous',
      isAdmin: false,
      text: "Great bro!!",
      timestamp: "4/19/2025, 12:23 AM",
      color: 'bg-purple-800',
      position: { x: 800, y: 770 }
    },
    {
      id: 4,
      author: 'Anonymous',
      isAdmin: false,
      text: "One of the better portfolios I've seen - well done!",
      timestamp: "4/22/2025, 03:45 PM",
      color: 'bg-purple-800',
      position: { x: 1150, y: 750 }
    }
  ]);
  
  const [draggedNote, setDraggedNote] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const wallRef = useRef(null);

  useEffect(() => {
    // Center all notes when the component first loads
    if (wallRef.current) {
      const wallWidth = wallRef.current.clientWidth;
      const wallHeight = wallRef.current.clientHeight;
      
      // Adjust all notes to be within the visible area
      setPosts(prevPosts => prevPosts.map(post => {
        // Make sure posts are within bounds
        const x = Math.min(Math.max(post.position.x, 0), wallWidth - 256);
        const y = Math.min(Math.max(post.position.y, 0), wallHeight - 150);
        
        return {
          ...post,
          position: { x, y }
        };
      }));
    }
  }, []);

  const getRandomColor = () => {
    const colors = ['bg-green-700', 'bg-cyan-900', 'bg-purple-800', 'bg-blue-800', 'bg-indigo-800'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleSubmit = () => {
    if (message.trim() !== '') {
      // Position new notes in the center of the wall container
      const container = wallRef.current;
      const centerX = container ? (container.clientWidth / 2) - 128 : 500;
      const centerY = container ? (container.clientHeight / 2) - 75 : 500;
      
      const newPost = {
        id: Date.now(),
        author: 'Anonymous',
        isAdmin: false,
        text: message,
        timestamp: new Date().toLocaleString(),
        color: getRandomColor(),
        position: { x: centerX, y: centerY }
      };
      
      setPosts([...posts, newPost]);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const startDrag = (e, postId) => {
    const post = posts.find(p => p.id === postId);
    if (!post) return;
    
    // Get mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Calculate offset from note position to mouse position
    const offsetX = mouseX - post.position.x;
    const offsetY = mouseY - post.position.y;
    
    setDraggedNote(postId);
    setDragOffset({ x: offsetX, y: offsetY });
  };

  const handleDrag = (e) => {
    if (draggedNote === null) return;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Get wall boundaries
    const wall = wallRef.current;
    if (!wall) return;
    
    const wallRect = wall.getBoundingClientRect();
    const noteWidth = 256; // width of note in pixels
    const noteHeight = 150; // approximate height
    
    // Calculate boundaries
    const minX = 0;
    const minY = 0;
    const maxX = wallRect.width - noteWidth;
    const maxY = wallRect.height - noteHeight;
    
    // Calculate new position with bounds checking
    const newX = Math.min(Math.max(mouseX - dragOffset.x, minX), maxX);
    const newY = Math.min(Math.max(mouseY - dragOffset.y, minY), maxY);
    
    setPosts(posts.map(post => {
      if (post.id === draggedNote) {
        return {
          ...post,
          position: {
            x: newX,
            y: newY
          }
        };
      }
      return post;
    }));
  };

  const endDrag = () => {
    setDraggedNote(null);
  };

  useEffect(() => {
    if (draggedNote !== null) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', endDrag);
      
      return () => {
        window.removeEventListener('mousemove', handleDrag);
        window.removeEventListener('mouseup', endDrag);
      };
    }
  }, [draggedNote, dragOffset, posts]);

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center px-6 py-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-400 mb-2">Anonymous Wall</h1>
          <p className="text-gray-400 text-lg">Share your thoughts anonymously</p>
        </div>

        <div className="relative mb-16">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Write something nice..."
            className="w-full bg-gray-800 bg-opacity-50 rounded-xl border border-gray-700 text-white p-4 pr-20 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            rows="3"
          />
          <div className="absolute right-4 bottom-4 flex space-x-2">
            <button 
              className="text-gray-400 hover:text-green-400 transition" 
              aria-label="Add emoji">
              <Smile size={24} />
            </button>
            <button 
              onClick={handleSubmit}
              className="text-gray-400 hover:text-green-400 transition" 
              aria-label="Send message">
              <Send size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={wallRef}
          className="relative min-h-[500px] border border-gray-800 rounded-lg bg-black bg-opacity-30 overflow-hidden wall-background"
          style={{ 
            height: "60vh", 
            cursor: draggedNote ? "grabbing" : "default",
          }}
        >
          {posts.map((post) => (
            <div 
              key={post.id} 
              className={`${post.color} rounded-lg p-4 shadow-lg absolute cursor-grab w-64 transition-transform`}
              style={{
                left: `${post.position.x}px`,
                top: `${post.position.y}px`,
                transform: `rotate(${Math.floor(Math.random() * 5) - 2}deg)`,
                cursor: draggedNote === post.id ? "grabbing" : "grab",
                zIndex: draggedNote === post.id ? 10 : 1,
                transition: draggedNote === post.id ? 'none' : 'transform 0.1s ease, box-shadow 0.2s ease',
                boxShadow: draggedNote === post.id ? '0 10px 25px rgba(0,0,0,0.3)' : '0 4px 6px rgba(0,0,0,0.1)'
              }}
              onMouseDown={(e) => startDrag(e, post.id)}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-medium">
                  {post.author} {post.isAdmin && <span className="text-xs bg-green-900 px-2 py-0.5 rounded ml-1">Admin</span>}
                </div>
                <div className="text-xs opacity-70">{post.timestamp}</div>
              </div>
              <p className="break-words">{post.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}