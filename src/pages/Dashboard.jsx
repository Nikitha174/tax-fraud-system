import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import { ShieldAlert, Users, FileWarning, TrendingUp, Activity } from 'lucide-react';

const yearlyData = [
  { name: 'Jan', anomalies: 400, expected: 240 },
  { name: 'Feb', anomalies: 300, expected: 139 },
  { name: 'Mar', anomalies: 200, expected: 980 },
  { name: 'Apr', anomalies: 278, expected: 390 },
  { name: 'May', anomalies: 189, expected: 480 },
  { name: 'Jun', anomalies: 239, expected: 380 },
  { name: 'Jul', anomalies: 349, expected: 430 },
];

const riskData = [
  { name: 'Real Estate', riskScore: 85 },
  { name: 'Shell Companies', riskScore: 92 },
  { name: 'Crypto Assets', riskScore: 78 },
  { name: 'Foreign Transfers', riskScore: 88 }
];

export default function Dashboard() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <h1>Authority Control Center</h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>
            AI-Driven Tax Anomaly & Evasion Analytics
          </p>
        </div>
        <button className="btn btn-primary">Generate Report</button>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' }}>
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>High-Risk Targets</p>
              <h2 style={{ fontSize: '2rem', marginTop: '10px' }}>1,284</h2>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '12px', borderRadius: '12px' }}>
              <ShieldAlert color="var(--accent-red)" />
            </div>
          </div>
          <p style={{ color: 'var(--accent-red)', fontSize: '0.8rem', marginTop: '15px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <TrendingUp size={14} /> +12.5% this month
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Total Taxpayers Monitored</p>
              <h2 style={{ fontSize: '2rem', marginTop: '10px' }}>4.5M</h2>
            </div>
            <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '12px', borderRadius: '12px' }}>
              <Users color="var(--accent-blue)" />
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Flagged Transactions</p>
              <h2 style={{ fontSize: '2rem', marginTop: '10px' }}>8,432</h2>
            </div>
            <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '12px', borderRadius: '12px' }}>
              <FileWarning color="var(--accent-orange)" />
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Estimated Recovery</p>
              <h2 style={{ fontSize: '2rem', marginTop: '10px' }}>$42M</h2>
            </div>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '12px', borderRadius: '12px' }}>
              <Activity color="var(--accent-green)" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '20px' }}>Anomaly Detection Trends (AI Engine)</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={yearlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAnomalies" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-red)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--accent-red)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExpected" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-blue)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--accent-blue)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" stroke="var(--text-secondary)" />
                <YAxis stroke="var(--text-secondary)" />
                <Tooltip contentStyle={{ background: 'var(--panel-bg)', borderColor: 'var(--panel-border)', borderRadius: '12px', backdropFilter: 'blur(10px)' }} />
                <Area type="monotone" dataKey="expected" stroke="var(--accent-blue)" fillOpacity={1} fill="url(#colorExpected)" />
                <Area type="monotone" dataKey="anomalies" stroke="var(--accent-red)" fillOpacity={1} fill="url(#colorAnomalies)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ marginBottom: '20px' }}>High-Risk Sectors</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskData} layout="vertical" margin={{ top: 0, right: 0, left: 30, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} stroke="var(--text-secondary)" />
                <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{ background: 'var(--panel-bg)', borderColor: 'var(--panel-border)', borderRadius: '12px' }} />
                <Bar dataKey="riskScore" fill="var(--accent-orange)" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
