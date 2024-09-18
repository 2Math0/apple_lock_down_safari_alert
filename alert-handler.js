// alert-handler.js

(function() {
  // Create a style element and append it to the head
  const style = document.createElement('style');
  style.textContent = `
    /* Styling for the alert overlay */
    .alert-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
      display: none; /* Hidden by default */
      justify-content: center;
      align-items: center;
      z-index: 1000; /* Ensure it appears on top */
    }

    /* Container for the alert box */
    .alert-box {
      background-color: #fff;
      width: 300px;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
      font-family: Arial, sans-serif;
    }

    /* Title styling */
    .alert-title {
      font-size: 24px;
      font-weight: bold;
      color: #d9534f; /* Red color for the alert title */
      margin-bottom: 15px;
    }

    /* Message text styling */
    .alert-message {
      font-size: 16px;
      color: #333;
      margin-bottom: 20px;
    }

    /* Button styling (disabled in this case) */
    .alert-button {
      background-color: #d9534f;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: not-allowed; /* Disabled button */
      opacity: 0.7;
    }
  `;
  document.head.appendChild(style);

  // Create and append the alert overlay to the body
  const alertOverlay = document.createElement('div');
  alertOverlay.id = 'alert-overlay';
  alertOverlay.className = 'alert-overlay';
  alertOverlay.innerHTML = `
    <div class="alert-box">
      <div class="alert-title">Alert</div>
      <div class="alert-message">
        It seems that your browser settings are restricting some functionalities needed for this app.
        Please disable Lockdown Mode or use another browser for full functionality.
      </div>
      <button class="alert-button" disabled>Dismiss</button>
    </div>
  `;
  document.body.appendChild(alertOverlay);

  // Check for WebAssembly support
  if (typeof WebAssembly === 'undefined') {
    alertOverlay.style.display = 'flex'; // Display the alert overlay
  }
})();
