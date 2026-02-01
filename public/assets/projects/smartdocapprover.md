---
layout: default
title: Smart Doc Approver – Agentic Receipt Pipeline
---

<div class="container my-4">
  <h1 class="mb-3">Smart Doc Approver: Agentic Receipt Pipeline</h1>
  <p class="lead">
    An agentic, ensemble-based machine learning system for automated receipt classification,
    field extraction, anomaly detection, and approval routing.
  </p>

  <p>
    <strong>Live Demo:</strong>
    <a href="https://huggingface.co/spaces/Rogue2003/Receipt_Agent" target="_blank">
      Hugging Face Spaces
    </a><br/>
    <strong>Medium Article:</strong>
    <a href="https://medium.com/@lukehartfield_25231/smart-doc-approver-building-an-agentic-receipt-pipeline-that-actually-works-79ad74614854"
       target="_blank">
      Full Technical Writeup
    </a><br/>
    <strong>Source Code:</strong>
    <a href="https://github.com/lukehartfield/SmartDocApprover" target="_blank">
      GitHub Repository
    </a>
  </p>

  <p><strong>Project Type:</strong> Advanced Machine Learning Project — UT Austin (MIS 382N)<br/>
     <strong>Stack:</strong> Python · PyTorch · Hugging Face · LangGraph · OCR Tooling · Gradio</p>

  <hr/>

  <h2 class="mt-4">Technical Overview</h2>
  <p>
    Smart Doc Approver is designed as a modular, agentic pipeline that mimics how a human
    analyst reviews receipts. Instead of relying on a single model, the system orchestrates
    multiple specialized models and routes documents based on confidence and validation checks.
  </p>

  <ul>
    <li>Document classification using an ensemble of vision models (ResNet + ViT)</li>
    <li>OCR ensemble with confidence-based retries for difficult receipts</li>
    <li>Field extraction via LayoutLM-based token classification, rules, and NER</li>
    <li>Anomaly detection using an ensemble of unsupervised and tree-based models</li>
    <li>Agentic orchestration using LangGraph to route approve / review / reject decisions</li>
  </ul>

  <hr/>

  <h2 class="mt-4">Why an Agentic Approach</h2>
  <p>
    Traditional document pipelines fail on edge cases and lack adaptability.
    This system uses shared state, confidence thresholds, and conditional routing
    so that uncertain documents trigger additional processing or human review
    instead of hard failures.
  </p>

  <hr/>

  <h2 class="mt-4">Outcomes</h2>
  <ul>
    <li>Improved end-to-end accuracy through ensemble modeling</li>
    <li>Reduced unnecessary compute via confidence-based routing</li>
    <li>Human-in-the-loop feedback designed for continual improvement</li>
    <li>Fully interactive demo deployed via Hugging Face Spaces</li>
  </ul>

  <hr/>
  <p class="mt-3">
    <strong>Note:</strong> Detailed experiments, metrics, and architectural decisions
    are documented in the linked Medium article.
  </p>

  <p class="mt-4">
    <a class="btn btn-outline-secondary" href="{{ '/projects/' | relative_url }}">
      ← Back to Projects
    </a>
  </p>
</div>
