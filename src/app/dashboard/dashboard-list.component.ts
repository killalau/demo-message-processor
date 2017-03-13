import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../message/message';

@Component({
  selector: 'dashboard-list',
  template: `
    <section class="section ui-helper-clearfix">
      <div *ngIf="!queueClear()">
        <h3>Pending Messages</h3>
        <ul class="dashboard-list">
          <li *ngFor="let message of messages" class="dashboard-list__item">
            <message-summary [message]="message" (onProcess)="processMessage.emit($event)"></message-summary>
          </li>
        </ul>
      </div>

      <div *ngIf="queueClear()">
        <h3>Well done!</h3>
        <p>There are no more pending messages.</p>
      </div>
    </section>
  `,
  styles: [`
    .dashboard-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  `],
})
export class DashboardListComponent {
  @Input() messages: Message[] = [];
  @Output() processMessage = new EventEmitter();

  queueClear() {
    return !this.messages || this.messages.length === 0;
  }
}
