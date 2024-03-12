import React from "react";
// import { MyButtonLg } from "../MyButtons/MyButtons";
import { OverlayBg2, OverlayBg3, OverlayBg7 } from "../OverlayBg/OverlayBg";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./WorkProcess.css";
// import { useNavigate } from "react-router-dom";

const WorkProcess = () => {
  // const navigate = useNavigate();
  return (
    <div className="WorkProcess position-relative">
      <div className="container">
        <SectionTitle style={{ textAlign: "center" }}>
          <h6>Working Process</h6>
          <h2>How we works? </h2>
        </SectionTitle>
        <div className="WorkProcess-cards">
          <div className="WorkProcess-card shadow-lg bg-light">
            <h1>01</h1>
            <div>
              <h5>Family-Centered Approach</h5>
              <p>
              We understand the importance of involving families in the care and development of their children. We actively engage parents and caregivers in the decision-making process, providing support, guidance, and resources to empower them to play an active role in their child's journey.
              </p>
            </div>
            {/* <MyButtonLg
              action={() => navigate("/service")}
              style={{
                background: "#F17732",
               
                width: "150px",
                padding: "10px 0",
              }}
            >
              view more
            </MyButtonLg> */}
          </div>
          <div className="WorkProcess-card active shadow-lg bg-light">
            <h1>02</h1>
            <div>
              <h5>Continuous Monitoring and Support</h5>
              <p>
              Our commitment to children's well-being extends beyond initial assessments and interventions. We provide ongoing monitoring and support to track progress, address emerging needs, and make adjustments to care plans as necessary. Additionally, we offer resources and guidance to families to support them in their journey beyond our sessions.
              </p>
            </div>
            {/* <MyButtonLg
              action={() => navigate("/service")}
              style={{
                background: "#F8F9FA",
                color: "#F17732",
                width: "150px",
                padding: "10px 0",
              }}
            >
              view more
            </MyButtonLg> */}
          </div>
          <div className="WorkProcess-card shadow-lg bg-light">
            <h1>03</h1>
            <div>
              <h5>Evidence-Based Practices</h5>
              <p>
              Our methodologies are grounded in the latest research and evidence-based practices in child development and psychology. We continually update our knowledge and techniques to ensure that we are providing the most effective interventions for children under our care.
              </p>
            </div>
            {/* <MyButtonLg
              action={() => navigate("/contact")}
              style={{
                background: "#F17732",
              
                width: "150px",
                padding: "10px 0",
              }}
            >
              view more
            </MyButtonLg> */}
          </div>
        </div>
      </div>
      {/* for overlay background */}
      <OverlayBg3 style={{ top: "20%", right: "5%" }} />
      <OverlayBg7 style={{ top: "15%", right: "50%" }} />
      <OverlayBg2 style={{ bottom: "0", left: "5%" }} />
    </div>
  );
};

export default WorkProcess;
