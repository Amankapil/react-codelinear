export default function Bloghero({ isDarkMode, toggleDarkMode }) {
  return (
    <>
      <section className="blog-hero">
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="blog-hero-h1"
        >
          We Got Plenty Of Ideas
        </h1>
      </section>
    </>
  );
}
