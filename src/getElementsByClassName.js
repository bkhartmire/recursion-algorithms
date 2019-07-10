const getElementsByClassName = (targetClass) => {
  const result = [];

  const recursiveFunc = (node) => {
    const nodeClassList = node.className.split(" ");

    if (nodeClassList.includes(targetClass)) {
      result.push(node);
    }
    if (node.children.length > 0) {
      for (const child of node.children) {
        recursiveFunc(child);
      }
    }
  };
  recursiveFunc(document.body);
  return result;
};

module.exports = { getElementsByClassName };
