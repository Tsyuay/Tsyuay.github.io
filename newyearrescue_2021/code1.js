gdjs.PFPCode = {};
gdjs.PFPCode.GDSkyObjects1= [];
gdjs.PFPCode.GDSkyObjects2= [];
gdjs.PFPCode.GDHouseObjects1= [];
gdjs.PFPCode.GDHouseObjects2= [];
gdjs.PFPCode.GDSnowObjects1= [];
gdjs.PFPCode.GDSnowObjects2= [];
gdjs.PFPCode.GDLogoObjects1= [];
gdjs.PFPCode.GDLogoObjects2= [];
gdjs.PFPCode.GDAfangamebyObjects1= [];
gdjs.PFPCode.GDAfangamebyObjects2= [];
gdjs.PFPCode.GDPlayObjects1= [];
gdjs.PFPCode.GDPlayObjects2= [];
gdjs.PFPCode.GDPlayTextObjects1= [];
gdjs.PFPCode.GDPlayTextObjects2= [];

gdjs.PFPCode.conditionTrue_0 = {val:false};
gdjs.PFPCode.condition0IsTrue_0 = {val:false};
gdjs.PFPCode.condition1IsTrue_0 = {val:false};
gdjs.PFPCode.condition2IsTrue_0 = {val:false};


gdjs.PFPCode.mapOfGDgdjs_46PFPCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.PFPCode.GDPlayObjects1});gdjs.PFPCode.eventsList0 = function(runtimeScene) {

{


gdjs.PFPCode.condition0IsTrue_0.val = false;
{
gdjs.PFPCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PFPCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "seasons-greedings-music-hq-angry-birds-seasons-pc-version.mp3", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.PFPCode.GDPlayObjects1);

gdjs.PFPCode.condition0IsTrue_0.val = false;
gdjs.PFPCode.condition1IsTrue_0.val = false;
{
gdjs.PFPCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PFPCode.mapOfGDgdjs_46PFPCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PFPCode.condition0IsTrue_0.val ) {
{
gdjs.PFPCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.PFPCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};

gdjs.PFPCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PFPCode.GDSkyObjects1.length = 0;
gdjs.PFPCode.GDSkyObjects2.length = 0;
gdjs.PFPCode.GDHouseObjects1.length = 0;
gdjs.PFPCode.GDHouseObjects2.length = 0;
gdjs.PFPCode.GDSnowObjects1.length = 0;
gdjs.PFPCode.GDSnowObjects2.length = 0;
gdjs.PFPCode.GDLogoObjects1.length = 0;
gdjs.PFPCode.GDLogoObjects2.length = 0;
gdjs.PFPCode.GDAfangamebyObjects1.length = 0;
gdjs.PFPCode.GDAfangamebyObjects2.length = 0;
gdjs.PFPCode.GDPlayObjects1.length = 0;
gdjs.PFPCode.GDPlayObjects2.length = 0;
gdjs.PFPCode.GDPlayTextObjects1.length = 0;
gdjs.PFPCode.GDPlayTextObjects2.length = 0;

gdjs.PFPCode.eventsList0(runtimeScene);
return;

}

gdjs['PFPCode'] = gdjs.PFPCode;
