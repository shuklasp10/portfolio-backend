const mongoose = require("mongoose");

const SocialsSchema = new mongoose.Schema({
  giturl: { type: String, required: true },
  mail: { type: String, required: true },
  phone: { type: String, required: true },
});

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  totalYear: { type: Number, required: true },
  position: { type: String, required: true },
  startYear: { type: Number, required: true },
  endYear: { type: mongoose.Schema.Types.Mixed, required: true }, // Can be a number or "Present"
  description: String
});

const ResumeSchema = new mongoose.Schema({
  viewurl: { type: String, required: true },
  downloadurl: { type: String, required: true },
});

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  headline: {
    type: [String],
    required: true,
    validate: {
      validator: (v) => v.length === 2,
      message: "Headline must contain exactly two strings.",
    },
  },
  skills: { type: [String], required: true },
  mapurl: { type: String, required: true },
  projects: { type: [ProjectSchema], required: true },
  experience: { type: [CompanySchema], required: true },
  socials: { type: SocialsSchema, required: true },
  resume: { type: ResumeSchema, required: true },
});

module.exports = mongoose.model("User", UserSchema);
