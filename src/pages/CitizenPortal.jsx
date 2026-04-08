import { Shield, FileCheck, AlertCircle, ExternalLink, MessageSquare } from 'lucide-react';

export default function CitizenPortal() {
  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <h1>Citizen Transparency Portal</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>
          Your Secure Financial Compliance Overview
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '30px' }}>
        <div className="glass-panel" style={{ padding: '24px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3 style={{ color: 'var(--accent-green)' }}>Compliance Score</h3>
            <Shield color="var(--accent-green)" />
          </div>
          <h1 style={{ fontSize: '3.5rem', margin: '15px 0', color: '#6EE7B7' }}>Good</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Your profile looks clean. No major anomalies detected.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Connected Records</h3>
            <FileCheck color="var(--accent-blue)" />
          </div>
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--panel-border)', paddingBottom: '8px' }}>
              <span>Aadhaar Linkage</span>
              <span style={{ color: 'var(--accent-green)' }}>Verified</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--panel-border)', paddingBottom: '8px' }}>
              <span>Bank Accounts (3)</span>
              <span style={{ color: 'var(--accent-green)' }}>Synced</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--panel-border)', paddingBottom: '8px' }}>
              <span>Property Registry</span>
              <span style={{ color: 'var(--accent-green)' }}>Synced</span>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '24px', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3 style={{ color: 'var(--accent-red)' }}>Action Required</h3>
            <AlertCircle color="var(--accent-red)" />
          </div>
          <div style={{ marginTop: '20px' }}>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '8px', marginBottom: '15px' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>Unexplained Transaction Flag</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>Please clarify source of ₹2.5L deposit on 14th Sep.</p>
            </div>
            <button className="btn btn-primary" style={{ width: '100%', fontSize: '0.85rem' }}>
              Provide Explanation
            </button>
          </div>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '24px' }}>
        <h3 style={{ marginBottom: '20px' }}>Your Financial Summary (As per Govt Records)</h3>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--panel-border)' }}>
            <tr>
              <th style={{ padding: '16px 20px', color: 'var(--text-secondary)', fontWeight: '500' }}>Asset / Income Type</th>
              <th style={{ padding: '16px 20px', color: 'var(--text-secondary)', fontWeight: '500' }}>Reported Value</th>
              <th style={{ padding: '16px 20px', color: 'var(--text-secondary)', fontWeight: '500' }}>Source Agency</th>
              <th style={{ padding: '16px 20px', color: 'var(--text-secondary)', fontWeight: '500' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
              <td style={{ padding: '16px 20px', fontWeight: '500' }}>Salary Income (FY 23-24)</td>
              <td style={{ padding: '16px 20px' }}>₹14,50,000</td>
              <td style={{ padding: '16px 20px', color: 'var(--text-secondary)' }}>Income Tax Dept (Form 16)</td>
              <td style={{ padding: '16px 20px' }}><button className="btn btn-outline" style={{ padding: '4px 8px', fontSize: '0.8rem' }}>Report Error</button></td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
              <td style={{ padding: '16px 20px', fontWeight: '500' }}>Residential Property</td>
              <td style={{ padding: '16px 20px' }}>₹85,00,000</td>
              <td style={{ padding: '16px 20px', color: 'var(--text-secondary)' }}>State Registration Dept</td>
              <td style={{ padding: '16px 20px' }}><button className="btn btn-outline" style={{ padding: '4px 8px', fontSize: '0.8rem' }}>Report Error</button></td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
              <td style={{ padding: '16px 20px', fontWeight: '500' }}>Stock Investments</td>
              <td style={{ padding: '16px 20px' }}>₹12,45,000</td>
              <td style={{ padding: '16px 20px', color: 'var(--text-secondary)' }}>CDSL/NSDL</td>
              <td style={{ padding: '16px 20px' }}><button className="btn btn-outline" style={{ padding: '4px 8px', fontSize: '0.8rem' }}>Report Error</button></td>
            </tr>
            <tr>
              <td colSpan="4" style={{ padding: '16px 20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                Blockchain Timestamp: <span style={{ fontFamily: 'monospace', color: 'var(--accent-blue)' }}>0x8fB2...A94C</span> (Tamper-proof record)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
