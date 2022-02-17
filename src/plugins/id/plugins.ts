import { Core } from '../core';
import { v1, v4 } from 'uuid';

export class IdPlugin extends Core {
  v1() {
    this.enqueue('v4', (): string => {
      return v1();
    });
  }
  v4() {
    this.enqueue('v4', (): string => {
      return v4();
    });
  }
}
