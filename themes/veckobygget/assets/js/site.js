(() => {
  // Mobile menu
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.menu-toggle');
  if (header && toggle) {
    const set = (open) => {
      header.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open);
      toggle.textContent = open ? toggle.dataset.open : toggle.dataset.closed;
    };
    toggle.addEventListener('click', () => set(!header.classList.contains('is-open')));
    header.querySelector('.nav').addEventListener('click', (e) => { if (e.target.closest('a')) set(false); });
  }

  // Pay-back calculator
  const calc = document.querySelector('[data-calc]');
  if (calc) {
    const price = +calc.dataset.price, weeks = +calc.dataset.weeks;
    const fmt = (n) => Math.round(n).toLocaleString('sv-SE');
    const out = (k) => calc.querySelector(`[data-out="${k}"]`);
    const hoursIn = calc.querySelector('[name=hours]'), rateIn = calc.querySelector('[name=rate]');
    const update = () => {
      const hrs = +hoursIn.value, rate = +rateIn.value;
      const perWeek = hrs * rate, wk = price / perWeek, mo = wk / (weeks / 12);
      out('hours').textContent = hrs;
      out('rate').textContent = rate;
      out('payback').textContent = mo < 1
        ? `${Math.max(1, Math.ceil(wk))} ${calc.dataset.unitWeek}`
        : `${(Math.round(mo * 2) / 2).toString().replace('.', ',')} ${calc.dataset.unitMonth}`;
      out('yearHours').textContent = fmt(hrs * weeks);
      out('yearValue').textContent = fmt(perWeek * weeks);
    };
    calc.addEventListener('input', update);
    update();
  }
})();
