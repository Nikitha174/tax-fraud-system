import { BrainCircuit, Info, Target, FileSearch, ShieldCheck } from 'lucide-react';

export default function RiskScoring() {
  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <h1>AI Risk Scoring & Explainability</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '5px' }}>
          Deep learning insights with explainable risk factors for targeted investigation
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 1fr) 2fr', gap: '20px' }}>
        
        {/* Profile Card */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--panel-border)' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--gradient-danger)', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>RS</span>
            </div>
            <h2>Rajesh Sharma</h2>
            <p style={{ color: 'var(--text-secondary)' }}>PAN: ABCDE1234F</p>
            <div style={{ marginTop: '15px' }}>
              <span className="badge danger" style={{ fontSize: '1rem', padding: '8px 16px' }}>Risk Score: 94 / 100</span>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '15px', color: 'var(--text-secondary)' }}>Taxpayer Profile summary</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Declared Income:</span>
              <span style={{ fontWeight: '500' }}>₹12 Lakhs/yr</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Estimated Wealth:</span>
              <span style={{ fontWeight: '500', color: 'var(--accent-red)' }}>₹8.5 Crores</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Gst Registration:</span>
              <span style={{ fontWeight: '500' }}>Active (1 Entity)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>ITR Status:</span>
              <span style={{ fontWeight: '500' }}>Filed (AY 2024-25)</span>
            </div>
          </div>
          
          <button className="btn btn-outline" style={{ width: '100%', marginTop: '20px' }}>
            <FileSearch size={16} /> View Full Dossier
          </button>
        </div>

        {/* Explainable AI Module */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <BrainCircuit color="var(--accent-purple)" />
              <h3 className="text-gradient" style={{ margin: 0 }}>Explainable AI (XAI) Analysis</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Why was this profile flagged? The AI engine detected severe anomalies matching known money-laundering typologies.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {/* Factor 1 */}
              <div style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FCA5A5' }}>
                    <Target size={16} /> Extreme Income-to-Asset Mismatch
                  </h4>
                  <span style={{ fontWeight: 'bold', color: 'var(--accent-red)' }}>+45 pts</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Purchased a commercial property worth ₹4.2Cr and two luxury vehicles worth ₹1.8Cr in the last 14 months, while declared average income over 3 years is ₹12L.
                </p>
                <div style={{ marginTop: '10px', background: 'rgba(0,0,0,0.3)', padding: '8px', borderRadius: '6px', fontSize: '0.8rem', display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--accent-blue)' }}>Source: Property Registration DB</span>
                  <span>|</span>
                  <span style={{ color: 'var(--accent-blue)' }}>Source: VAHAN (Vehicle) DB</span>
                </div>
              </div>

              {/* Factor 2 */}
              <div style={{ background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.2)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FCD34D' }}>
                    <Target size={16} /> Circular Trading Pattern Detected
                  </h4>
                  <span style={{ fontWeight: 'bold', color: 'var(--accent-orange)' }}>+32 pts</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Business entity (GSTIN 27ABCDE1234F1Z5) involved in rapid cyclic transfers involving 4 other newly formed companies in a span of 48 hours.
                </p>
                <div style={{ marginTop: '10px', background: 'rgba(0,0,0,0.3)', padding: '8px', borderRadius: '6px', fontSize: '0.8rem', display: 'flex', gap: '10px' }}>
                  <span style={{ color: 'var(--accent-blue)' }}>Source: GST E-Way Bill DB</span>
                  <span>|</span>
                  <span style={{ color: 'var(--accent-blue)' }}>Source: Bank Transactions API</span>
                </div>
              </div>

              {/* Factor 3 */}
              <div style={{ background: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.2)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C4B5FD' }}>
                    <Target size={16} /> High Frequency Cash Deposits
                  </h4>
                  <span style={{ fontWeight: 'bold', color: 'var(--accent-purple)' }}>+17 pts</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Suspicious cash deposits structured just below reporting thresholds (₹49,500) across 3 different bank accounts within 5 days.
                </p>
              </div>

            </div>
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <button className="btn btn-primary" style={{ flex: 1, padding: '15px', background: 'var(--gradient-danger)' }}>
              <ShieldCheck size={18} /> Initiate Formal Investigation
            </button>
            <button className="btn btn-outline" style={{ flex: 1, padding: '15px' }}>
              Request Additional Documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
