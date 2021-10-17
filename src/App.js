import logo from './logo.svg';
import './App.css';

const arr = [
  {id: "uniq1", name:"Paul"},
  {id: "uniq2", name:"Mary"},
  {id: "uniq3", name:"Viktor"},
  {id: "uniq4", name:"Suzanna"},
  {id: "uniq5", name:"Peter"},
  {id: "uniq6", name:"Vladislav"},
  {id: "uniq7", name:"Anna"}
];

const UserList = ({users}) => {
  let Name = ({name}) => {
    if (name.indexOf("e") >= 1) {
      return (
        <span>It’s Premium User! Welcome, {name}!</span>
      );
    }

    if (name.length > 5) {
      let newName = user.slice(0, 5);
      return (
        <span>It’s user {newName}...</span>
      );
    }

    let palindrome = true;
    const x = name.length / 2; 
    for (let i = 0; i < n; i++) {
      if (name[i].toLowerCase() !== name[name.length - i - 1]) {
        palindrome = false;
        break;
      }
    }

    if (palindrome) {
      return (
        <span className="name--highlighted">It’s user {name}</span>
      );
    } else {
      return (
        <span>It’s user {name}</span>
      );
    }
  };
};

const ComposableUser = ({users}) => {
  const User = (props) => {
    const user = props.children;
    if (name.indexOf("e") >= 1) {
      return (
        <span>It’s Premium User! Welcome, {name}!</span>
      );
    }

    if (name.length > 5) {
      let newName = user.slice(0, 5);
      return (
        <span>It’s user {newName}...</span>
      );
    }

    let palindrome = true;
    const x = name.length / 2; 
    for (let i = 0; i < n; i++) {
      if (name[i].toLowerCase() !== name[name.length - i - 1]) {
        palindrome = false;
        break;
      }
    }
    if (palindrome) {
      return (
        <span className="name--highlighted">It’s user {name}</span>
      );
    } else {
      return (
        <span>It’s user {name}</span>
      );
    }
  };
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App