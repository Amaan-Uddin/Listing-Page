const { Readable } = require('stream')
module.exports = function bufferToStream(buffer) {
	const readable = new Readable({
		read() {
			this.push(buffer)
			this.push(null)
		},
	})
	return readable
}
