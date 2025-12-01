---
layout: default
title: Ladies Let’s Talk – EPP Matching & Automation System
---

<div class="container my-4">
  <h1 class="mb-3">Ladies Let’s Talk – English Practice Partners Automation</h1>
  <p class="lead">
    Built an end-to-end Airtable system to automate learner–volunteer matching, emails, and reporting
    for a non-profit serving immigrant and refugee women.
  </p>

  <div class="row mb-4">
    <div class="col-md-6">
      <h3>Project at a Glance</h3>
      <ul>
        <li><strong>Client:</strong> Ladies Let’s Talk – English Practice Partners (EPP)</li>
        <li><strong>Scale:</strong> 1,600+ learners, 900+ volunteers supported since launch</li>
        <li><strong>My role:</strong> Solution architect & developer (matching, automations, dashboards, docs)</li>
        <li><strong>Tech:</strong> Airtable (bases, forms, interfaces, automations), JavaScript scripting, Gmail integration</li>
      </ul>
    </div>
    <div class="col-md-6">
      <h3>Outcome</h3>
      <p>
        The system is live and supporting cohorts with ~200 automated learner–volunteer matches per cycle,
        including email workflows, archival scripts, and a real-time dashboard – eliminating the prior
        manual Google Sheets/Forms process and removing the coordinator bottleneck. :contentReference[oaicite:0]{index=0} :contentReference[oaicite:1]{index=1}
      </p>
    </div>
  </div>

  <hr/>

  <h2>The Problem</h2>
  <p>
    EPP pairs immigrant and refugee women with volunteer English partners. The team was managing
    intake, matching, and communication through Google Forms and spreadsheets, which did not scale
    with 1,600+ learners and 900+ volunteers. Matching was done by hand, communication was manual,
    and there was no reliable way to track cohorts or report on program outcomes. :contentReference[oaicite:2]{index=2}
  </p>

  <h2>Solution Overview</h2>
  <p>
    We designed and implemented an Airtable-based platform that turns EPP into a repeatable,
    cohort-driven workflow: structured intake, scripted matching, automated emails, and master
    tables powering a reporting dashboard and long-term analytics. :contentReference[oaicite:3]{index=3}
  </p>

  <h3>Key Capabilities</h3>
  <ul>
    <li><strong>Structured intake forms</strong> for learners and volunteers with field validation and automatic population of normalized tables (Learner, Volunteer, Match). :contentReference[oaicite:4]{index=4}</li>
    <li><strong>Configurable matching engine</strong> using multiple JavaScript algorithms:
      Preferred Partner, Global Best Match, Randomized + Location-Weighted, Least/Most Availability First. :contentReference[oaicite:5]{index=5}
    </li>
    <li><strong>Match pool logic</strong> to prevent double-matching and support manual overrides while keeping learners/volunteers in or out of the pool via a “Matched” status. :contentReference[oaicite:6]{index=6}</li>
    <li><strong>Automated email workflows</strong> (match notifications, 2-week reminders, final emails) triggered from the Match table, with dynamic merge fields for each pair and Gmail-backed delivery. :contentReference[oaicite:7]{index=7} :contentReference[oaicite:8]{index=8}</li>
    <li><strong>Cohort management & archival</strong> using a Cohort Information table, cohort-aware automations, and scripts that move finished cohorts into Master tables for long-term history. :contentReference[oaicite:9]{index=9} :contentReference[oaicite:10]{index=10}</li>
    <li><strong>Real-time dashboard</strong> in Airtable Interfaces showing current-cohort and all-time metrics (matches by state, unmatched learners, etc.), with filters and print-ready charts. :contentReference[oaicite:11]{index=11} :contentReference[oaicite:12]{index=12}</li>
    <li><strong>Production-grade operations model</strong> with go-live checklist, configuration standards, backup/restore guidance, and environment practices. :contentReference[oaicite:13]{index=13}</li>
  </ul>

  <h2>What I Built</h2>
  <ul>
    <li>Designed the end-to-end Airtable architecture (ERD, tables, forms, interfaces) and wrote the solution architect materials, including to-be diagrams, environments, and go-live runbook.</li>
    <li>Implemented and iterated on the JavaScript matching scripts in the EPP Matching extension, including location-weighted and availability-aware scoring, plus preferred-partner fuzzy matching. :contentReference[oaicite:14]{index=14}</li>
    <li>Configured Airtable Automations for match notifications and follow-up emails, with dynamic subjects/bodies that pull learner/volunteer names, availability, and cohort context from the Match table. :contentReference[oaicite:15]{index=15}</li>
    <li>Built the cohort-tracking and master-table scripts that safely copy learner, volunteer, and match records into archive tables at the end of each cohort without breaking relationships. :contentReference[oaicite:16]{index=16}</li>
    <li>Developed the reporting dashboard (current cohort + historical views), including filters, charts, and unmatched-learner views requested during UAT. :contentReference[oaicite:17]{index=17}</li>
    <li>Co-authored developer, super-user, and training manuals so non-technical staff can run cohorts, troubleshoot automations, and safely evolve the system over time. :contentReference[oaicite:18]{index=18} :contentReference[oaicite:19]{index=19} :contentReference[oaicite:20]{index=20}</li>
  </ul>

  <h2>Impact</h2>
  <ul>
    <li>System is live and has already supported a cohort with 198 successful matches, with automated communication and status tracking. :contentReference[oaicite:21]{index=21}</li>
    <li>Eliminated the previous manual “coordinator” bottleneck by automating intake, pairing, and email workflows; LLT staff now focus on exceptions and community-building instead of data wrangling. :contentReference[oaicite:22]{index=22}</li>
    <li>Created a repeatable end-of-cohort process (archival + dashboard refresh) that sets LLT up for longitudinal analytics across programs, not just EPP. :contentReference[oaicite:23]{index=23}</li>
    <li>Delivered role-specific training (super user vs. solution architect) and documentation so the organization can own the system without ongoing developer support. :contentReference[oaicite:24]{index=24}</li>
  </ul>

  <h2>What I Learned</h2>
  <ul>
    <li>How to treat Airtable as a real application platform: schema design, scripting, automations, and interfaces with production-style standards.</li>
    <li>Designing matching algorithms that balance “nice to have” preferences (location, partners) with hard operational constraints (availability, capacity).</li>
    <li>Building systems that non-technical users can actually maintain: defensive scripting, clear naming, backups, and heavy investment in manuals and training.</li>
  </ul>
</div>
