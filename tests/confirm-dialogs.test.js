const fs = require('fs');
const path = require('path');

describe('c2rConfirm', () => {
  beforeAll(() => {
    const script = fs.readFileSync(path.resolve(__dirname, '../js/modules/core/config.js'), 'utf8');
    window.eval(script);
  });

  test('ignore confirm when disabled', () => {
    window.C2R_CONFIG.ui.confirmDialogs = false;
    global.confirm = jest.fn().mockReturnValue(false);
    const result = window.c2rConfirm('Question?');
    expect(result).toBe(true);
    expect(global.confirm).not.toHaveBeenCalled();
  });
});
