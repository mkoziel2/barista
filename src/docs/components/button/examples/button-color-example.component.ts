import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  template: `
    <button dt-button>Button in main color</button>
    <button dt-button color="warning">Button in warning color</button>
    <button dt-button color="cta">Button in cta color</button>
  `,
})
export class ColorButtonExampleComponent { }
