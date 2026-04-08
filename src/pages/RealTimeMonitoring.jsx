import { useState, useEffect } from 'react';
import { AlertTriangle, Activity, CheckCircle, Filter } from 'lucide-react';

const mockTransactions = [
  { id: 'TXN-8842', taxpayer: 'Rajesh Sharma', type: 'Property Purchase', amount: '₹1.5Cr', status: 'Flagged', confidence: 94, reason: 'Income Mismatch' },
  { id: 'TXN-8843', taxpayer: 'Global Tech Ltd', type: 'Offshore Transfer', amount: '$450K', status: 'Flagged', confidence: 88, reason: 'Shell Company Suspected' },
  { id: 'TXN-8844', taxpayer: 'Anita Desai', type: 'Vehicle Registration', amount: '₹85L', status: 'Clear', confidence: 12, reason: '-' },
  { id: 'TXN-8845', taxpayer: 'Manoj Gupta', type: 'High Net Worth Cash', amount: '₹25L', status: 'Reviewing', confidence: 65, reason: 'Frequent Cash Deposits' },
  { id: 'TXN-8846', taxpayer: 'Zenith Corp', type: 'GST Return', amount: '₹3.2Cr', status: 'Flagged', confidence: 91, reason: 'Fake Input Tax Credit' },
];

export default function RealTimeMonitoring() {
  const [transactions, setTransactions] = useState(mockTransactions);
  const [pulse, setPulse] = useState(false);

  // Simulate real-time data incoming
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h1>Real-Time Data Feed</h1>
            <div style={{ 
              width: '12px', height: '12px', borderRadius: '50%', 
              background: 'var(--accent-red)', 
              boxShadow: pulse ? '0 0 15px var(--accent-red)' : 'none',
              transition: 'all 0.3s ease'
             }}></div>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>
            Live monitoring of cross-agency financial events
          </p>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <button className="btn btn-outline"><Filter size={16} /> Filters</button>
          <button className="btn btn-primary" style={{ background: 'var(--gradient-danger)' }}>
            <AlertTriangle size={16} /> Pause Feed
          </button>
        </div>
      </div>

      <div className="glass-panel" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--panel-border)' }}>
            <tr>
              <th style={{ padding: '16px 20px', color: 'var(--text-secondary)', fontWeight: '500' }}>TXN ID</th>
              <th style={{ padding: '16px 20px', color: 'var(--text-secondary)', fontWeight: '500' }}>Taxpayer / Entity</th>
              <th style={{ padding: '16px 20px', color: 'var(--text-secondary)', fontWeight: '500' }}>Transaction Type</th>
              <th style={{ padding: '16px 20px', color: 'var(--text-secondary)', fontWeight: '500' }}>Amount</th>
              <th style={{ padding: '16px 20px', color: 'var(--text-secondary)', fontWeight: '500' }}>Status</th>
              <th style={{ padding: '16px 20px', color: 'var(--text-secondary)', fontWeight: '500' }}>AI Confidence</th>
              <th style={{ padding: '16px 20px', color: 'var(--text-secondary)', fontWeight: '500' }}>Flag Reason</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={txn.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)', transition: 'background 0.2s', ':hover': { background: 'rgba(255,255,255,0.05)' } }}>
                <td style={{ padding: '16px 20px', fontWeight: '500' }}>{txn.id}</td>
                <td style={{ padding: '16px 20px' }}>{txn.taxpayer}</td>
                <td style={{ padding: '16px 20px', color: 'var(--text-secondary)' }}>{txn.type}</td>
                <td style={{ padding: '16px 20px', fontWeight: '600' }}>{txn.amount}</td>
                <td style={{ padding: '16px 20px' }}>
                  <span className={`badge ${txn.status === 'Flagged' ? 'danger' : txn.status === 'Clear' ? 'success' : 'warning'}`}>
                    {txn.status}
                  </span>
                </td>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '100%', background: 'rgba(255,255,255,0.1)', height: '6px', borderRadius: '3px' }}>
                      <div style={{ 
                        width: `${txn.confidence}%`, 
                        height: '100%', 
                        background: txn.status === 'Flagged' ? 'var(--accent-red)' : txn.status === 'Clear' ? 'var(--accent-green)' : 'var(--accent-orange)',
                        borderRadius: '3px'
                      }}></div>
                    </div>
                    <span style={{ fontSize: '0.8rem' }}>{txn.confidence}%</span>
                  </div>
                </td>
                <td style={{ padding: '16px 20px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  {txn.reason}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
