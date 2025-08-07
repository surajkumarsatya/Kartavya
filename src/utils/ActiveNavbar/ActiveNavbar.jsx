export const isActive = (path, location) => {
  if (path.startsWith("#") || path.startsWith("/#")) {
    return location.hash === path.replace("/", "");
  }
  return location.pathname === path;
};

export const scrollToSection = (id) => {
  if (id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
};

export const toggleMenu = (setIsMenu) => {
  setIsMenu((prev) => !prev);
};
