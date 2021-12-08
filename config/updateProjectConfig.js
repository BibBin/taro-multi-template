/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const BrandEnvMap = require('../src/config/brand');
const CURBD = BrandEnvMap.CURBD;
const { readFileSync, writeFileSync } = fs;

function updateProjectConfig(filePath) {
  const BrandEnv = BrandEnvMap[CURBD];
  const fileOption = { encoding: 'utf-8' };
  const fileContent = readFileSync(filePath, fileOption);
  const config = JSON.parse(fileContent.toString());
  const env = process.env.NODE_ENV || 'development';
  config.appid = BrandEnv[env].appid;
  console.log(
    '\x1B[36m%s\x1B[0m',
    '=======================================================配置信息========================================================'
  );
  console.log(
    '\x1B[36m%s\x1B[0m',
    '__________' +
      process.env.NODE_ENV +
      '__________' +
      BrandEnv[env].appName +
      ':' +
      BrandEnv[env].appid +
      '__________'
  );
  console.log(
    '\x1B[36m%s\x1B[0m',
    '=======================================================配置信息========================================================'
  );

  const newStr = JSON.stringify(config, null, 2);
  writeFileSync(filePath, newStr, fileOption);
}

updateProjectConfig(path.join(__dirname, '../project.config.json'));
