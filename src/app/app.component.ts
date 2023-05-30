import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>POC of tab close and Change Detection</h1>
    <p>Try switching to another tab or closing the browser.</p>
  `,
})
export class AppComponent implements OnInit {
  title: string = "";
  ngOnInit() {
    this.registerTabChangeDetection();
  }

  registerTabChangeDetection() {
    // Register a listener for the visibilitychange event
    document.addEventListener('visibilitychange', () => {
      // Check if the document is hidden (tab switched or minimized)
      if (document.hidden) {
        // Tab is being switched or minimized, so call the displayAlert() method
        this.displayAlert();
      }
    });

    // Register a listener for the beforeunload event
    window.addEventListener('beforeunload', (event) => {
      // Set the confirmation message to be displayed in the browser's default dialog
      const confirmationMessage = 'Are you sure you want to leave?';
      // Set the event's returnValue property to the confirmation message
      // This is required for some browsers (e.g., Chrome) to display the alert
      event.returnValue = confirmationMessage;
    });
  }

  displayAlert() {
    // Display an alert to the user when the tab is changed or minimized
    alert('You have switched to another tab!');
    // You can perform any necessary actions or trigger an API call here
  }
}
