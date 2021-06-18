const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = (mongoose) => {
  var TutorialSchema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
    },
    {
      timestamps: true,
    }
  );

  TutorialSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", TutorialSchema);
  return Tutorial;
};
