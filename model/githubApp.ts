import * as mongoose from "mongoose";

const GithubAppSchema = new mongoose.Schema({
  installation_id: {
    required: true,
    type: Number
  },
  username: {
    required: false,
    type: String
  },
  user_type: {
    required: false,
    type: String
  }
})

const GithubApp = mongoose.model('GithubApp', GithubAppSchema)

export {
  GithubApp
}