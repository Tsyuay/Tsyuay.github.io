gdjs.MenuCode = {};
gdjs.MenuCode.GDBackgroundObjects1= [];
gdjs.MenuCode.GDBackgroundObjects2= [];
gdjs.MenuCode.GDBackgroundLightObjects1= [];
gdjs.MenuCode.GDBackgroundLightObjects2= [];
gdjs.MenuCode.GDMenuUpperThingObjects1= [];
gdjs.MenuCode.GDMenuUpperThingObjects2= [];
gdjs.MenuCode.GDRainbow1Objects1= [];
gdjs.MenuCode.GDRainbow1Objects2= [];
gdjs.MenuCode.GDStarsObjects1= [];
gdjs.MenuCode.GDStarsObjects2= [];
gdjs.MenuCode.GDLogoObjects1= [];
gdjs.MenuCode.GDLogoObjects2= [];
gdjs.MenuCode.GDRainbow2Objects1= [];
gdjs.MenuCode.GDRainbow2Objects2= [];
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDCopyrightObjects1= [];
gdjs.MenuCode.GDCopyrightObjects2= [];
gdjs.MenuCode.GDRedGummyObjects1= [];
gdjs.MenuCode.GDRedGummyObjects2= [];
gdjs.MenuCode.GDHighScoresButtonObjects1= [];
gdjs.MenuCode.GDHighScoresButtonObjects2= [];
gdjs.MenuCode.GDMoreGamesBtnObjects1= [];
gdjs.MenuCode.GDMoreGamesBtnObjects2= [];
gdjs.MenuCode.GDWelcomeObjects1= [];
gdjs.MenuCode.GDWelcomeObjects2= [];
gdjs.MenuCode.GDPlayCandyObjects1= [];
gdjs.MenuCode.GDPlayCandyObjects2= [];
gdjs.MenuCode.GDopenCheatsbtnObjects1= [];
gdjs.MenuCode.GDopenCheatsbtnObjects2= [];
gdjs.MenuCode.GDopenCheatstxtObjects1= [];
gdjs.MenuCode.GDopenCheatstxtObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDMoreGamesBtnObjects1Objects = Hashtable.newFrom({"MoreGamesBtn": gdjs.MenuCode.GDMoreGamesBtnObjects1});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9021052);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("http://tsyuay.github.io", runtimeScene);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDMoreGamesBtnObjects1Objects = Hashtable.newFrom({"MoreGamesBtn": gdjs.MenuCode.GDMoreGamesBtnObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHighScoresButtonObjects1Objects = Hashtable.newFrom({"HighScoresButton": gdjs.MenuCode.GDHighScoresButtonObjects1});gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HighScores", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHighScoresButtonObjects1Objects = Hashtable.newFrom({"HighScoresButton": gdjs.MenuCode.GDHighScoresButtonObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "InGame", true);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDopenCheatsbtnObjects1Objects = Hashtable.newFrom({"openCheatsbtn": gdjs.MenuCode.GDopenCheatsbtnObjects1});gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CheatsMenu", false);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDopenCheatsbtnObjects1Objects = Hashtable.newFrom({"openCheatsbtn": gdjs.MenuCode.GDopenCheatsbtnObjects1});gdjs.MenuCode.eventsList4 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "music.mo3(6).wav", 1, true, 100, 1);
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{



}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("openCheatsbtn"), gdjs.MenuCode.GDopenCheatsbtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("openCheatstxt"), gdjs.MenuCode.GDopenCheatstxtObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDopenCheatsbtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDopenCheatsbtnObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.MenuCode.GDopenCheatstxtObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDopenCheatstxtObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("MoreGamesBtn"), gdjs.MenuCode.GDMoreGamesBtnObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDMoreGamesBtnObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMoreGamesBtnObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMoreGamesBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMoreGamesBtnObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.MenuCode.GDMoreGamesBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMoreGamesBtnObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoreGamesBtn"), gdjs.MenuCode.GDMoreGamesBtnObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDMoreGamesBtnObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDMoreGamesBtnObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDMoreGamesBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDMoreGamesBtnObjects1[i].setAnimation(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("HighScoresButton"), gdjs.MenuCode.GDHighScoresButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHighScoresButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDHighScoresButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDHighScoresButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHighScoresButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.MenuCode.GDHighScoresButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHighScoresButtonObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HighScoresButton"), gdjs.MenuCode.GDHighScoresButtonObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDHighScoresButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDHighScoresButtonObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDHighScoresButtonObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDHighScoresButtonObjects1[i].setAnimation(0);
}
}}

}


{



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
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDPlayObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setAnimation(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("openCheatsbtn"), gdjs.MenuCode.GDopenCheatsbtnObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDopenCheatsbtnObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDopenCheatsbtnObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDopenCheatsbtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDopenCheatsbtnObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.MenuCode.GDopenCheatsbtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDopenCheatsbtnObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("openCheatsbtn"), gdjs.MenuCode.GDopenCheatsbtnObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDopenCheatsbtnObjects1Objects, runtimeScene, true, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDopenCheatsbtnObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDopenCheatsbtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDopenCheatsbtnObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDBackgroundObjects1.length = 0;
gdjs.MenuCode.GDBackgroundObjects2.length = 0;
gdjs.MenuCode.GDBackgroundLightObjects1.length = 0;
gdjs.MenuCode.GDBackgroundLightObjects2.length = 0;
gdjs.MenuCode.GDMenuUpperThingObjects1.length = 0;
gdjs.MenuCode.GDMenuUpperThingObjects2.length = 0;
gdjs.MenuCode.GDRainbow1Objects1.length = 0;
gdjs.MenuCode.GDRainbow1Objects2.length = 0;
gdjs.MenuCode.GDStarsObjects1.length = 0;
gdjs.MenuCode.GDStarsObjects2.length = 0;
gdjs.MenuCode.GDLogoObjects1.length = 0;
gdjs.MenuCode.GDLogoObjects2.length = 0;
gdjs.MenuCode.GDRainbow2Objects1.length = 0;
gdjs.MenuCode.GDRainbow2Objects2.length = 0;
gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDCopyrightObjects1.length = 0;
gdjs.MenuCode.GDCopyrightObjects2.length = 0;
gdjs.MenuCode.GDRedGummyObjects1.length = 0;
gdjs.MenuCode.GDRedGummyObjects2.length = 0;
gdjs.MenuCode.GDHighScoresButtonObjects1.length = 0;
gdjs.MenuCode.GDHighScoresButtonObjects2.length = 0;
gdjs.MenuCode.GDMoreGamesBtnObjects1.length = 0;
gdjs.MenuCode.GDMoreGamesBtnObjects2.length = 0;
gdjs.MenuCode.GDWelcomeObjects1.length = 0;
gdjs.MenuCode.GDWelcomeObjects2.length = 0;
gdjs.MenuCode.GDPlayCandyObjects1.length = 0;
gdjs.MenuCode.GDPlayCandyObjects2.length = 0;
gdjs.MenuCode.GDopenCheatsbtnObjects1.length = 0;
gdjs.MenuCode.GDopenCheatsbtnObjects2.length = 0;
gdjs.MenuCode.GDopenCheatstxtObjects1.length = 0;
gdjs.MenuCode.GDopenCheatstxtObjects2.length = 0;

gdjs.MenuCode.eventsList4(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
