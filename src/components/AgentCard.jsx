export default function AgentCard({ agent }) {
    return (
      <div className="agent-card">
        <img src={agent.image} alt={agent.name} />
        <h3>{agent.name}</h3>
        <p className="role">{agent.role}</p>
        <p>📞 {agent.phone}</p>
        <p>✉ {agent.email}</p>
      </div>
    );
  }
  