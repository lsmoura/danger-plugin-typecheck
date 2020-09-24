import { existsSync, readFileSync } from 'fs';

declare function fail(message?: string): void;
declare function markdown(message?: string): void;

// typescript check
function tscCheck(filename: string = 'tsc_raw.log') {
  if (existsSync(filename)) {
    const log = readFileSync(filename, 'utf8');
    if (log.length) {
      fail('TypeScript hasn\'t passed, see below for full logs');
      markdown(`### TypeScript Fails\n\n\`\`\`${log}\`\`\``);
    }
  }
}

export default tscCheck;
