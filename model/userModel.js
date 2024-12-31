const mongoose = require('mongoose');

const MonthTypeEnum = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
});

const SocialsSchema = new mongoose.Schema({
  giturl: { type: String, required: true },
  mail: { type: String, required: true },
  phone: { type: String, required: true },
});

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  icon: { type: String, required: true },
  totalYear: { type: Number, required: true },
  position: { type: String, required: true },
  startYear: { type: Number, required: true },
  startMonth: { type: String, enum: MonthTypeEnum, required: true },
  endMonth: { type: String, enum: [...MonthTypeEnum, ''], default: '' },
  endYear: { type: Number, default: 0 },
  description: [{ type: String }],
});

const ExperienceSchema = new mongoose.Schema({
  total: { type: Number, required: true },
  companies: [CompanySchema],
});

const ResumeSchema = new mongoose.Schema({
  updateMonth: { type: String, enum: MonthTypeEnum, required: true },
  updateYear: { type: Number, required: true },
  viewurl: { type: String, required: true },
  file: { type: String, default: '' },
});

const MapSchema = new mongoose.Schema({
  image: { type: String, required: true },
  url: { type: String, required: true },
  address: { type: String, required: true },
});

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  image: { type: String, required: true },
  previewLink: { type: String, required: true },
  sourceCodeLink: { type: String, default: '' },
});

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  headline: { type: [String], validate: v => v.length === 2, required: true },
  skills: [SkillSchema],
  map: MapSchema,
  projects: [ProjectSchema],
  experience: ExperienceSchema,
  socials: SocialsSchema,
  resume: ResumeSchema,
});

module.exports = mongoose.model('User', UserSchema);
