import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../common/Container";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Architecture", href: "#architecture" },
  { name: "AI", href: "#ai" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "";

      navLinks.forEach((item) => {
        const section = document.querySelector(item.href);

        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          current = item.href;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800 bg-[#050816]/80 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <a
          href="/"
          className="text-2xl font-bold tracking-wide"
        >
          Suraj
          <span className="text-blue-500">.</span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`transition duration-300 ${
                    active === item.href
                      ? "text-blue-500"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </Container>

      {mobileMenu && (
        <div className="border-t border-slate-800 bg-[#050816] md:hidden">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenu(false)}
              className="block border-b border-slate-800 px-6 py-5 text-slate-300 transition hover:bg-slate-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;