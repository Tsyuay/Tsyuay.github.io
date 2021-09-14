gdjs.MenuCode = {};
gdjs.MenuCode.GDBGObjects1= [];
gdjs.MenuCode.GDBGObjects2= [];
gdjs.MenuCode.GDTempAlley1Objects1= [];
gdjs.MenuCode.GDTempAlley1Objects2= [];
gdjs.MenuCode.GDShelfObjects1= [];
gdjs.MenuCode.GDShelfObjects2= [];
gdjs.MenuCode.GDScoreObjects1= [];
gdjs.MenuCode.GDScoreObjects2= [];
gdjs.MenuCode.GDScoreNumObjects1= [];
gdjs.MenuCode.GDScoreNumObjects2= [];
gdjs.MenuCode.GDMoreGamesObjects1= [];
gdjs.MenuCode.GDMoreGamesObjects2= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDLogoObjects1= [];
gdjs.MenuCode.GDLogoObjects2= [];
gdjs.MenuCode.GDWonderWomanObjects1= [];
gdjs.MenuCode.GDWonderWomanObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("ScoreNum"), gdjs.MenuCode.GDScoreNumObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDScoreNumObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDScoreNumObjects1[i].setString("" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDMoreGamesObjects1Objects = Hashtable.newFrom({"MoreGames": gdjs.MenuCode.GDMoreGamesObjects1});gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8118316);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("http://tsyuay.github.io", runtimeScene);
}}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "RockNRoll.wav", true, 100, 1);
}}

}


{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoreGames"), gdjs.MenuCode.GDMoreGamesObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDMoreGamesObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMoreGamesObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMoreGamesObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMoreGamesObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.MenuCode.GDMoreGamesObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMoreGamesObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBGObjects1.length = 0;
gdjs.MenuCode.GDBGObjects2.length = 0;
gdjs.MenuCode.GDTempAlley1Objects1.length = 0;
gdjs.MenuCode.GDTempAlley1Objects2.length = 0;
gdjs.MenuCode.GDShelfObjects1.length = 0;
gdjs.MenuCode.GDShelfObjects2.length = 0;
gdjs.MenuCode.GDScoreObjects1.length = 0;
gdjs.MenuCode.GDScoreObjects2.length = 0;
gdjs.MenuCode.GDScoreNumObjects1.length = 0;
gdjs.MenuCode.GDScoreNumObjects2.length = 0;
gdjs.MenuCode.GDMoreGamesObjects1.length = 0;
gdjs.MenuCode.GDMoreGamesObjects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDWonderWomanObjects1.length = 0;
gdjs.MenuCode.GDWonderWomanObjects2.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
