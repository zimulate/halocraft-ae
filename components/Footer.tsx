import Link from "next/link";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-12">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Company</h2>
          <p className="text-sm text-gray-300">
            Innovative solutions for modern businesses
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <nav>
            {[
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/projects", label: "Projects" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block py-1 hover:text-blue-300 transition"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Our Services</h3>
          <nav>
            {[
              { href: "/services/service1", label: "Web Development" },
              { href: "/services/service2", label: "Mobile Apps" },
              { href: "/services/service3", label: "Cloud Solutions" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block py-1 hover:text-blue-300 transition"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <span>info@company.com</span>
            </div>
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-2xl hover:text-blue-400" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </Link>
            <Link href="https://github.com" target="_blank">
              <FaGithub className="text-2xl hover:text-gray-400" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}

      <div className="text-center mt-8 pt-4 border-t border-gray-700">
        <p className="text-sm ">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
