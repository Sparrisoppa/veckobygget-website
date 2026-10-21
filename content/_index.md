---
# Home page: the hero at the top. The rest of the page is built from content/sections/.
title: "Veckobygget.se"
eyebrow: "För företag som har vuxit ur att ha allt i huvudet"
headline: "Automatisera administrationen i småföretaget,"
highlight: "utan att byta system."
intro: "Vi får era befintliga system och er inkorg att hålla koll på ordrar, lager och kundfrågor, och lägga fram färdiga förslag när ni behöver bestämma något."
cta_primary: { text: "Boka ett gratis behovssamtal", href: "#kontakt" }
cta_secondary: { text: "Se ett exempel", href: "#exempel" }
# {price} is filled in from `price` in hugo.toml.
checks:
  - "Fast pris {price} exkl. moms"
  - "Klart på en vecka"
  - "Fungerar med de system ni redan har"

# The example board to the right of the headline.
# `flag` is "ok" (green) or "warn" (accent).
board:
  title: "Ordertavla"
  note: "Uppdateras automatiskt från affärssystemet"
  caption: "Exempel: nya ordrar blir kort, tillverkningen planeras och det som saknas flaggas i tid."
  columns:
    - name: "Ny order"
      cards:
        - id: "#1043"
          text: "Bänkar, 12 st"
          meta: "Leverans v. 47"
    - name: "Planerad"
      cards:
        - id: "#1039"
          text: "Skåp, 4 st"
          meta: "Tillverkas 3–5 nov"
          flag: { kind: "ok", text: "Material finns" }
    - name: "Väntar material"
      cards:
        - id: "#1041"
          text: "Skyltar, 30 st"
          flag: { kind: "warn", text: "Saknas: 12 m² ek" }
          meta: "Inköpsförslag klart att godkänna"
---
