import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <nav className="header">Header</nav>
      <main className="container">
        <Sidebar />
        <div className="content">Content</div>
      </main>
    </div>
  );
}

export default App;
