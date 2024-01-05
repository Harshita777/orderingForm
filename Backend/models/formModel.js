const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    organizationName: { type: String, default: null },
    orderingNodes: { type: Number, default: null },
    channelName: { type: String, default: null },
    domain: { type: String, default: null },
    maxMessageCount: { type: Number, default: null },
    absoluteMaxBytes: { type: Number, default: null },
    preferredMaxBytes: { type: Number, default: null }
});

module.exports = mongoose.model('FormData', FormDataSchema);
