gdjs.GameCompletedCode = {};
gdjs.GameCompletedCode.GDBGObjects1= [];
gdjs.GameCompletedCode.GDBGObjects2= [];
gdjs.GameCompletedCode.GDCompletedObjects1= [];
gdjs.GameCompletedCode.GDCompletedObjects2= [];
gdjs.GameCompletedCode.GDScoreObjects1= [];
gdjs.GameCompletedCode.GDScoreObjects2= [];
gdjs.GameCompletedCode.GDscoreObjects1= [];
gdjs.GameCompletedCode.GDscoreObjects2= [];
gdjs.GameCompletedCode.GDPressBObjects1= [];
gdjs.GameCompletedCode.GDPressBObjects2= [];
gdjs.GameCompletedCode.GDNiceOneObjects1= [];
gdjs.GameCompletedCode.GDNiceOneObjects2= [];
gdjs.GameCompletedCode.GDbatgirlObjects1= [];
gdjs.GameCompletedCode.GDbatgirlObjects2= [];

gdjs.GameCompletedCode.conditionTrue_0 = {val:false};
gdjs.GameCompletedCode.condition0IsTrue_0 = {val:false};
gdjs.GameCompletedCode.condition1IsTrue_0 = {val:false};


gdjs.GameCompletedCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCompletedCode.condition0IsTrue_0.val = false;
{
gdjs.GameCompletedCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCompletedCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "music.mo3(7).wav", true, 100, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.GameCompletedCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.GameCompletedCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.GameCompletedCode.GDscoreObjects1[i].setString("Score:" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.GameCompletedCode.condition0IsTrue_0.val = false;
{
gdjs.GameCompletedCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
}if (gdjs.GameCompletedCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.GameCompletedCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCompletedCode.GDBGObjects1.length = 0;
gdjs.GameCompletedCode.GDBGObjects2.length = 0;
gdjs.GameCompletedCode.GDCompletedObjects1.length = 0;
gdjs.GameCompletedCode.GDCompletedObjects2.length = 0;
gdjs.GameCompletedCode.GDScoreObjects1.length = 0;
gdjs.GameCompletedCode.GDScoreObjects2.length = 0;
gdjs.GameCompletedCode.GDscoreObjects1.length = 0;
gdjs.GameCompletedCode.GDscoreObjects2.length = 0;
gdjs.GameCompletedCode.GDPressBObjects1.length = 0;
gdjs.GameCompletedCode.GDPressBObjects2.length = 0;
gdjs.GameCompletedCode.GDNiceOneObjects1.length = 0;
gdjs.GameCompletedCode.GDNiceOneObjects2.length = 0;
gdjs.GameCompletedCode.GDbatgirlObjects1.length = 0;
gdjs.GameCompletedCode.GDbatgirlObjects2.length = 0;

gdjs.GameCompletedCode.eventsList0(runtimeScene);
return;

}

gdjs['GameCompletedCode'] = gdjs.GameCompletedCode;
