
<div class="container my-4">
  <h1 class="mb-3">💎 Predicting Diamond Prices Using Machine Learning</h1>
  <p class="lead">
    Data science project using tree-based ensemble models to predict diamond prices from physical and quality attributes
    on a dataset of <strong>53,940 diamonds</strong>.
  </p>

  <p><strong>Project Type:</strong> Data Science Project – University of Texas at Austin<br/>
     <strong>Stack:</strong> Python · Scikit-learn · XGBoost · Pandas · NumPy · Matplotlib/Seaborn · Jupyter</p>

  <hr/>

  <h2>📍 Overview</h2>
  <p>
    This project explored how physical characteristics and quality attributes of diamonds (carat, cut, clarity, color,
    and dimensions) influence price. Using a dataset of <strong>53,940 diamonds</strong>, we built and compared multiple
    machine learning models to predict price and analyze driver importance.
  </p>
  <p>
    The goals were:
  </p>
  <ul>
    <li>Identify which features most strongly influence diamond prices</li>
    <li>Develop a highly accurate regression model to predict future prices</li>
  </ul>

  <hr/>

  <h2>🧠 Problem Framing</h2>
  <p>
    We framed the task as a <strong>supervised regression</strong> problem:
  </p>
  <blockquote>
    Can we accurately predict the price of a diamond using its physical and quality attributes?
  </blockquote>
  <p>
    Models were evaluated using <strong>RMSE</strong>, <strong>MSE</strong>, <strong>R²</strong>, and residual analysis
    on a held-out test set (80/20 train/test split).
  </p>

  <hr/>

  <h2>🧪 Data Science Methods</h2>

  <h3>Exploratory Data Analysis (EDA)</h3>
  <ul>
    <li>Distribution plots for price, carat, and volume</li>
    <li>Correlation matrix to examine linear relationships among numeric features</li>
    <li>Grouped bar charts to compare price distributions across cut, color, and clarity levels</li>
    <li>Pairplots to visualize joint relationships between key variables</li>
  </ul>

  <h3>Feature Engineering</h3>
  <ul>
    <li><strong>Ordinal encoding</strong> for quality attributes:
      <ul>
        <li>Cut (e.g., Fair &lt; Good &lt; Very Good &lt; Premium &lt; Ideal)</li>
        <li>Color (e.g., J &lt; I &lt; … &lt; D)</li>
        <li>Clarity (e.g., I3 &lt; I2 &lt; … &lt; IF)</li>
      </ul>
    </li>
    <li>Created <strong>volume</strong> feature: length × width × depth</li>
    <li>Checked for and handled outliers / extreme values in dimensions and carat</li>
  </ul>

  <h3>Models Compared</h3>
  <ul>
    <li>Linear Regression</li>
    <li>Decision Tree (with pruning)</li>
    <li>Bagging Regressor</li>
    <li>Random Forest</li>
    <li>XGBoost Regressor</li>
  </ul>

  <p>Validation strategy: <strong>80/20 Train/Test Split</strong></p>

  <hr/>

  <h2>📊 Modeling Results</h2>

  <table class="table table-sm">
    <thead>
      <tr>
        <th>Model</th>
        <th>RMSE</th>
        <th>R²</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>❌ Linear Regression</td>
        <td>1204.86</td>
        <td>0.91</td>
      </tr>
      <tr>
        <td>⚠️ Decision Tree (Pruned)</td>
        <td>1333.14</td>
        <td>0.89</td>
      </tr>
      <tr>
        <td>✅ Random Forest</td>
        <td><strong>535.14</strong></td>
        <td><strong>0.98</strong></td>
      </tr>
      <tr>
        <td>✅ XGBoost</td>
        <td>542.84</td>
        <td>0.88</td>
      </tr>
    </tbody>
  </table>

  <p>
    The <strong>Random Forest</strong> model achieved the best performance with an
    <strong>R² of 0.98</strong> and an average prediction error (RMSE) of about <strong>$535</strong>,
    significantly outperforming linear and single-tree models.
  </p>

  <hr/>

  <h2>📈 Feature Insights</h2>
  <p>
    Using model-based feature importance, we found:
  </p>
  <ul>
    <li><strong>Carat</strong> and the engineered <strong>Volume</strong> feature are the dominant predictors of price</li>
    <li><strong>Clarity</strong> and <strong>Color</strong> have strong secondary effects</li>
    <li><strong>Cut</strong>, <strong>Depth</strong>, and <strong>Table</strong> contributed surprisingly little relative to carat and volume</li>
  </ul>
  <p>
    This reinforced the idea that <em>size and overall quality</em> drive most of the variation,
    and that domain-aware features (like volume) can add significant predictive power.
  </p>

  <hr/>

  <h2>🛠️ Key Skills Gained</h2>

  <div class="row">
    <div class="col-md-6">
      <h3>Data &amp; Modeling</h3>
      <ul>
        <li>Feature engineering and encoding of ordinal categorical variables</li>
        <li>Handling outliers and skewed distributions</li>
        <li>Training and tuning tree-based ensemble methods (Bagging, Random Forest, XGBoost)</li>
        <li>Using Scikit-learn pipelines for preprocessing and modeling</li>
      </ul>
    </div>
    <div class="col-md-6">
      <h3>Evaluation &amp; ML Thinking</h3>
      <ul>
        <li>Interpreting RMSE, MSE, and R² in a business context</li>
        <li>Diagnosing overfitting via residuals and train/test performance</li>
        <li>Understanding when linear models fail due to nonlinear interactions and multicollinearity</li>
        <li>Balancing accuracy, complexity, and interpretability in model choice</li>
      </ul>
    </div>
  </div>

  <hr/>

  <h2>📌 Takeaways</h2>
  <ul>
    <li>Raw features like carat and clarity are useful, but <strong>derived features</strong> (e.g., volume) can significantly boost performance.</li>
    <li>Simple linear models struggled to capture complex, nonlinear relationships in the data.</li>
    <li><strong>Tree-based ensembles</strong> (especially Random Forest) were far more effective and robust.</li>
    <li>Even with highly predictive models, <strong>interpretability</strong> and domain knowledge are critical to trust and apply results.</li>
  </ul>

  <hr/>

  <h2>💡 Potential Impact</h2>
  <p>
    A production-hardened version of this model could be used to:
  </p>
  <ul>
    <li>Help <strong>consumers</strong> gauge whether they are overpaying for a diamond</li>
    <li>Enable <strong>sellers</strong> to set more consistent, data-driven prices</li>
    <li>Support <strong>online marketplaces</strong> in enforcing fair and transparent pricing bands</li>
  </ul>
  <p>
    The overall approach is generalizable to other luxury goods or any domain where
    structured numeric and ordinal features drive price.
  </p>
</div>
