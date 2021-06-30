'use strict';
const alfy = require('alfy');

if (alfy.input === 'foo') {
	alfy.config.set('foo', 'bar');
}

alfy.output([
	{
		title: alfy.input,
		subtitle: alfy.config.get(alfy.input)
	}
]);
