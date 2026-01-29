import bandPhoto from "./assets/china_jam_promor.jpeg";
export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: 24,
        fontFamily: "system-ui",
        color: "#1f2d3d",
      }}
    >
      <div style={{ width: "min(760px, 100%)" }}>
        <header
          style={{
            textAlign: "center",
            marginTop: 48,
            marginBottom: 32,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "2rem", 
              lineHeight: 1.05,
              letterSpacing: "0.08em",
            }}
          >
            COMFORTERS!
          </h1>
          <p style={{ marginTop: 8, fontStyle: "italic", opacity: 0.8 }}>
            The patron saints of DAWless workflows
          </p>
        </header>

        <section style={{ lineHeight: 1.6 }}>
        <img
  src={bandPhoto}
  alt="Comforters band photo"
  style={{
    width: "100%",
    maxWidth: 500,
    display: "block",
    margin: "32px auto",
  }}
/>
          <p style={{ marginTop: 0 }}>
            Comforters is a new band from Ridgewood, Queens, featuring Andy Borsz and
            Jessica Garson Beauchemin. The pair became close while performing as part of
            the collective Visceral Realists on tour in China, and soon wanted to explore
            beyond the minimalism of their previous project. They debuted in late 2025 at
            Freak World and are known for their loud, organized chaos in their live sets.
            They use live coding frameworks such as Tidal Cycles and SuperCollider,
            custom instruments built with a Raspberry Pi, and Pure Data and Eurorack
            modular synthesizers.
          </p>
        </section>

        <section style={{ marginTop: 40 }}>
          <h2 style={{ textAlign: "center", marginBottom: 12 }}>Listen</h2>

          <p style={{ marginTop: 0, opacity: 0.9 }}>
            Andy and Jessica are currently recording their debut, but in the meantime,
            you can listen to their projects, Bad Trips (Andy's band) and Messica Arson
            (Jessica's solo project).
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "16px 0 0",
            }}
          >
            <li style={{ padding: "6px 0" }}>
              <a href="https://badtripsny.bandcamp.com">Bad Trips</a>
            </li>
            <li style={{ padding: "6px 0" }}>
              <a href="https://messicaarson.bandcamp.com">Messica Arson</a>
            </li>
          </ul>
        </section>

        <section style={{ marginTop: 48 }}>
          <h2 style={{ textAlign: "center", marginBottom: 16 }}>
            Upcoming Shows
          </h2>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            <li style={{ padding: "10px 0" }}>
              February 15 — Nonstop Noise Fest — Brooklyn, NY — The Living Gallery
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
