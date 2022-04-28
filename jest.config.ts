import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testRegex: '.spec.(js|ts)$',
    rootDir: 'src',
  };

export default config;



