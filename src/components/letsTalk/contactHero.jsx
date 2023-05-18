export default function Contacthero({ isDarkMode, toggleDarkMode }) {
  return (
    <section className="contact-hero">
      <div className="contact-section">
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="contact-hero-h1"
        >
          The Sky's The Limit!​
        </h1>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="contact-hero-para"
        >
          Request our detailed portfolio or a free quotation; there are no
          strings attached! If you'd like, we can just have a chat and get to
          know each other- we love making new friends and meeting new people who
          share interests!
        </p>
      </div>
    </section>
  );
}
