const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    img: { type: String },
    tokenName: { type: String },
    symbol: { type: String },
    decimals: { type: Number },
    marketcap: { type: Number },
    chain: { type: String },
  },
  {
    versionKey: false,
  }
);

const DataModel = mongoose.model("data", DataSchema);

module.exports = { DataModel };
