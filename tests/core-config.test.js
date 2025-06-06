const fs = require('fs');
const path = require('path');

describe('CoreConfig.reset', () => {
  beforeAll(() => {
    const script = fs.readFileSync(path.resolve(__dirname, '../js/modules/core/config.js'), 'utf8');
    window.eval(script);
  });

  test('reset remet confirmDialogs à true', () => {
    const cfg = new window.CoreConfig();
    cfg.ui.confirmDialogs = false;
    cfg.reset();
    expect(cfg.ui.confirmDialogs).toBe(true);
  });
});
