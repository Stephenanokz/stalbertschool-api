const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema(
  {
    welcomeText: { type: String, default: "" },
    schoolImage: { type: String, default: "" },
    principalQuote: { type: String, default: "" },
    principalImgHome: { type: String, default: "" },
    principalTitleHome: { type: String, default: "" },
    principalDesc: { type: String, default: "" },
    principalImgAbout: { type: String, default: "" },
    principalTitle: { type: String, default: "" },
    principalName: { type: String, default: "" },
    schoolImageLg: { type: String, default: "" },
    schoolImageSmT: { type: String, default: "" },
    schoolImageSmB: { type: String, default: "" },
    desc: { type: String, default: "" },
    vision: { type: String, default: "" },
    visionImg: { type: String, default: "" },
    mission: { type: String, default: "" },
    missionImg: { type: String, default: "" },
    philosophy: { type: String, default: "" },
    philosophyImg: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("About", AboutSchema);
