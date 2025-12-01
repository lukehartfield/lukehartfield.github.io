

<div class="container my-4">
  <h1 class="mb-3">Diamond Price Prediction Using Machine Learning</h1>
  <p class="lead">
    A data science project analyzing 53,940 diamonds to build and evaluate regression models predicting price based on 
    physical and quality attributes.
  </p>

  <p><strong>Project Type:</strong> Data Science Project — University of Texas at Austin<br/>
     <strong>Stack:</strong> Python · Scikit-learn · XGBoost · Pandas · NumPy · Matplotlib · Seaborn</p>

  <hr/>

  <h2>Overview</h2>
  <p>
    This project examined how characteristics such as carat, cut, clarity, color, and dimensional volume influence price. 
    Multiple machine learning models were trained and compared to understand driver importance and optimize predictive 
    performance.
  </p>

  <hr/>

  <h2>Problem Framing</h2>
  <p>
    The task was defined as a supervised regression problem with the following guiding question:
  </p>
  <blockquote>
    Can we accurately predict the price of a diamond using its physical and quality attributes?
  </blockquote>
  <p>
    Models were evaluated using RMSE, MSE, R², and residual diagnostics on an 80/20 train/test split.
  </p>

  <hr/>

  <h2>Data Science Methods</h2>

  <h3>Exploratory Data Analysis</h3>
  <ul>
    <li>Distribution plots for price, carat, and volume</li>
    <li>Correlation matrix to assess relationships between features</li>
    <li>Bar charts comparing average price across cut, color, and clarity groupings</li>
    <li>Pairplots for joint feature relationships</li>
  </ul>

  <h3>Feature Engineering</h3>
  <ul>
    <li>Ordinal encoding for cut, color, and clarity</li>
    <li>Engineered a volume feature (length × width × depth)</li>
    <li>Handled outliers and extreme values in numeric fields</li>
  </ul>

  <h3>Models Evaluated</h3>
  <ul>
    <li>Linear Regression</li>
    <li>Decision Tree (with pruning)</li>
    <li>Bagging Regressor</li>
    <li>Random Forest</li>
    <li>XGBoost Regressor</li>
  </ul>

  <hr/>

  <h2>Modeling Results</h2>

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
        <td>Linear Regression</td>
        <td>1204.86</td>
        <td>0.91</td>
      </tr>
      <tr>
        <td>Decision Tree (Pruned)</td>
        <td>1333.14</td>
        <td>0.89</td>
      </tr>
      <tr>
        <td>Random Forest</td>
        <td><strong>535.14</strong></td>
        <td><strong>0.98</strong></td>
      </tr>
      <tr>
        <td>XGBoost</td>
        <td>542.84</td>
        <td>0.88</td>
      </tr>
    </tbody>
  </table>

  <p>
    Random Forest produced the strongest performance, achieving an R² of 0.98 and an average prediction error (RMSE) 
    of approximately $535.
  </p>

  <hr/>

  <h2>Feature Insights</h2>
  <ul>
    <li>Carat and the engineered volume feature were the most influential price predictors</li>
    <li>Clarity and color provided additional predictive power</li>
    <li>Cut, depth, and table contributed minimally relative to size and quality features</li>
  </ul>

  <hr/>

  <h2>Key Skills Gained</h2>

  <div class="row">
    <div class="col-md-6">
      <h3>Data and Modeling</h3>
      <ul>
        <li>Feature engineering and ordinal encoding</li>
        <li>Working with large structured datasets</li>
        <li>Training ensemble models including Random Forest and XGBoost</li>
        <li>Building Scikit-learn preprocessing and modeling workflows</li>
      </ul>
    </div>
    <div class="col-md-6">
      <h3>Evaluation and ML Concepts</h3>
      <ul>
        <li>Interpreting RMSE, MSE, and R²</li>
        <li>Assessing overfitting through residuals and train/test comparisons</li>
        <li>Understanding nonlinear interactions that challenge linear models</li>
        <li>Balancing accuracy, interpretability, and model complexity</li>
      </ul>
    </div>
  </div>

  <hr/>

  <h2>Takeaways</h2>
  <ul>
    <li>Engineered features such as volume significantly improve model performance</li>
    <li>Linear models struggle with nonlinear relationships common in pricing data</li>
    <li>Tree-based ensembles capture complex interactions and offer superior accuracy</li>
    <li>Interpretability and domain context remain essential even with high-performing models</li>
  </ul>

  <hr/>

  <h2>Potential Impact</h2>
  <ul>
    <li>Helps consumers assess fair pricing when purchasing diamonds</li>
    <li>Enables sellers to price more competitively and consistently</li>
    <li>Supports online marketplaces in enforcing transparent pricing structures</li>
</div>
