const mongoose = require('mongoose');

const DemandSchema = new mongoose.Schema({
  open: {
    type: Boolean,
    default: true,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  process: {
    type: [String],
    require: false,
  },
  categoryID: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    require: true,
  },
  sectorHistory: [{
    sectorID: {
      type: String,
      require: true,
    },
    responsibleUserName: {
      type: String,
      require: false,
    },
    createdAt: {
      type: Date,
      require: true,
    },
    updatedAt: {
      type: Date,
      require: true,
    },
  }],
  demandHistory: [{
    userID: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      require: true,
    },
    label: {
      type: String,
      require: true,
    },
    before: {
      type: String,
      require: true,
      default: '',
    },
    after: {
      type: String,
      require: true,
      default: '',
    },
  }],
  clientID: {
    type: String,
    require: true,
  },
  userID: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    require: true,
  },
  updatedAt: {
    type: Date,
    require: true,
  },
  updateList: [{
    userName: {
      type: String,
      require: true,
    },
    userSector: {
      type: String,
      require: true,
    },
    userID: {
      type: String,
      require: true,
    },
    fileID: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }],
    },
    description: {
      type: String,
      require: true,
    },
    visibilityRestriction: {
      type: Boolean,
      require: true,
      default: true,
    },
    important: {
      type: Boolean,
      require: true,
      default: false,
    },
    treatment: {
      type: Boolean,
      require: true,
      default: false,
    },
    createdAt: {
      type: Date,
      require: true,
    },
    updatedAt: {
      type: Date,
      require: true,
    },
  }],
});

module.exports = mongoose.model('Demand', DemandSchema);
