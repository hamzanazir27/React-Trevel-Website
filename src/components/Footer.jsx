function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Us + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Email: contact@hamzatravels.com</p>
          <p className="text-sm">Phone: +92 300 1234567</p>
          <div className="flex mt-4 space-x-4">
            {/* Social Icons (placeholder) */}
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>

        {/* Logo */}
        <div>
          <img src="/logo.png" alt="Logo" className="h-14 mb-2" />
          <p className="text-sm">
            Discover new destinations and create unforgettable memories with us.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Terms & Privacy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} All rights reserved by Hamza Ramay.
      </div>
    </footer>
  );
}

export default Footer;
