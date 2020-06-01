import { Component, Prop, h, Watch, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true
})
export class MyComponent {
  @Prop() prop: string = '0';
  @State() watchCallCount = 0;

  @Watch('prop')
  updateProp() {
    this.watchCallCount++
  }

  render() {
    return <pre>prop={this.prop}; watchCallCount={this.watchCallCount}</pre>;
  }
}
