module.exports = {
  "branch": "master",
  "debug": true,
  "verifyConditions": [
    "@semantic-release/git"
  ],
  "prepare": [
    {
      "path": "@semantic-release/npm",
      "npmPublish": false,
    },
    {
      "path": "@semantic-release/git",
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }
  ],
  "publish": [],
  "success": [],
  "fail": []
};
