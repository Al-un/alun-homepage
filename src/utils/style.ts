export const setCssRootVariable = (varName: string, varValue: string) => {
  const prependedVarName = varName.startsWith("--") ? varName : `--${varName}`;
  document.documentElement.style.setProperty(prependedVarName, varValue);
};
