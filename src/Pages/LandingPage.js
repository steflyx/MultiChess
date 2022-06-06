import "./LandingPage.css";
import _ from "lodash";
import { AIIcon } from "../icons/AIIcon";
import { HumanIcon } from "../icons/HumanIcon";

export function LandingPage({ setIsEntered, victories }) {
  return (
    <main className="wrapper">
      <section className="page-container parallax">
        <div className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <h1 className="page-title">Welcome to Multi-Chess!</h1>
          </div>
          <div className="parallax__layer parallax__layer--back">
            <div onMouseDown={() => setIsEntered(true)} className="neon-button">
              Start!
            </div>
          </div>
        </div>
        <div className="parallax__group info-section">
          <h2 className="info-section-title">
            Artificial vs Collective Intelligence: who's the best?
          </h2>
          <div style={{ padding: "1em" }}>
            <p className="info-section-content">
              Welcome to MultiChess! This is the first platform that opposes the
              top technologies created by humans against our ability to think
              collective. On one side we have Artificial Intelligence with its
              million of computations per second; on the other we have the
              shared intelligence of thousand of people. The battle is tough, so
              what are you waiting for? Click the button below to show to the
              computers who's really smart!
            </p>
            <button
              className="neon-button info-section-button"
              onMouseDown={() => setIsEntered(true)}
              style={{ display: "flex", marginTop: "1em" }}
            >
              Start!
            </button>
          </div>
          <div className="info-section-statistics">
            <div
              id="info-section-statistics-ai"
              style={{ fontSize: _.clamp(victories.ai, 30, 70) }}
            >
              <h4>AI</h4>
              <h4>{victories.ai}%</h4>
              <AIIcon
                fill={"white"}
                className={"icon"}
                additionalCSS={{ width: victories.ai * 4 + 100 }}
              />
            </div>
            <div
              id="info-section-statistics-humans"
              style={{ fontSize: _.clamp(victories.humans, 30, 70) }}
            >
              <h4>Human Crowd</h4>
              <h4>{victories.humans}%</h4>
              <HumanIcon
                fill={"white"}
                className={"icon"}
                additionalCSS={{ width: victories.humans * 4 + 100 }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
