export const navLinks = [
  { href: "/", key: "nav_home" },
  { href: "/reviews", key: "nav_reviews" },
  { href: "/summaries", key: "nav_summaries" },
  { href: "/places", key: "nav_places" },
  { href: "/about", key: "nav_about" }
] as const;

export const commands = [
  { id: "home", key: "nav_home", href: "/" },
  { id: "reviews", key: "nav_reviews", href: "/reviews" },
  { id: "summaries", key: "nav_summaries", href: "/summaries" },
  { id: "places", key: "nav_places", href: "/places" },
  { id: "about", key: "nav_about", href: "/about" },
  { id: "admin", key: "nav_admin", href: "/admin" }
] as const;
