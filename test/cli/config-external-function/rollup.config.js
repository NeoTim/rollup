import assert from 'assert';
import { resolve } from 'path';

var config = resolve( './_config.js' );

export default {
	entry: 'main.js',
	format: 'cjs',

	external: function ( id ) {
		return id === config;
	},

	plugins: [
		{
			load: function ( id ) {
				assert.notEqual( id, config );
			}
		}
	]
};
