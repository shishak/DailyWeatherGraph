# 2.0.4

- Fix bug where using `inches` for `rainfallUnit` would not set up the scale correctly.

# 2.0.3

- Remove remaining hardcoded styles from js, create css classes instead
- Fix cursor positioning bug
- Make sure temperature values are rounded before being used

# 2.0.2

- Fix code bug

# 2.0.1

- Fix incorrect typings

# 2.0.0

- Make data object keys lowerCamelCase, not UpperCamelCase
- Add typings file for use with typescript
- Change default `missingValue` config option to `null` from `-100`
- Expect `container` config option to be plain HTMLElement, not a D3 selection

# 1.0.0

- Add npm package
- Code tidy up
- Upgrade to D3 version 4
- CSS classes now have `dwg-` prefix