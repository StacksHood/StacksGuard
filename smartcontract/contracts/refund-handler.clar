;; StacksGuard - Refund Handler
;; Trustless investor protection layer

;; --- Data Maps and Vars ---

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
