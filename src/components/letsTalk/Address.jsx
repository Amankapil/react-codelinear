export default function address({ isDarkMode, toggleDarkMode }) {
  return (
    <section className="address">
      <div className="address-container">
        <div className="address-content">
          <h1
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            className="address-h1"
          >
            Bangalore
          </h1>
          <p
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="address-p"
          >
            #671, 26th Main, 17th Cross, <br />
            6th Phase,J P Nagar, Bangalore
          </p>
        </div>
        <div
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="address-loc"
        >
          12° 56' 27.06" N, 77° 32' 39.228" E
        </div>
      </div>
    </section>
  );
}
