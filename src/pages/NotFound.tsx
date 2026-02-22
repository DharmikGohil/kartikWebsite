import { Link } from 'react-router-dom'
import { Home, Search } from 'lucide-react'

const NotFound = () => (
  <div className="min-h-screen bg-navy-900 pt-20 flex items-center">
    <div className="container-max text-center py-20">
      <div className="text-8xl font-bold text-brand-400/20 mb-4">404</div>
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Page Not Found</h1>
      <p className="text-gray-400 mb-8 max-w-md mx-auto">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/" className="btn-primary inline-flex items-center group">
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        <Link to="/solutions" className="btn-secondary inline-flex items-center">
          <Search className="w-4 h-4 mr-2" />
          Explore Solutions
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {[
          { label: "Solutions by Industry", href: "/solutions" },
          { label: "Technologies", href: "/technologies" },
          { label: "Contact Us", href: "/contact" },
        ].map(link => (
          <Link key={link.href} to={link.href} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-brand-500/20 transition-colors text-gray-400 hover:text-white text-sm">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
)

export default NotFound
