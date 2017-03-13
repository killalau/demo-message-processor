import { Component, Input } from '@angular/core';

@Component({
  selector: 'dashboard-summary',
  template: `
    <section class="section ui-helper-clearfix">
      <div class="dashboard-status dashboard-status--pending card">
        <div class="dashboard-status__label">Pending</div>
        <div class="dashboard-status__value">{{ pending }}</div>
      </div>
      <div class="dashboard-status dashboard-status--processed card">
        <div class="dashboard-status__label">Processed</div>
        <div class="dashboard-status__value">{{ processed }}</div>
      </div>
    </section>
  `,
  styles: [`
    .dashboard-status {
      width: 100%;
      padding: 30px 15px;
      text-align: center;
      color: #fff;
      float: left;
    }
    .dashboard-status--pending {
      background: #c66;
      margin-bottom: 20px;
    }
    .dashboard-status--processed {
      background: #6c6;
    }
    .dashboard-status__label,
    .dashboard-status__value {
      padding: 5px;
    }
  `],
})
export class DashboardSummaryComponent {
  @Input() pending = 0;

  @Input() processed = 0;
}
