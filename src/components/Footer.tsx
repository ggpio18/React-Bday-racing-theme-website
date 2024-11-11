export function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Racing Birthday</h3>
            <p className="text-gray-400">
              The ultimate racing-themed birthday experience
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-500">Home</a></li>
              <li><a href="#" className="hover:text-red-500">About</a></li>
              <li><a href="#" className="hover:text-red-500">Gallery</a></li>
              <li><a href="#" className="hover:text-red-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 (555) 123-4567</li>
              <li>📧 info@racingbirthday.com</li>
              <li>📍 123 Racing Street</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Racing Birthday. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}