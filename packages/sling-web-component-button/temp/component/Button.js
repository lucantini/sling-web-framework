import { SlingElement, html } from 'sling-framework';

export class Button extends SlingElement {
  static get properties() {
    return {
      layout: {
        type: String,
        reflectToAttribute: true,
      },
      color: {
        type: String,
        reflectToAttribute: true,
      },
      size: {
        type: String,
        reflectToAttribute: true,
      },
      disabled: {
        type: Boolean,
        reflectToAttribute: true,
      },
      slim: {
        type: Boolean,
        reflectToAttribute: true,
      },
      type: {
        type: String,
        reflectToAttribute: true,
      },
    };
  }

  render({ disabled, type }) {
    const base = 'emd-btn';
    const attrNames = Object.keys(this.constructor.properties);
    const className = this.generateClassName(base, attrNames);

    return html`
      <style>
        .emd-btn {
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  padding: calc(16px - var(--sling-button-border-width, 1px)) calc(24px - var(--sling-button-border-width, 1px));
  width: 100%;
  height: 100%;
  outline: none;
  border-width: var(--sling-button-border-width, 1px);
  border-style: solid;
  border-radius: var(--sling-button-border-radius, 2px);
  background-color: transparent;
  color: #fff;
  fill: #fff;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
}

.emd-btn_layout_text {
  padding: calc(8px - var(--sling-button-border-width, 1px));
}

.emd-btn_slim {
  padding-top: calc(8px - var(--sling-button-border-width, 1px));
  padding-bottom: calc(8px - var(--sling-button-border-width, 1px));
}

.emd-btn_disabled {
  cursor: not-allowed;
}

.emd-btn_size_small {
  font-size: 12px;
  line-height: 18px;
}

.emd-btn_size_big {
  font-size: 16px;
  line-height: 24px;
}

/* default */

.emd-btn {
  border-color: #2d3844;
  background-color: #2d3844;
  color: #fff;
  fill: #fff;
}

.emd-btn:hover,
.emd-btn:focus,
.emd-btn:active {
  border-color: #0c1219;
}

.emd-btn:active {
  background-color: #0c1219;
}

.emd-btn.emd-btn_layout_outline,
.emd-btn.emd-btn_layout_text {
  color: #2d3844;
  fill: #2d3844;
}

.emd-btn.emd-btn_layout_outline:hover,
.emd-btn.emd-btn_layout_outline:focus,
.emd-btn.emd-btn_layout_outline:active,
.emd-btn.emd-btn_layout_text:hover,
.emd-btn.emd-btn_layout_text:focus,
.emd-btn.emd-btn_layout_text:active {
  color: #0c1219;
  fill: #0c1219;
}

.emd-btn.emd-btn_layout_outline:active {
  background-color: rgba(150, 160, 175, 0.2);
}

/* primary */

.emd-btn_color_primary {
  border-color: var(--sling-button-primary-color, #95c93d);
  background-color: var(--sling-button-primary-color, #95c93d);
  color: #fff;
  fill: #fff;
}

.emd-btn_color_primary:hover,
.emd-btn_color_primary:focus,
.emd-btn_color_primary:active {
  border-color: var(--sling-button-primary-highlight-color, #7aa436);
}

.emd-btn_color_primary:active {
  background-color: var(--sling-button-primary-highlight-color, #7aa436);
}

.emd-btn_color_primary.emd-btn_layout_outline,
.emd-btn_color_primary.emd-btn_layout_text {
  color: var(--sling-button-primary-color, #95c93d);
  fill: var(--sling-button-primary-color, #95c93d);
}

.emd-btn_color_primary.emd-btn_layout_outline:hover,
.emd-btn_color_primary.emd-btn_layout_outline:focus,
.emd-btn_color_primary.emd-btn_layout_outline:active,
.emd-btn_color_primary.emd-btn_layout_text:hover,
.emd-btn_color_primary.emd-btn_layout_text:focus,
.emd-btn_color_primary.emd-btn_layout_text:active {
  color: var(--sling-button-primary-highlight-color, #7aa436);
  fill: var(--sling-button-primary-highlight-color, #7aa436);
}

.emd-btn_color_primary.emd-btn_layout_outline:active {
  background-color: var(--sling-button-primary-active-color, rgba(149, 201, 61, 0.2));
}

/* success */

.emd-btn_color_success {
  border-color: #2ecc71;
  background-color: #2ecc71;
  color: #fff;
  fill: #fff;
}

.emd-btn_color_success:hover,
.emd-btn_color_success:focus,
.emd-btn_color_success:active {
  border-color: #27a75f;
}

.emd-btn_color_success:active {
  background-color: #27a75f;
}

.emd-btn_color_success.emd-btn_layout_outline,
.emd-btn_color_success.emd-btn_layout_text {
  color: #2ecc71;
  fill: #2ecc71;
}

.emd-btn_color_success.emd-btn_layout_outline:hover,
.emd-btn_color_success.emd-btn_layout_outline:focus,
.emd-btn_color_success.emd-btn_layout_outline:active,
.emd-btn_color_success.emd-btn_layout_text:hover,
.emd-btn_color_success.emd-btn_layout_text:focus,
.emd-btn_color_success.emd-btn_layout_text:active {
  color: #27a75f;
  fill: #27a75f;
}

.emd-btn_color_success.emd-btn_layout_outline:active {
  background-color: rgba(46, 204, 113, 0.2);
}

/* danger */

.emd-btn_color_danger {
  border-color: #e74c3c;
  background-color: #e74c3c;
  color: #fff;
  fill: #fff;
}

.emd-btn_color_danger:hover,
.emd-btn_color_danger:focus,
.emd-btn_color_danger:active {
  border-color: #bb4035;
}

.emd-btn_color_danger:active {
  background-color: #bb4035;
}

.emd-btn_color_danger.emd-btn_layout_outline,
.emd-btn_color_danger.emd-btn_layout_text {
  color: #e74c3c;
  fill: #e74c3c;
}

.emd-btn_color_danger.emd-btn_layout_outline:hover,
.emd-btn_color_danger.emd-btn_layout_outline:focus,
.emd-btn_color_danger.emd-btn_layout_outline:active,
.emd-btn_color_danger.emd-btn_layout_text:hover,
.emd-btn_color_danger.emd-btn_layout_text:focus,
.emd-btn_color_danger.emd-btn_layout_text:active {
  color: #bb4035;
  fill: #bb4035;
}

.emd-btn_color_danger.emd-btn_layout_outline:active {
  background-color: rgba(231, 76, 60, 0.2);
}

/* light */

.emd-btn_color_light {
  border-color: #ebebf0;
  background-color: #ebebf0;
  color: #2d3844;
  fill: #ebebf0;
}

.emd-btn_color_light:hover,
.emd-btn_color_light:focus,
.emd-btn_color_light:active {
  border-color: #fff;
}

.emd-btn_color_light:active {
  background-color: #fff;
}

.emd-btn_color_light.emd-btn_layout_outline,
.emd-btn_color_light.emd-btn_layout_text {
  color: #ebebf0;
  fill: #ebebf0;
}

.emd-btn_color_light.emd-btn_layout_outline:hover,
.emd-btn_color_light.emd-btn_layout_outline:focus,
.emd-btn_color_light.emd-btn_layout_outline:active,
.emd-btn_color_light.emd-btn_layout_text:hover,
.emd-btn_color_light.emd-btn_layout_text:focus,
.emd-btn_color_light.emd-btn_layout_text:active {
  color: #fff;
  fill: #fff;
}

.emd-btn_color_light.emd-btn_layout_outline:active {
  background-color: rgba(255, 255, 255, 0.2);
}

/* disabled */

.emd-btn_disabled,
.emd-btn_disabled:hover,
.emd-btn_disabled:focus,
.emd-btn_disabled:active {
  border-color: #ebebf0;
  background-color: #ebebf0;
  color: #c3c8d1;
  fill: #c3c8d1;
}

.emd-btn_disabled.emd-btn_layout_outline,
.emd-btn_disabled.emd-btn_layout_text {
  color: #c3c8d1;
  fill: #c3c8d1;
}

.emd-btn_disabled.emd-btn_layout_outline:hover,
.emd-btn_disabled.emd-btn_layout_outline:focus,
.emd-btn_disabled.emd-btn_layout_outline:active,
.emd-btn_disabled.emd-btn_layout_text:hover,
.emd-btn_disabled.emd-btn_layout_text:focus,
.emd-btn_disabled.emd-btn_layout_text:active {
  color: #c3c8d1;
  fill: #c3c8d1;
  background-color: transparent;
}

.emd-btn_disabled.emd-btn_layout_text:hover,
.emd-btn_disabled.emd-btn_layout_text:focus,
.emd-btn_disabled.emd-btn_layout_text:active {
  border-color: transparent;
}

/* outline and text */

.emd-btn_layout_outline,
.emd-btn_layout_text {
  background-color: transparent;
}

.emd-btn_layout_text,
.emd-btn_layout_text:hover,
.emd-btn_layout_text:focus,
.emd-btn_layout_text:active {
  border-color: transparent;
  background-color: transparent;
}

:host {
  display: inline-block;
  background: transparent !important;
  border: none !important;
  outline: none !important;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

:host > .emd-btn {
  position: relative;
  width: 100%;
  height: 100%;
}

:host slot {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* for compatibility */

sling-button {
  display: inline-block;
  background: transparent !important;
  border: none !important;
  outline: none !important;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

sling-button > .emd-btn {
  position: relative;
  width: 100%;
  height: 100%;
}

sling-button slot {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  height: 100%;
}

      </style>
      <button type="${type}" className="${className}" disabled=${disabled}>
        <slot></slot>
      </button>
    `;
  }
}
