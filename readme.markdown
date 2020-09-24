# danger-plugin-typecheck

Uses typescript's `tsc` command output to present errors
using [danger](https://danger.system).

## Usage

Import and call the function from your _Dangerfile_;

```
import typecheck from '@lsmoura/danger-plugin-typecheck';

typecheck('tsc_raw.log');
```

The script needs to have the `tsc` command output available to parse.
You can use this script on your `package.json` file to produce the output:

```
"ci:type-check": "tsc --pretty false | tee tsc_raw.log"
```

And you can include this step on your danger CI integration (this example
is for when using github actions, but it can be easily adapted to others):

```
  - name: typechecking
    continue-on-error: true
    run: yarn ci:type-check
```

Remember, the typechecking action needs to be ran before the `danger ci` 
command.

# Author

[Sergio Moura](https://sergio.moura.ca)
