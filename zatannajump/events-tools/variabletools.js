var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let variable;
    (function(variable2) {
      variable2.getVariableNumber = function(variable3) {
        return variable3.getAsNumber();
      };
      variable2.getVariableString = function(variable3) {
        return variable3.getAsString();
      };
      variable2.getVariableBoolean = function(variable3, compareWith) {
        return variable3.getAsBoolean() === compareWith;
      };
      variable2.setVariableBoolean = function(variable3, newValue) {
        variable3.setBoolean(newValue);
      };
      variable2.toggleVariableBoolean = function(variable3) {
        variable3.setBoolean(!variable3.getAsBoolean());
      };
      variable2.sceneVariableExists = function(runtimeScene, variableName) {
        return runtimeScene.getVariables().has(variableName);
      };
      variable2.globalVariableExists = function(runtimeScene, variableName) {
        return runtimeScene.getGame().getVariables().has(variableName);
      };
      variable2.variableChildExists = function(variable3, childName) {
        return variable3.hasChild(childName);
      };
      variable2.variableRemoveChild = function(variable3, childName) {
        variable3.removeChild(childName);
      };
      variable2.variableClearChildren = function(variable3) {
        variable3.clearChildren();
      };
      variable2.variablePushCopy = function(array, variable3) {
        array.pushVariableCopy(variable3);
      };
      variable2.valuePush = function(array, value) {
        array.pushValue(value);
      };
      variable2.variableRemoveAt = function(array, index) {
        array.removeAtIndex(index);
      };
      variable2.getVariableChildCount = function(variable3) {
        return variable3.getChildrenCount();
      };
    })(variable = evtTools2.variable || (evtTools2.variable = {}));
    let common;
    (function(common2) {
      common2.getVariableNumber = gdjs2.evtTools.variable.getVariableNumber;
      common2.getVariableString = gdjs2.evtTools.variable.getVariableString;
      common2.getVariableBoolean = gdjs2.evtTools.variable.getVariableBoolean;
      common2.setVariableBoolean = gdjs2.evtTools.variable.setVariableBoolean;
      common2.toggleVariableBoolean = gdjs2.evtTools.variable.toggleVariableBoolean;
      common2.sceneVariableExists = gdjs2.evtTools.variable.sceneVariableExists;
      common2.globalVariableExists = gdjs2.evtTools.variable.globalVariableExists;
      common2.variableChildExists = gdjs2.evtTools.variable.variableChildExists;
      common2.variableRemoveChild = gdjs2.evtTools.variable.variableRemoveChild;
      common2.variableClearChildren = gdjs2.evtTools.variable.variableClearChildren;
      common2.variablePushCopy = gdjs2.evtTools.variable.variablePushCopy;
      common2.valuePush = gdjs2.evtTools.variable.valuePush;
      common2.variableRemoveAt = gdjs2.evtTools.variable.variableRemoveAt;
      common2.getVariableChildCount = gdjs2.evtTools.variable.getVariableChildCount;
    })(common = evtTools2.common || (evtTools2.common = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=variabletools.js.map
