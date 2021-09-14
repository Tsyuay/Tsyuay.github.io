gdjs.GameCompletedCode = {};
gdjs.GameCompletedCode.GDNewObjectObjects1= [];
gdjs.GameCompletedCode.GDNewObjectObjects2= [];
gdjs.GameCompletedCode.GDNewObject2Objects1= [];
gdjs.GameCompletedCode.GDNewObject2Objects2= [];
gdjs.GameCompletedCode.GDNewObject3Objects1= [];
gdjs.GameCompletedCode.GDNewObject3Objects2= [];

gdjs.GameCompletedCode.conditionTrue_0 = {val:false};
gdjs.GameCompletedCode.condition0IsTrue_0 = {val:false};
gdjs.GameCompletedCode.condition1IsTrue_0 = {val:false};


gdjs.GameCompletedCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCompletedCode.condition0IsTrue_0.val = false;
{
gdjs.GameCompletedCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCompletedCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.GameCompletedCode.condition0IsTrue_0.val = false;
{
gdjs.GameCompletedCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.GameCompletedCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.GameCompletedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCompletedCode.GDNewObjectObjects1.length = 0;
gdjs.GameCompletedCode.GDNewObjectObjects2.length = 0;
gdjs.GameCompletedCode.GDNewObject2Objects1.length = 0;
gdjs.GameCompletedCode.GDNewObject2Objects2.length = 0;
gdjs.GameCompletedCode.GDNewObject3Objects1.length = 0;
gdjs.GameCompletedCode.GDNewObject3Objects2.length = 0;

gdjs.GameCompletedCode.eventsList0(runtimeScene);
return;

}

gdjs['GameCompletedCode'] = gdjs.GameCompletedCode;
