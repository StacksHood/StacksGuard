;; StacksGuard - Refund Handler
;; Trustless investor protection layer

;; --- Data Maps and Vars ---

(define-data-var reentrancy-lock bool false)

(define-map escrow-vault
  { campaign-id: uint, contributor: principal }
  {
    amount: uint,
    can-refund: bool,
    timestamp: uint
  }
)

(define-constant contract-owner tx-sender)
(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-NO-CONTRIBUTION (err u101))

;; --- Public Functions ---

(define-public (record-contribution (campaign-id uint) (contributor principal) (amount uint))
  (begin
    (asserts! (is-eq tx-sender contract-owner) ERR-NOT-AUTHORIZED)
    (ok (map-set escrow-vault { campaign-id: campaign-id, contributor: contributor } 
      { 
        amount: amount, 
        can-refund: false,
        timestamp: block-height
      }))
  )
)

(define-public (enable-refunds (campaign-id uint) (contributor principal))
  (let ((entry (unwrap! (map-get? escrow-vault { campaign-id: campaign-id, contributor: contributor }) ERR_NO_CONTRIBUTION)))
    (asserts! (is-eq tx-sender contract-owner) ERR-NOT-AUTHORIZED)
    (ok (map-set escrow-vault { campaign-id: campaign-id, contributor: contributor } (merge entry { can-refund: true })))
  )
)

(define-public (claim-refund (campaign-id uint))
  (let ((entry (unwrap! (map-get? escrow-vault { campaign-id: campaign-id, contributor: tx-sender }) ERR_NO_CONTRIBUTION)))
    (asserts! (get can-refund entry) (err u102))
    (try! (as-contract (stx-transfer? (get amount entry) (as-contract tx-sender) tx-sender)))
    (ok (map-delete escrow-vault { campaign-id: campaign-id, contributor: tx-sender }))
  )
)

)
