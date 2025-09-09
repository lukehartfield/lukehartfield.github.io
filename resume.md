---
layout: default
title: Resume
redirect_from:
  - /Home/Resume
  - /Home/DownloadResume
---

<div class="row justify-content-center">
  <div class="col-md-6">
    <div class="photo-box">
      <img class="img-fluid rounded"
           src="{{ '/assets/images/resumephoto.jpg' | relative_url }}"
           alt="Luke Hartfield">
    </div>
  </div>
</div>

<div class="text-center my-4">
  <a class="btn btn-primary"
     href="{{ '/Resume.pdf' | relative_url }}"
     download>
     Download Resume
  </a>
  <a class="btn btn-outline-secondary"
     href="{{ '/Resume.pdf' | relative_url }}"
     target="_blank" rel="noopener">
     Open PDF
  </a>
</div>

<!-- Inline viewer (optional) -->
<div class="container">
  <object data="{{ '/Resume.pdf' | relative_url }}" type="application/pdf" width="100%" height="900">
    <p>If the PDF doesn’t display, <a href="{{ '/Resume.pdf' | relative_url }}">open it here</a>.</p>
  </object>
</div>
