/*
  Using explicit check for click's clientX/Y being outside of menu DOMRect     here, instead of using Node.contains(event.target); 
  contains() does not always consider SVGs to be contained by HTML elements 
  due to different namespaces, so I feel this is safer
*/

function clickIsWithinNode(event, node) {
  const { clientX, clientY } = event;
  const nodeRect = node.getBoundingClientRect();

  if (
    clientX < nodeRect.left ||
    clientX > nodeRect.right ||
    clientY < nodeRect.top ||
    clientY > nodeRect.bottom
  ) {
    return false;
  }
  return true;
}

export default clickIsWithinNode;
