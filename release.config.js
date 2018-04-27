module.exports = {
  "branch": "master",
  "debug": true,
  "verifyConditions": [
    "@semantic-release/git"
  ],
  "prepare": [
    {
      "path": "@semantic-release/changelog",
      "changelogFile": "CHANGELOG.md",
    },
    {
      "path": "@semantic-release/npm",
      "npmPublish": false,
    },
    {
      "path": "@semantic-release/git",
      "message": "chore(release): ${nextRelease.version} \n\n${nextRelease.notes}"
    }
  ],
  "publish": [],
  "success": [],
  "fail": []
};
