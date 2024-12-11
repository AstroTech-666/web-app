// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "About",
    content: (
      <p>
        Welcome to Green Path, a revolutionary app designed to empower communities to take action for a sustainable future! Through innovative tools and practical solutions, Green Path addresses environmental challenges like waste management, air quality, and resource conservation. Dive in and see how Green Path is creating a cleaner, greener world for everyone! 🌱📱✨
      </p>
    ),
  },
  { key: "team", title: "Green Team", content: <TeamCarousel /> },
  {
    key: "credits",
    title: "Stay Informed",
    content: (
      <div className="credits">
        <p>
          Stay updated on new features and improvements! Check this section regularly as I'll be adding exciting updates, including the release of version 2 of Green Path. You'll be able to download the latest version right here soon! 🚀
        </p>
        <p>
          For more updates, feel free to check out my
          <a href="https://github.com/AstroTech-666" className="github-link">GitHub</a>.
        </p>
      </div>
    ),
  },
];

export default sectionsContentData;
