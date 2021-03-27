const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    shortUrl: {
        type: String,
        required: [true, 'Please add a shortUrl'],
        unique: true,
        maxlength: [40, 'shortUrl cannot be more than 40 characters']
    },
    longUrl: {
        type: String,
        required: true,
        maxlength: [200, 'longUrl cannot be more than 200 characters']
    },
		userId: {
        type: String,
				default: 'guest',
		}
})

module.exports = mongoose.models.Urls || mongoose.model('Urls', UrlSchema);