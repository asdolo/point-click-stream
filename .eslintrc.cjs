module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
		{
			'files': ['*.ts', '*.tsx'],
			rules: {
				'react/react-in-jsx-scope': 'off',
				'simple-import-sort/imports': [
					'error',
					{
						groups: [
							// Packages starting with 'react' first, then rest of packages
							['^react', '^@?\\w'],
							// Assets (e.g import Something from 'assets/...')
							['^~/assets'],
							// Constants (e.g import {something} from 'constants/...')
							['^~/constants'],
							// Design system (e.g import Something from 'design-system/...')
							['^~/design-system'],
							// Locales (e.g import something from 'locales/...')
							['^~/locales'],
							// Navigation (e.g import Something from 'navigation/...')
							['^~/navigation'],
							// Form schemas (e.g import {something} from 'schemas/...')
							['^~/schemas'],
							// Screens (e.g import Something from 'screens/...')
							['^~/screens'],
							// Utils (e.g import {something} from 'utils/...')
							['^~/utils'],
							// Types (e.g import {Something} from '.../types')
							['types$'],
							// Services (e.g import Service from 'services/...')
							['^~/services'],
							// Common hooks (e.g import useHook from 'hooks/...')
							['^~/hooks'],
							// Components (e.g import Something from 'components/...')
							['^~/components'],
							// Whole package (e.g. import 'some-package')
							['^\\u0000'],
							// Parent imports (e.g. import {something} from '../somewhere')
							['^\\.\\.(?!/?$)', '^\\.\\./?$'],
							// Other relative imports (e.g. import {something} from './somewhere')
							['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
							// Relative types and styles
							['^(./styles)', '^(./types)'],
						],
					},
				]
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint',
		'simple-import-sort'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
