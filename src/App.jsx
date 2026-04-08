import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { 
  ShieldAlert, 
  Activity, 
  BrainCircuit, 
  Network, 
  BellRing, 
  LayoutDashboard,
  UserCheck,
  Search,
  Bell
} from 'lucide-react';
import './App.css';

// Lazy loading could be used, but we'll import directly for simplicity
import Dashboard from './pages/Dashboard';
import RealTimeMonitoring from './pages/RealTimeMonitoring';
import RiskScoring from './pages/RiskScoring';
import CitizenPortal from './pages/CitizenPortal';

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <div className="sidebar">
        <div className="sidebar-logo text-gradient">
          <ShieldAlert size={32} color="#3B82F6" />
          <h2>FraudGuard</h2>
        </div>

        <nav>
          <NavLink to="/" className={({isActive}) => isActive || location.pathname === '' ? "nav-item active" : "nav-item"}>
            <LayoutDashboard size={20} className="nav-icon" />
            <span>Overview Dashboard</span>
          </NavLink>
          
          <NavLink to="/real-time" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Activity size={20} className="nav-icon" />
            <span>Real-Time Monitor</span>
          </NavLink>

          <NavLink to="/risk-scoring" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <BrainCircuit size={20} className="nav-icon" />
            <span>AI Risk Scoring</span>
          </NavLink>

          <NavLink to="/data-linkage" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Network size={20} className="nav-icon" />
            <span>Cross-Agency Linkage</span>
          </NavLink>

          <NavLink to="/alerts" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <BellRing size={20} className="nav-icon" />
            <span>Compliance Alerts</span>
          </NavLink>

          <div style={{ marginTop: 'auto', borderTop: '1px solid var(--panel-border)', paddingTop: '20px' }}>
            <NavLink to="/citizen-portal" className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
              <UserCheck size={20} className="nav-icon" />
              <span>Citizen Portal</span>
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <div className="top-navbar">
          <div className="search-bar">
            <Search size={18} color="var(--text-secondary)" />
            <input type="text" placeholder="Search by PAN, Aadhaar or Tax ID..." />
          </div>

          <div className="nav-actions">
            <div className="icon-btn">
              <Bell size={20} />
              <div className="notification-dot"></div>
            </div>
            <div className="user-profile">
              <div className="user-avatar">AD</div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: '600' }}>Admin User</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Tax Authority</div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-area animate-fade-in">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/real-time" element={<RealTimeMonitoring />} />
            <Route path="/risk-scoring" element={<RiskScoring />} />
            <Route path="/citizen-portal" element={<CitizenPortal />} />
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
