import * as danger from 'danger';
import eslint from '@lsmoura/danger-plugin-eslint';
import typecheck from './src';

function includes(whole: string, piece: string) {
  if (!whole || typeof whole !== 'string') return false;
  return whole.indexOf(piece) >= 0;
}

// No PR is too small to include a description of why you made a change
if (danger.danger.github.pr.body.length < 10) {
  danger.warn('Please include a description of your PR changes.');
}

// Check that someone has been assigned to this PR
if (danger.danger.github.pr.assignee === null) {
  danger.warn(
    'Please assign someone to merge this PR, and optionally include people who should review.'
  );
}

// Request changes to src also include changes to tests.
const allFiles = danger.danger.git.modified_files.concat(danger.git.created_files);
const hasAppChanges = allFiles.some(p => includes(p, 'src/'));
const hasTestChanges = allFiles.some(p => includes(p, '__tests__/'));

if (hasAppChanges && !hasTestChanges) {
  danger.warn('This PR does not include changes to tests, even though it affects app code.');
}

eslint();
typecheck()
