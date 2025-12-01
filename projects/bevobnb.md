

<div class="container my-4">
  <h1 class="mb-3">BevoBnB: Full-Stack Lodging Marketplace Web App</h1>
  <p class="lead">
    Academic capstone project for MIS 333K where I built a complete lodging marketplace with secure authentication, 
    role-based workflows, reservation conflict logic, and Azure deployment.
  </p>

  <p><strong>Project Type:</strong> Academic Capstone — MIS 333K, UT Austin<br/>
     <strong>Stack:</strong> ASP.NET Core MVC · SQL Server · C# · Microsoft Identity · Azure</p>

  <hr/>

  <h2>Project Goal</h2>
  <p>
    The objective of BevoBnB was to design and implement a production-style lodging platform for a fictional startup, 
    with full support for multi-role user flows, secure authentication, and real business logic governing pricing, 
    reservations, and reviews. The project simulated real-world engineering constraints and emphasized software 
    engineering best practices.
  </p>

  <hr/>

  <h2>System Overview</h2>

  <h3>Customer Capabilities</h3>
  <ul>
    <li>Search properties by availability, location, price, rating, and amenities</li>
    <li>Book non-overlapping stays with dynamic pricing and discounts</li>
    <li>Leave editable 1–5 star reviews with optional descriptions</li>
    <li>View reservation history and cancel eligible future stays</li>
  </ul>

  <h3>Host Capabilities</h3>
  <ul>
    <li>Create and manage multiple property listings with weekday/weekend pricing</li>
    <li>Set long-stay discounts, cleaning fees, and soft-delete properties</li>
    <li>Block unavailable dates and manage future reservations</li>
    <li>Dispute reviews and view earnings reports</li>
  </ul>

  <h3>Administrator Capabilities</h3>
  <ul>
    <li>Manage all user accounts, including customers, hosts, and administrators</li>
    <li>Approve listings and mediate review disputes</li>
    <li>View platform-wide analytics including revenue and reservation trends</li>
  </ul>

  <hr/>

  <h2>Technical Implementation</h2>
  <ul>
    <li>Implemented Microsoft Identity for secure authentication and role-based access</li>
    <li>Designed a relational SQL Server database with seeded data and referential integrity</li>
    <li>Built a conflict-aware reservation engine preventing overlapping stays</li>
    <li>Developed dynamic pricing logic incorporating discounts, fees, and taxes</li>
    <li>Implemented soft deletion to maintain historical data integrity</li>
    <li>Created admin dashboards for revenue and operational analytics</li>
    <li>Deployed the application to Azure App Service with a connected Azure SQL Database</li>
  </ul>

  <hr/>

  <h2>What I Learned</h2>
  <ul>
    <li>Full-stack development using C# and ASP.NET Core MVC</li>
    <li>Relational database design and SQL query optimization</li>
    <li>Implementing secure RBAC with Microsoft Identity</li>
    <li>Designing reservation systems that prevent race conditions and double-bookings</li>
    <li>Deploying cloud applications using Azure services</li>
    <li>Writing modular, maintainable, and production-ready code</li>
  </ul>

  <hr/>

  <h2>Hosting and Demo</h2>
  <ul>
    <li>Deployed to Azure App Service with a live SQL backend</li>
    <li>Produced a complete Visual Studio solution as part of the final submission</li>
    <li>Integrated seeded Excel-based datasets to simulate real marketplace data</li>
  </ul>
</div>
