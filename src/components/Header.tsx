import React from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <MessageSquare size={24} />
          <span className="text-xl font-bold">WhatsApp2Text</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/pricing" className="hover:text-blue-200">Pricing</Link></li>
            <li><Link to="/blog" className="hover:text-blue-200">Blog</Link></li>
            <li><Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100">Sign Up</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header