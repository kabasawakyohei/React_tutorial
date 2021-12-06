import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  // コンストラクタの定義
  constructor(props){
    // constructor を持つ React のクラスコンポーネントでは、すべてコンストラクタを super(props) の呼び出しから始める
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square"
       onClick={() => this.setState({value: "○"})}
      >
        {/* Board component(親コンポーネント)からSquare componentDidCatch(子コンポーネント)へ値を受け取る */}
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    // Board component(親コンポーネント)からSquare componentDidCatch(子コンポーネント)へ値を受け渡す
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
