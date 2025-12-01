<div class="container my-4">
  <h1 class="mb-3">🏠 BevoBnB: Full-Stack Lodging Marketplace Web App</h1>
  <p class="lead">
    Academic capstone project for MIS 333K, where I built a fully functional, role-based lodging marketplace
    with real-world business logic, secure authentication, and Azure deployment.
  </p>

  <p><strong>Project Type:</strong> Academic Capstone — MIS 333K, UT Austin<br/>
     <strong>Stack:</strong> ASP.NET Core MVC · SQL Server · C# · Microsoft Identity · Azure</p>

  <hr/>

  <h2>🎯 Project Goal</h2>
  <p>
    Design and implement a full-featured lodging platform for the fictional startup <strong>BevoBnB</strong>,
    simulating real-world engineering constraints: secure authentication, conflict-aware reservation logic,
    scalable database architecture, multi-role permissions, and end-to-end deployment.
  </p>

  <p>
    The project emphasized production-grade engineering practices including data validation, error handling,
    pricing logic, business rules, and integrity across thousands of seeded records.
  </p>

  <hr/>

  <h2>🧩 System Overview</h2>
  <p>
    BevoBnB supports three distinct user roles—each with its own permissions and workflow:
  </p>

  <h3>👤 Customers</h3>
  <ul>
    <li>Search properties by date, location, price, rating, and features</li>
    <li>Book non-overlapping stays with dynamic pricing and discount rules</li>
    <li>Leave 1–5 star editable reviews with optional descriptions</li>
    <li>Access full reservation history and cancel future stays</li>
  </ul>

  <h3>🏡 Hosts</h3>
  <ul>
    <li>Create and manage multiple property listings with weekday/weekend pricing</li>
    <li>Set long-stay discounts, cleaning fees, and soft-delete (disable) listings</li>
    <li>Block unavailable dates and manage upcoming reservations</li>
    <li>Dispute reviews and view earnings reports by stay or date range</li>
  </ul>

  <h3>🛠️ Administrators</h3>
  <ul>
    <li>Manage all user accounts: customers, hosts, and other admins</li>
    <li>Approve new listings and mediate review disputes</li>
    <li>Access platform-wide reporting on revenue, commission, and reservation trends</li>
  </ul>

  <hr/>

  <h2>🛠️ Technical Implementation Highlights</h2>
  <ul>
    <li>Implemented <strong>Microsoft Identity</strong> for secure authentication, password hashing, and RBAC</li>
    <li>Designed a relational database in <strong>SQL Server</strong> with dozens of entities and seeded data</li>
    <li>Built a <strong>conflict-aware reservation engine</strong> preventing overlapping stays across all bookings</li>
    <li>Created a <strong>dynamic pricing model</strong> with discounts, cleaning fees, service fees, and tax</li>
    <li>Implemented <strong>soft deletion</strong> for properties to maintain historical integrity</li>
    <li>Developed administrative dashboards for earnings, payouts, and platform-level KPIs</li>
    <li>Deployed the entire solution to <strong>Azure App Service</strong> connected to an <strong>Azure SQL Database</strong></li>
  </ul>

  <hr/>

  <h2>🧠 What I Learned</h2>
  <ul>
    <li>Full-stack development using C#, MVC architecture, and dependency injection</li>
    <li>Relational database design with entity relationships, seed data, and SQL constraints</li>
    <li>Implementing and enforcing <strong>role-based access control</strong> at scale</li>
    <li>Designing reservation logic that prevents race conditions and date conflicts</li>
    <li>Deploying an enterprise-style application using Azure cloud services</li>
    <li>Applying professional engineering practices: modular code, validation, error handling, and documentation</li>
  </ul>

  <hr/>

  <h2>🌐 Hosting &amp; Demo</h2>
  <p>
    The full application was deployed via Azure App Service with a live SQL Server backend.
    The final submission included:
  </p>
  <ul>
    <li>Complete Visual Studio solution and source code</li>
    <li>Azure-hosted demo environment</li>
    <li>Database-backed features using seeded Excel data</li>
  </ul>
</div>
