import * as danger from 'danger';
import { existsSync, readFileSync } from 'fs';

// typescript check
function tscCheck(filename: string = 'tsc_raw.log') {
  if (existsSync(filename)) {
    const log = readFileSync(filename, 'utf8');
    if (log.length) {
      danger.fail('TypeScript hasn\'t passed, see below for full logs');
      danger.markdown(`### TypeScript Fails\n\n\`\`\`${log}\`\`\``);
    }
  }
}

export default tscCheck;
