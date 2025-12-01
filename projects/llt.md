---
layout: default
title: Ladies Let’s Talk – EPP Volunteer Matching & Automation System
---

<div class="container my-4">
  <h1 class="mb-3">Ladies Let’s Talk: EPP Volunteer Matching &amp; Automation System</h1>
  <p class="lead">
    Client-facing capstone project where I led project management, solution architecture, and development
    to automate learner–volunteer matching for the English Practice Partners program.
  </p>

  <p><strong>Project Type:</strong> Client-Facing Software Delivery – MIS 374 Capstone<br/>
  <strong>Roles:</strong> Project Manager · Solutions Architect · Lead Developer<br/>
  <strong>Tech Stack:</strong> Airtable · JavaScript · Automation Scripts · Trello · Slack · Google Drive</p>

  <hr/>

  <h2>🎯 Project Goal</h2>
  <p>
    The English Practice Partners (EPP) program at Ladies Let’s Talk pairs immigrant and refugee women
    with volunteer English-speaking partners. The process was previously run through Google Forms and
    spreadsheets, making it slow, error-prone, and hard to scale.
  </p>
  <p>
    Our goal was to replace this manual workflow with a fully automated, scalable system that:
  </p>
  <ul>
    <li>Reduces administrative overhead and manual data wrangling</li>
    <li>Improves data consistency and visibility across cohorts</li>
    <li>Automatically matches learners and volunteers based on availability, location, and preferences</li>
    <li>Can be operated and maintained by non-technical staff</li>
  </ul>

  <h2>🧩 End-to-End Solution Overview</h2>
  <p>
    I led the project from kickoff through deployment as Project Manager, Solutions Architect, and Lead Developer.
    I owned client communication, sprint planning, and technical design, and I implemented the core system in Airtable.
  </p>
  <p>
    We delivered a live Airtable-based automation platform with:
  </p>
  <ul>
    <li>Validated intake forms for learners and volunteers</li>
    <li>Multiple matching algorithms implemented in JavaScript</li>
    <li>Automated email workflows triggered from match records</li>
    <li>Cohort-aware logic and archival scripts</li>
    <li>Interactive dashboards to monitor progress and unmatched users</li>
  </ul>
  <p>
    In the most recent cohort, the system successfully matched more than 198 learners and volunteers and is now run
    directly by Ladies Let’s Talk staff.
  </p>

  <h2>🧭 My Role: Project Manager &amp; Solutions Architect</h2>

  <h3>Project Management</h3>
  <ul>
    <li>Ran weekly client meetings to gather requirements and align on scope and priorities</li>
    <li>Planned and managed sprints, tracked work in Trello, and coordinated the team via Slack</li>
    <li>Managed timelines, facilitated UAT sessions, and incorporated client feedback into releases</li>
    <li>Owned communication between client stakeholders and the development team from start to finish</li>
  </ul>

  <h3>Solutions Architecture</h3>
  <ul>
    <li>Designed the end-to-end data model (ERD) across Learner, Volunteer, Match, Cohort, and Master tables</li>
    <li>Defined matching criteria, scoring logic, and fallback strategies for different matching modes</li>
    <li>Architected the full workflow: intake → matching → email automation → cohort close-out → archival</li>
    <li>Established configuration patterns so LLT can adjust behavior without editing code</li>
  </ul>

  <h2>🔧 Core Features Delivered</h2>
  <ul>
    <li><strong>Structured Learner &amp; Volunteer Forms</strong> with field validation and automatic population into normalized Airtable tables</li>
    <li><strong>Three Matching Algorithms</strong>:
      <ul>
        <li>Preferred Partner Matching</li>
        <li>Randomized Matching</li>
        <li>Location &amp; Availability-Based Matching</li>
      </ul>
    </li>
    <li><strong>Automated Email Workflows</strong> triggered when matches are created, sending introductions and follow-ups</li>
    <li><strong>Match Pool &amp; Status Tracking</strong> to prevent double-matching and keep visibility on unmatched learners</li>
    <li><strong>Cohort Management Tools</strong> to control who participates in each cycle and track progress through the cohort</li>
    <li><strong>Master Table Archival Scripts</strong> to copy end-of-cohort data into long-term archive tables</li>
    <li><strong>Interactive Dashboards</strong> for real-time monitoring of match counts, unmatched records, and key program metrics</li>
  </ul>

  <h2>🧪 Testing &amp; Validation</h2>
  <ul>
    <li>Tested 90%+ of defined user stories, including edge cases and larger data volumes</li>
    <li>Achieved a 98.7% match completion rate on the most recent cohort</li>
    <li>Reached 100% preferred-partner matching accuracy when valid partner names were provided</li>
    <li>Validated behavior with live UAT sessions, Slack feedback loops, and LLT staff running real scenarios</li>
  </ul>

  <h2>📦 Sustainability &amp; Handoff</h2>
  <ul>
    <li>Built role-specific training for program staff, power users, and future developers</li>
    <li>Delivered written manuals, configuration guides, and recorded walkthroughs</li>
    <li>Structured the codebase and automations to be modular and easy to update</li>
    <li>Outlined future improvements such as more robust form validation, base unification, and expanded reporting</li>
  </ul>

  <h2>💡 Impact</h2>
  <ul>
    <li>Reduced matching from hours of manual work to minutes with automated scripts</li>
    <li>Eliminated many sources of human error by enforcing data validation and standardized flows</li>
    <li>Enabled Ladies Let’s Talk to independently run and scale new cohorts without relying on a developer</li>
    <li>Created a repeatable, low-cost model that can be extended to other LLT programs</li>
  </ul>

  <h2>👨‍💻 What I Learned</h2>
  <ul>
    <li>How to lead a client-facing technical project end-to-end as both PM and architect</li>
    <li>How to design production-grade Airtable systems with scripting, automations, and interfaces</li>
    <li>How to build multi-tier matching logic that balances preferences with real operational constraints</li>
    <li>How to design tools and documentation so non-technical users can confidently operate and maintain the system</li>
  </ul>
</div>
