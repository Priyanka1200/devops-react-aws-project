function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>🚀 DevOps Deployment Dashboard</h1>
      <p>React App deployed on AWS EC2 with CI/CD Pipeline</p>

      <div style={{ marginTop: "30px" }}>
        <button style={{ padding: "10px 20px", marginRight: "10px" }}>
          Check Deployment
        </button>
        <button style={{ padding: "10px 20px" }}>
          View Logs
        </button>
      </div>
    </div>
  );
}

export default App;