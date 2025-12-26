---
layout: default
title: Smart Doc Approver – Agentic Receipt Pipeline (Ensembled ML + LangGraph)
---

<div class="container my-4">
  <h1 class="mb-3">Smart Doc Approver: Agentic Receipt Pipeline</h1>
  <p class="lead">
    Built an agentic, multi-model receipt processing system that classifies documents, runs OCR, extracts key fields,
    detects anomalies, and routes each receipt to approve, reject, or human review using confidence-based decisioning.
  </p>

  <p><strong>Project Type:</strong> Advanced Machine Learning Project — UT Austin (MIS 382N)<br/>
     <strong>Team:</strong> Emily Caraher · Luke Hartfield · John MacDonald · Michael Ovassapian · Raghu Subramanian<br/>
     <strong>Stack:</strong> Python · PyTorch · Hugging Face · LangGraph · Gradio · OCR Tooling · Tree/Ensemble Models</p>

  <hr/>

  <h2 class="mt-4">Overview</h2>
  <p>
    Smart Doc Approver was designed to behave like a human analyst reviewing receipts: first determining whether an image
    is actually a receipt, then extracting key fields (vendor, date, total), checking for suspicious behavior, and making
    an approval decision. Instead of relying on a single model, the system uses ensembles, confidence signals, and an
    agentic workflow to handle edge cases and continually improve via human feedback. 
  </p>

  <hr/>

  <h2 class="mt-4">Problem</h2>
  <p>
    Manual receipt review is time-consuming, error-prone, and brittle when formats vary (photos, scans, PDFs, skewed
    images, missing fields). Traditional pipelines often break on edge cases and do not learn from corrections. This
    project aimed to build a system that is adaptive, composable, and feedback-aware.
  </p>

  <hr/>

  <h2 class="mt-4">System Architecture</h2>
  <p>
    The pipeline is structured as an agentic state machine that routes each document through stages using intermediate
    confidence scores and validation checks:
  </p>
  <ul>
    <li><strong>Classify:</strong> receipt vs non-receipt (document classification ensemble)</li>
    <li><strong>OCR:</strong> extract text and bounding boxes (OCR ensemble with retries)</li>
    <li><strong>Extract:</strong> vendor/date/total (LayoutLM-based extraction + rules + NER)</li>
    <li><strong>Validate:</strong> business-rule checks for missing/invalid fields</li>
    <li><strong>Anomaly:</strong> flag suspicious receipts (anomaly detection ensemble)</li>
    <li><strong>Decide:</strong> approve / review / reject (LangGraph routing)</li>
    <li><strong>Feedback loop:</strong> human corrections update patterns and weights over time</li>
  </ul>

  <p class="mt-3">
    If you have a clean architecture diagram screenshot saved, add it here (recommended):
  </p>
  <!--
  <img src="{{ '/assets/smartdoc/agentic-flow.png' | relative_url }}"
       alt="Smart Doc Approver pipeline diagram"
       class="img-fluid rounded shadow-sm mt-2" />
  -->

  <hr/>

  <h2 class="mt-4">Data</h2>
  <ul>
    <li><strong>RVL-CDIP:</strong> used for robust document classification (receipt vs non-receipt)</li>
    <li><strong>SROIE:</strong> receipt dataset with labeled fields (vendor/date/total) for supervised extraction</li>
    <li><strong>CORD:</strong> layout diversity for improving extraction generalization</li>
  </ul>
  <p>
    We also generated synthetic tabular logs for anomaly detection and incorporated human feedback collected through a
    Gradio interface to refine patterns and improve routing.
  </p>

  <hr/>

  <h2 class="mt-4">Modeling Approach</h2>

  <h3 class="mt-3">Document Classification</h3>
  <ul>
    <li>Stacked vision models (ResNet-18 + ViT-Tiny) to classify receipt vs non-receipt</li>
    <li>Combined strengths of texture/visual cues (ResNet) and layout understanding (ViT)</li>
    <li>Reported strong ensemble performance compared to individual models</li>
  </ul>

  <h3 class="mt-3">OCR Ensemble</h3>
  <ul>
    <li>Primary OCR with EasyOCR for speed and bounding boxes</li>
    <li>Fallback “deep OCR” retries (e.g., TrOCR / PaddleOCR / Tesseract) when confidence drops</li>
    <li>Confidence-driven routing to avoid expensive OCR runs unless needed</li>
  </ul>

  <h3 class="mt-3">Field Extraction</h3>
  <ul>
    <li>LayoutLMv3-based token classification for vendor/date/total extraction</li>
    <li>Rule-based support (regex for dates/currency) and position heuristics</li>
    <li>Lightweight NER checks to resolve conflicts and stabilize predictions</li>
  </ul>

  <h3 class="mt-3">Anomaly Detection</h3>
  <ul>
    <li>Ensemble anomaly detection using methods including Isolation Forest, gradient-boosting variants, and one-class models</li>
    <li>Majority vote / weighted decisions to reduce false alarms and improve robustness</li>
  </ul>

  <h3 class="mt-3">Agentic Orchestration</h3>
  <ul>
    <li>LangGraph state machine controlling the pipeline with shared state and conditional edges</li>
    <li>Routes documents based on confidence thresholds and validation outcomes (approve / review / reject)</li>
    <li>Human-in-the-loop feedback updates patterns and improves future runs</li>
  </ul>

  <hr/>

  <h2 class="mt-4">Results</h2>
  <p>
    The report shows ensemble-driven improvements across components and overall decision accuracy. In evaluation,
    the system demonstrated strong end-to-end performance with an agentic flow that reduces unnecessary compute and
    routes uncertain cases to review.
  </p>

  <ul>
    <li><strong>Pipeline decision accuracy:</strong> improved to ~91% with the ensemble approach</li>
    <li><strong>Field extraction:</strong> improved to ~79% F1 with the ensemble approach</li>
    <li><strong>Anomaly detection:</strong> improved to ~91% with the ensemble approach</li>
    <li><strong>Operational routing:</strong> across 1,000 receipts, ~65% auto-approved, ~25% routed to review, ~10% rejected</li>
  </ul>

  <hr/>

  <h2 class="mt-4">What Made It “Agentic”</h2>
  <ul>
    <li><strong>Adaptive:</strong> retries low-confidence steps (e.g., enhanced OCR) instead of failing</li>
    <li><strong>Stateful:</strong> maintains shared state across nodes for explainability and routing</li>
    <li><strong>Composable:</strong> each stage can be swapped or improved without rebuilding the entire system</li>
    <li><strong>Feedback-aware:</strong> human corrections become learning signals for future runs</li>
  </ul>

  <hr/>

  <h2 class="mt-4">Considerations and Next Steps</h2>
  <ul>
    <li>Field extraction remains sensitive to irregular or stylized receipts (logos, multi-currency, long restaurant receipts)</li>
    <li>Multi-page invoices were not yet supported in the current version</li>
    <li>Improving training data diversity and adding multi-page handling would increase robustness</li>
    <li>Future work could incorporate more targeted active learning from borderline cases</li>
  </ul>

  <hr/>

