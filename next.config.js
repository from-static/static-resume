/** @type {import('next').NextConfig} */
const { _static } = require('./static.json');

const nextConfig = {
  output: 'export',
  /**
   * If the `static.json` file contains a `host` object, use the `base_path` value
   * as the `basePath` for the Next.js application.
   */
  basePath: _static?.host?.base_path || undefined,
}

module.exports = nextConfig
