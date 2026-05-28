import { useEffect, useState } from "react";
import "./App.css";

const tourDates = [
  {
    date: "June 26",
    venue: "AKK",
    location: "Karlsruhe, Germany",
  },
  {
    date: "July 1",
    venue: "P60 Culture Space",
    location: "Berlin, Germany",
  },
  {
    date: "July 3",
    venue: "Hundred Years Gallery",
    location: "London, England",
  },
  {
    date: "July 4",
    venue: "Mayhem",
    location: "Copenhagen, Denmark",
  },
];

export default function App() {
  const [isTourPage, setIsTourPage] = useState(
    window.location.hash === "#tour",
  );

  useEffect(() => {
    const syncPage = () => {
      setIsTourPage(window.location.hash === "#tour");
    };

    window.addEventListener("hashchange", syncPage);
    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  return (
    <main className="site-shell">
      <div className="site-copy">
        <h1>COMFORTERS</h1>
        <p className="subheader">NEW YORK CITY LIVE CODE ELECTRONICS</p>
        <nav className="site-nav" aria-label="Primary">
          <a
            className="nav-link"
            href="https://comforters-nyc.bandcamp.com/"
            target="_blank"
            rel="noreferrer"
          >
            Bandcamp
          </a>
          <a
            className={`nav-link${isTourPage ? " is-active" : ""}`}
            href="#tour"
            aria-current={isTourPage ? "page" : undefined}
          >
            Tour
          </a>
        </nav>
        {isTourPage ? (
          <section className="tour-section" aria-labelledby="tour-heading">
            <h2 id="tour-heading">Europe 2026</h2>
            <ul className="tour-list">
              {tourDates.map((show) => (
                <li key={`${show.date}-${show.venue}`} className="tour-item">
                  <p className="tour-date">
                    {show.date} - {show.venue}
                  </p>
                  <p className="tour-location">{show.location}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </main>
  );
}
