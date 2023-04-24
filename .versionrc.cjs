module.exports = {
  scripts: {
    prerelease: "concurrently \"pnpm:lint\" \"pnpm:check:types\" \"pnpm:test\"",
    posttag: "git push --follow-tags"
  },
};
