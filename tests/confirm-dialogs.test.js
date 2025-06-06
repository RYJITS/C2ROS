const fs = require('fs');
const path = require('path');

describe('c2rConfirm', () => {
  beforeAll(() => {
    const script = fs.readFileSync(path.resolve(__dirname, '../js/modules/core/config.js'), 'utf8');
    window.eval(script);
  });

  test('retourne toujours true lorsque confirmDialogs est false', () => {
    window.C2R_CONFIG.ui.confirmDialogs = false;
    window.confirm = jest.fn(() => false);
    const result = window.c2rConfirm('Continuer ?');
    expect(result).toBe(true);
    expect(window.confirm).not.toHaveBeenCalled();
  });
});
