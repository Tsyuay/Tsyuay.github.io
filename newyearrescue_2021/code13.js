gdjs.IntroCode = {};
gdjs.IntroCode.GDCharacter1Objects1= [];
gdjs.IntroCode.GDCharacter1Objects2= [];
gdjs.IntroCode.GDCharacter2Objects1= [];
gdjs.IntroCode.GDCharacter2Objects2= [];
gdjs.IntroCode.GDMoonObjects1= [];
gdjs.IntroCode.GDMoonObjects2= [];
gdjs.IntroCode.GDText1Objects1= [];
gdjs.IntroCode.GDText1Objects2= [];
gdjs.IntroCode.GDText2Objects1= [];
gdjs.IntroCode.GDText2Objects2= [];
gdjs.IntroCode.GDPlayObjects1= [];
gdjs.IntroCode.GDPlayObjects2= [];
gdjs.IntroCode.GDPlayTextObjects1= [];
gdjs.IntroCode.GDPlayTextObjects2= [];
gdjs.IntroCode.GDBGObjects1= [];
gdjs.IntroCode.GDBGObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.IntroCode.GDPlayObjects1});gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "music_home_screen.ogg", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.IntroCode.GDPlayObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDCharacter1Objects1.length = 0;
gdjs.IntroCode.GDCharacter1Objects2.length = 0;
gdjs.IntroCode.GDCharacter2Objects1.length = 0;
gdjs.IntroCode.GDCharacter2Objects2.length = 0;
gdjs.IntroCode.GDMoonObjects1.length = 0;
gdjs.IntroCode.GDMoonObjects2.length = 0;
gdjs.IntroCode.GDText1Objects1.length = 0;
gdjs.IntroCode.GDText1Objects2.length = 0;
gdjs.IntroCode.GDText2Objects1.length = 0;
gdjs.IntroCode.GDText2Objects2.length = 0;
gdjs.IntroCode.GDPlayObjects1.length = 0;
gdjs.IntroCode.GDPlayObjects2.length = 0;
gdjs.IntroCode.GDPlayTextObjects1.length = 0;
gdjs.IntroCode.GDPlayTextObjects2.length = 0;
gdjs.IntroCode.GDBGObjects1.length = 0;
gdjs.IntroCode.GDBGObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);
return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
