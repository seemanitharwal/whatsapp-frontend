import React from "react";
import { Link } from "react-router-dom";

const workspaces = ["Techwheels Green Forms", "EV Campaigns", "Tata Motors Techwheels"];

function Dashboard() {
  return (
    <div className="dashboard">
      <aside>
        <h3>Workspaces</h3>
        <ul>
          {workspaces.map((ws, index) => (
            <li key={index}>{ws}</li>
          ))}
        </ul>
        <Link to="/add-workspace">+ Add Workspace</Link>
      </aside>
      <main>
        <h2>Chats</h2>
        <ul>
          <li>
            <Link to="/chat/918949470290">918949470290</Link>
          </li>
          <li>
            <Link to="/chat/917737501029">917737501029</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default Dashboard;
