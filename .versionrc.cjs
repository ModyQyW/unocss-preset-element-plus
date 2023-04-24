module.exports = {
  scripts: {
    prerelease: "concurrently \"pnpm run lint\" \"pnpm run check:types\" \"pnpm run test\"",
    posttag: "git push --follow-tags"
  },
};
