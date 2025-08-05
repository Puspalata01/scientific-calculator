$(document).ready(function () {
  const $display = $('.display');

  function evaluateFunction(func, value) {
    const val = parseFloat(value);
    switch (func) {
      case 'sin': return Math.sin(val * Math.PI / 180);
      case 'cos': return Math.cos(val * Math.PI / 180);
      case 'tan': return Math.tan(val * Math.PI / 180);
      case 'log': return Math.log10(val);
      case 'ln': return Math.log(val);
      case '√': return Math.sqrt(val);
      case 'π': return Math.PI;
      case 'e': return Math.E;
      case 'x²': return Math.pow(val, 2);
      default: return value;
    }
  }

  $('button').on('click', function () {
    const text = $(this).text();
    let current = $display.text();

    if (text === 'AC') {
      $display.text('0');
    } else if (text === 'DEL') {
      current = current.slice(0, -1);
      $display.text(current || '0');
    } else if (text === '=') {
      try {
        const result = eval(current.replace(/×/g, '*').replace(/÷/g, '/'));
        $display.text(result);
      } catch {
        $display.text('Error');
      }
    } else if (['sin', 'cos', 'tan', 'log', 'ln', '√', 'x²'].includes(text)) {
      const result = evaluateFunction(text, current);
      $display.text(result);
    } else if (text === 'π') {
      $display.text(current === '0' ? Math.PI.toFixed(6) : current + Math.PI.toFixed(6));
    } else if (text === 'e') {
      $display.text(current === '0' ? Math.E.toFixed(6) : current + Math.E.toFixed(6));
    } else {
      $display.text(current === '0' ? text : current + text);
    }
  });
});
