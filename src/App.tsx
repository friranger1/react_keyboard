import React from 'react';

type State = {
  lastPressedKey: string;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    lastPressedKey: '',
  };

  keyUpButton = (event: KeyboardEvent) => {
    this.setState({
      lastPressedKey: event.key,
    });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.keyUpButton);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.keyUpButton);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastPressedKey === ''
            ? `Nothing was pressed yet`
            : `The last pressed key is [${this.state.lastPressedKey}]`}
        </p>
      </div>
    );
  }
}
