gdjs.EndingCode = {};
gdjs.EndingCode.GDFireworksAnimationObjects1= [];
gdjs.EndingCode.GDFireworksAnimationObjects2= [];
gdjs.EndingCode.GDKarenObjects1= [];
gdjs.EndingCode.GDKarenObjects2= [];
gdjs.EndingCode.GDText4Objects1= [];
gdjs.EndingCode.GDText4Objects2= [];
gdjs.EndingCode.GDText3Objects1= [];
gdjs.EndingCode.GDText3Objects2= [];
gdjs.EndingCode.GDText2Objects1= [];
gdjs.EndingCode.GDText2Objects2= [];
gdjs.EndingCode.GDGoToMapObjects1= [];
gdjs.EndingCode.GDGoToMapObjects2= [];
gdjs.EndingCode.GDText1Objects1= [];
gdjs.EndingCode.GDText1Objects2= [];

gdjs.EndingCode.conditionTrue_0 = {val:false};
gdjs.EndingCode.condition0IsTrue_0 = {val:false};
gdjs.EndingCode.condition1IsTrue_0 = {val:false};
gdjs.EndingCode.condition2IsTrue_0 = {val:false};
gdjs.EndingCode.conditionTrue_1 = {val:false};
gdjs.EndingCode.condition0IsTrue_1 = {val:false};
gdjs.EndingCode.condition1IsTrue_1 = {val:false};
gdjs.EndingCode.condition2IsTrue_1 = {val:false};


gdjs.EndingCode.eventsList0 = function(runtimeScene) {

{


gdjs.EndingCode.condition0IsTrue_0.val = false;
{
gdjs.EndingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndingCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "SaveYouWithMyLove - copia.mp3", true, 100, 1);
}}

}


{


gdjs.EndingCode.condition0IsTrue_0.val = false;
{
gdjs.EndingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndingCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ULQYF9C-fireworks-03.mp3", true, 98, 1);
}}

}


{


gdjs.EndingCode.condition0IsTrue_0.val = false;
gdjs.EndingCode.condition1IsTrue_0.val = false;
{
gdjs.EndingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "m");
}if ( gdjs.EndingCode.condition0IsTrue_0.val ) {
{
{gdjs.EndingCode.conditionTrue_1 = gdjs.EndingCode.condition1IsTrue_0;
gdjs.EndingCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14024004);
}
}}
if (gdjs.EndingCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}}

}


};

gdjs.EndingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndingCode.GDFireworksAnimationObjects1.length = 0;
gdjs.EndingCode.GDFireworksAnimationObjects2.length = 0;
gdjs.EndingCode.GDKarenObjects1.length = 0;
gdjs.EndingCode.GDKarenObjects2.length = 0;
gdjs.EndingCode.GDText4Objects1.length = 0;
gdjs.EndingCode.GDText4Objects2.length = 0;
gdjs.EndingCode.GDText3Objects1.length = 0;
gdjs.EndingCode.GDText3Objects2.length = 0;
gdjs.EndingCode.GDText2Objects1.length = 0;
gdjs.EndingCode.GDText2Objects2.length = 0;
gdjs.EndingCode.GDGoToMapObjects1.length = 0;
gdjs.EndingCode.GDGoToMapObjects2.length = 0;
gdjs.EndingCode.GDText1Objects1.length = 0;
gdjs.EndingCode.GDText1Objects2.length = 0;

gdjs.EndingCode.eventsList0(runtimeScene);
return;

}

gdjs['EndingCode'] = gdjs.EndingCode;
