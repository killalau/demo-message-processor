import {Component} from '@angular/core';
import { Message, getMessages} from '../message/message';

@Component({
  selector: 'dashboard',
  template: `
  <h1 class="page-title">Message Processor</h1>
  <div class="ui-grid ui-grid-responsive">
    <div class="ui-grid-row">
      <dashboard-summary
        class="ui-grid-col-4"
        [pending]="pending.length"
        [processed]="processed.length"
      ></dashboard-summary>

      <dashboard-list
        class="ui-grid-col-8"
        [messages]="getTopPendings()"
        (processMessage)="processMessage($event)"
      ></dashboard-list>
    </div>
  </div>
  `,
})
export class DashboardComponent {
  pending: Message[] = [];
  processed: Message[] = [];

  constructor() {
    const { pending, processed } = getMessages();
    this.pending = pending;
    this.processed = processed;
  }

  getTopPendings = (count = 5): Message[] => {
    return this.pending.slice(0, count);
  };

  processMessage(message: Message) {
    this.processed.push(message);
    this.pending = this.pending.filter(d => d.id !== message.id);
  }
}
