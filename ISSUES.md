# StacksGuard - Roadmap & Issues

Detailed development tasks for the StacksGuard protection layer.

---

## 🛠️ Smart Contract Issues

### Phase 1: Escrow & Refund Logic
- [x] **Issue #1**: Implement Escrow Vault Storage
  - ✅ Designed secure mapping for holding contributor funds.
- [x] **Issue #2**: Implement Refund Trigger Function
  - ✅ Added conditional logic to enable refunds on project failure.
- [ ] **Issue #3**: Implement User Claim Function
  - [ ] Build `claim-refund` public function.
  - [ ] Add reentrancy protection during STX transfer.
  - [ ] Clear contribution record upon successful claim.

### Phase 2: Safety & Security
- [ ] **Issue #4**: Add Reentrancy Guards & Timelocks
  - [ ] Implement global mutex for state-changing calls.
- [ ] **Issue #5**: Implement Multi-sig Refund Authorization
  - [ ] Ensure multiple administrators must sign off on project "FAILURE".

---

## 💻 Frontend Issues

### Phase 3: Dashboard & Safety
- [ ] **Issue #6**: Security Dashboard UI
  - [ ] Clean terminal-inspired interface focused on safety.
- [ ] **Issue #7**: Auth Provider & Session Management
  - [ ] Core integration of Stacks Connect.

### Phase 4: Protection Tools
- [ ] **Issue #8**: Contribution Safety Monitor
  - [ ] View total funds held in escrow vs projected releases.
- [ ] **Issue #9**: Trustless Refund Claim Interface
  - [ ] Direct interaction for contributors to pull back assets.
- [ ] **Issue #10**: Project Risk Visualization
  - [ ] Visual indicators for project health based on on-chain data.

---

## 📊 Priority Levels
- **P0**: Escrow Safety, Claim Logic
- **P1**: Multi-sig Auth, Claim UI
- **P2**: Risk Analytics, Timelocks
