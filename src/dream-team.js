module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array) || members.length === 0) return false;
  const result = members.reduce((acc, item) => {
    if (typeof item === 'string') {
      return acc.concat(item.trim().charAt(0));
    }

    return acc;
  }, [])
  return result.filter(i => i.match(/[A-Za-z]/)).map(i => i.toUpperCase()).sort().join('');
};