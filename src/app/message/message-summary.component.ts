import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import * as moment from 'moment';

import { Message, MessageType, getNames } from '../message/message';
import { Gift, getGifts } from '../gift/gift';

@Component({
  selector: 'message-summary',
  template: `
    <section class="message-summary card" (click)="showForm()">
      <div>{{ messageTypeDisplay }}</div>
    </section>

    <p-dialog
      [header]="messageTypeDisplay"
      [(visible)]="formOpened"
      modal="true"
      width="600"
      minHeight="400"
    >
      <div *ngIf="isType('BirthdayWish')">
        <label>Gift</label>
        <p-dropdown
          placeholder="Choose a gift"
          [style]="{ 'width': '100%' }"
          [options]="giftOptions"
          [(ngModel)]="message.gift"
          [disabled]="fieldShouldDisable('gift')"
          (onChange)="handleFieldChange('gift', $event)"
        >
          <template let-gift pTemplate="item">
            <div class="select-item ui-helper-clearfix">
              <span class="select-item__label">{{ gift.label }}</span>
              <img class="select-item__image" src="{{ gift.value.image }}" />
            </div>
          </template>
        </p-dropdown>
      </div>

      <div *ngIf="isType('BirthCongratulation')">
        <label>Baby Name</label>
        <p-dropdown
          placeholder="Choose a name"
          [style]="{ 'width': '100%' }"
          [options]="babynameOptions"
          [(ngModel)]="message.babyname"
          [disabled]="fieldShouldDisable('babyname')"
          (onChange)="handleFieldChange('babyname', $event)"
        ></p-dropdown>

        <label>Birth Date</label>
        <p-calendar
          dateFormat="yy-mm-dd"
          [(ngModel)]="message.birthdate"
          (onSelect)="handleFieldChange('birthdate')"
        ></p-calendar>
      </div>

      <label>Message</label>
      <textarea pInputTextarea
        [ngModel]="defaultMessage"
        readOnly
      ></textarea>

    </p-dialog>
  `,
  styles: [`
    .message-summary {
      cursor: pointer;
    }
    .message-summary:hover {
      background: #f6f6f6;
    }
    .select-item__label {
      line-height: 60px;
      text-transform: capitalize;
    }
    .select-item__image {
      height: 60px;
      float: right;
    }
  `],
})
export class MessageSummaryComponent {
  @Input() message: Message;

  @Output() onProcess = new EventEmitter();

  formOpened = false;
  giftOptions: SelectItem[] = [];
  babynameOptions: SelectItem[] = [];

  constructor() {
    this.giftOptions = getGifts().map(d => ({ label: d.name, value: d }));
    this.babynameOptions = getNames().map(d => ({ label: d, value: d }));
  }

  get messageTypeDisplay(): string {
    return this.message.type === MessageType.BirthdayWish ? 'Birthday Wish' : 'Congrats on birth of your child';
  }

  get defaultMessage(): string {
    const gift = this.message.gift ? this.message.gift.name : '[gift]';
    const babyname = this.message.babyname || '[babyname]';
    const birthdate = this.message.birthdate ? moment(this.message.birthdate).format('YYYY-MM-DD') : '[birthdate]';
    return this.message.type === MessageType.BirthdayWish ?
      `Mate, Happy Birthday. To celebrate this once a year occasion we have picked the following gift: ${gift}. Enjoy.`
      :
      `Whooa well done and congratulations on the birth of ${babyname} on ${birthdate}.`;
  }

  isType(type: string): boolean {
    return this.message.type === MessageType[type];
  }

  fieldShouldDisable(field: string): boolean {
    // return !!this.message[field];
    return false;
  }

  showForm() {
    this.formOpened = true;
  }

  handleFieldChange(field: string, event: any) {
    const msg = this.message;
    if (msg.type === MessageType.BirthdayWish) {
      if (msg.gift) {
        this.onProcess.emit(msg);
        this.formOpened = false;
      }
    } else {
      if (msg.babyname && msg.birthdate) {
        this.onProcess.emit(msg);
        this.formOpened = false;
      }
    }
  }
}