<hr/>

<h2 class="mt-4">Links</h2>
<ul>
  <li>
    <strong>Live Demo:</strong>
    <a href="https://huggingface.co/spaces/Rogue2003/Receipt_Agent" target="_blank">
      Hugging Face Spaces – Receipt Agent
    </a>
  </li>
  <li>
    <strong>Medium Article:</strong>
    <a href="https://medium.com/@lukehartfield_25231/smart-doc-approver-building-an-agentic-receipt-pipeline-that-actually-works-79ad74614854"
       target="_blank">
      Smart Doc Approver: Building an Agentic Receipt Pipeline That Actually Works
    </a>
  </li>
  <li>
    <strong>Source Code:</strong>
    <a href="https://github.com/lukehartfield/SmartDocApprover" target="_blank">
      GitHub – SmartDocApprover
    </a>
  </li>
</ul>

<hr/>
<p class="mt-3">
  <strong>Full code, demo, and report:</strong>
  <a href="https://github.com/lukehartfield/SmartDocApprover" target="_blank">Available here</a>.
</p>

<p class="mt-4">
  <a class="btn btn-outline-secondary" href="{{ '/projects/' | relative_url }}">
    ← Back to Projects
  </a>
</p>


  <hr/>
  <p class="mt-3">
    <strong>Full code and report:</strong> available via the links above.
  </p>

  <p class="mt-4">
    <a class="btn btn-outline-secondary" href="{{ '/projects/' | relative_url }}">
      ← Back to Projects
    </a>
  </p>
</div>
