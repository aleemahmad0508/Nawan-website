import PageHero from '../components/PageHero.jsx'
import { nawanVillageProfile } from '../data/siteData.js'

import hero_image from '../assets/images/beuti2.png'

function InfoCard({ title, children }) {
  return (
    <div className="about-info-card">
      <h3>{title}</h3>
      {children}
    </div>
  )
}

function DataGrid({ data }) {
  return (
    <div className="about-data-grid">
      {Object.entries(data).map(([key, value]) => (
        <div className="about-data-item" key={key}>
          <span className="about-data-label">
            {key
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, (str) => str.toUpperCase())}
          </span>

          <strong>{value}</strong>
        </div>
      ))}
    </div>
  )
}

function ListSection({ items }) {
  return (
    <ul className="about-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

function About() {
  const {
    basicInformation,
    population,
    livelihoods,
    education,
    health,
    wash,
    infrastructure,
    agriculture,
    environment,
    vulnerableGroups,
    communityOrganizations,
    priorityNeeds,
    communityAssets,
    disasterPreparedness,
    waterSupplyAssessment,
    communityRecommendations,
    existingProjects,
    surveyValidation,
    waterSupplyFundraising,
  } = nawanVillageProfile

  return (
    <>
      <PageHero
        eyebrow="About Nawan"
        title="Nawan Village Profile"
        image={hero_image}
      />

      {/* INTRODUCTION */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Our Village</p>

            <h2>About Nawan</h2>

            <p>
              Nawan is a village in Mianwali District, Punjab, with a
              population of approximately 3,000 people and around 400
              households. Agriculture is the primary source of livelihood,
              while education, healthcare, water supply and infrastructure
              remain important areas for community development.
            </p>
          </div>

          {/* BASIC INFORMATION */}
          <InfoCard title="Basic Information">
            <DataGrid data={basicInformation} />
          </InfoCard>
        </div>
      </section>

      {/* POPULATION */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Community</p>
            <h2>Population & Demographics</h2>
            <p>
              An overview of Nawan's population, households and demographic
              structure.
            </p>
          </div>

          <InfoCard title="Population">
            <DataGrid data={population} />
          </InfoCard>
        </div>
      </section>

      {/* LIVELIHOODS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Economy</p>
            <h2>Livelihoods & Agriculture</h2>
            <p>
              Agriculture plays a central role in the economic life of Nawan.
            </p>
          </div>

          <InfoCard title="Livelihoods">
            <DataGrid data={livelihoods} />
          </InfoCard>

          <InfoCard title="Agriculture">
            <DataGrid data={agriculture} />
          </InfoCard>
        </div>
      </section>

      {/* EDUCATION & HEALTH */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Human Development</p>
            <h2>Education & Health</h2>
          </div>

          <div className="about-two-column">
            <InfoCard title="Education">
              <DataGrid data={education} />
            </InfoCard>

            <InfoCard title="Health">
              <DataGrid data={health} />
            </InfoCard>
          </div>
        </div>
      </section>

      {/* WASH */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Water & Sanitation</p>
            <h2>WASH Conditions</h2>
            <p>
              Water availability is one of the most important development
              concerns identified in the village assessment.
            </p>
          </div>

          <InfoCard title="Water, Sanitation & Hygiene">
            <DataGrid data={wash} />
          </InfoCard>
        </div>
      </section>

      {/* WATER SUPPLY */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Water Supply</p>
            <h2>Water Supply & Borehole Assessment</h2>
            <p>
              The assessment identifies water supply as the highest priority
              need for Nawan.
            </p>
          </div>

          <InfoCard title="Current Water Situation">
            <DataGrid data={waterSupplyAssessment} />
          </InfoCard>

          <div className="about-highlight">
            <h3>Water Supply Priority</h3>

            <p>
              Nawan's main reported water source is a natural fountain. The
              recorded water quality value is 411 TDS, while groundwater
              availability is reported as a concern. The community assessment
              identifies reliable drinking water as the number one priority.
            </p>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Development</p>
            <h2>Infrastructure</h2>
          </div>

          <InfoCard title="Village Infrastructure">
            <DataGrid data={infrastructure} />
          </InfoCard>
        </div>
      </section>

      {/* ENVIRONMENT */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Environment</p>
            <h2>Environment & Climate</h2>
          </div>

          <InfoCard title="Environmental Conditions">
            <DataGrid data={environment} />
          </InfoCard>
        </div>
      </section>

      {/* VULNERABLE GROUPS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Community Support</p>
            <h2>Vulnerable Groups</h2>
            <p>
              The assessment highlights several groups that may require
              additional community support and development assistance.
            </p>
          </div>

          <InfoCard title="Vulnerable Groups">
            <DataGrid data={vulnerableGroups} />
          </InfoCard>
        </div>
      </section>

      {/* COMMUNITY ORGANIZATIONS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Community</p>
            <h2>Community Organizations</h2>
          </div>

          <InfoCard title="Local Organizations">
            <DataGrid data={communityOrganizations} />
          </InfoCard>
        </div>
      </section>

      {/* PRIORITY NEEDS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">What Nawan Needs</p>
            <h2>Priority Development Needs</h2>
            <p>
              The following priorities were identified through the village
              assessment.
            </p>
          </div>

          <div className="priority-grid">
            {priorityNeeds.map((need, index) => (
              <div className="priority-card" key={need}>
                <span>0{index + 1}</span>
                <h3>{need}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY ASSETS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Existing Resources</p>
            <h2>Community Assets</h2>
          </div>

          <InfoCard title="Available Community Assets">
            <DataGrid data={communityAssets} />
          </InfoCard>
        </div>
      </section>

      {/* DISASTER PREPAREDNESS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Resilience</p>
            <h2>Disaster Preparedness</h2>
          </div>

          <InfoCard title="Preparedness Assessment">
            <DataGrid data={disasterPreparedness} />
          </InfoCard>
        </div>
      </section>

      {/* RECOMMENDATIONS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Looking Forward</p>
            <h2>Community Recommendations</h2>
            <p>
              The following issues and solutions summarize the major development
              recommendations for Nawan.
            </p>
          </div>

          <div className="about-two-column">
            <InfoCard title="Key Issues">
              <ListSection items={communityRecommendations.keyIssues} />
            </InfoCard>

            <InfoCard title="Proposed Solutions">
              <ListSection items={communityRecommendations.proposedSolutions} />
            </InfoCard>
          </div>

          <div className="about-highlight">
            <h3>Support Requested</h3>
            <p>{communityRecommendations.supportRequested}</p>
          </div>
        </div>
      </section>

      {/* EXISTING PROJECTS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Projects</p>
            <h2>Existing Projects</h2>
          </div>

          <InfoCard title="Project Status">
            <p>{existingProjects.status}</p>
          </InfoCard>
        </div>
      </section>

      {/* FUNDRAISING */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Community Fundraising</p>

            <h2>{waterSupplyFundraising.title}</h2>

            <p>
              Day {waterSupplyFundraising.day} fundraising figures for the
              Nawan water-supply initiative.
            </p>
          </div>

          <div className="about-finance-grid">
            <div className="finance-card">
              <span>Water Supply Donations</span>
              <strong>
                PKR{' '}
                {waterSupplyFundraising.totalWaterSupplyDonations.toLocaleString()}
              </strong>
            </div>

            <div className="finance-card">
              <span>Water Supply Expenses</span>
              <strong>
                PKR{' '}
                {waterSupplyFundraising.totalWaterSupplyExpenses.toLocaleString()}
              </strong>
            </div>

            <div className="finance-card">
              <span>Water Supply Balance</span>
              <strong>
                PKR{' '}
                {waterSupplyFundraising.remainingWaterSupplyBalance.toLocaleString()}
              </strong>
            </div>

            <div className="finance-card">
              <span>Food Donations</span>
              <strong>
                PKR{' '}
                {waterSupplyFundraising.totalFoodDonations.toLocaleString()}
              </strong>
            </div>

            <div className="finance-card">
              <span>Food Expenses</span>
              <strong>
                PKR{' '}
                {waterSupplyFundraising.totalFoodExpenses.toLocaleString()}
              </strong>
            </div>

            <div className="finance-card">
              <span>Food Balance</span>
              <strong>
                PKR{' '}
                {waterSupplyFundraising.remainingFoodBalance.toLocaleString()}
              </strong>
            </div>
          </div>

          <div className="about-highlight">
            <h3>Water Supply Fund</h3>

            <p>
              PKR{' '}
              {waterSupplyFundraising.remainingWaterSupplyBalance.toLocaleString()}{' '}
              is reported as the remaining water-supply balance from the
              provided fundraising data.
            </p>
          </div>
        </div>
      </section>

      {/* SURVEY VALIDATION */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Assessment</p>
            <h2>Survey Validation</h2>
          </div>

          <InfoCard title="Validation Information">
            <DataGrid data={surveyValidation} />
          </InfoCard>
        </div>
      </section>

      {/* FINAL SUMMARY */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Nawan Today</p>

            <h2>Building a Better Future for Nawan</h2>

            <p>
              Nawan is a community with strong agricultural roots, active
              community organizations and important local assets. The
              assessment highlights drinking water, healthcare, education,
              connectivity and basic infrastructure as key areas for future
              development.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About