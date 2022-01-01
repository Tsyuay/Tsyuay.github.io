gdjs.Level3Code = {};
gdjs.Level3Code.GDMoonObjects1= [];
gdjs.Level3Code.GDMoonObjects2= [];
gdjs.Level3Code.GDMoonObjects3= [];
gdjs.Level3Code.GDBGObjects1= [];
gdjs.Level3Code.GDBGObjects2= [];
gdjs.Level3Code.GDBGObjects3= [];
gdjs.Level3Code.GDFadeInObjects1= [];
gdjs.Level3Code.GDFadeInObjects2= [];
gdjs.Level3Code.GDFadeInObjects3= [];
gdjs.Level3Code.GDGrassObjects1= [];
gdjs.Level3Code.GDGrassObjects2= [];
gdjs.Level3Code.GDGrassObjects3= [];
gdjs.Level3Code.GDKarenStaticObjects1= [];
gdjs.Level3Code.GDKarenStaticObjects2= [];
gdjs.Level3Code.GDKarenStaticObjects3= [];
gdjs.Level3Code.GDBlock6Objects1= [];
gdjs.Level3Code.GDBlock6Objects2= [];
gdjs.Level3Code.GDBlock6Objects3= [];
gdjs.Level3Code.GDBlock5Objects1= [];
gdjs.Level3Code.GDBlock5Objects2= [];
gdjs.Level3Code.GDBlock5Objects3= [];
gdjs.Level3Code.GDBlock4Objects1= [];
gdjs.Level3Code.GDBlock4Objects2= [];
gdjs.Level3Code.GDBlock4Objects3= [];
gdjs.Level3Code.GDBlock3Objects1= [];
gdjs.Level3Code.GDBlock3Objects2= [];
gdjs.Level3Code.GDBlock3Objects3= [];
gdjs.Level3Code.GDBlock2Objects1= [];
gdjs.Level3Code.GDBlock2Objects2= [];
gdjs.Level3Code.GDBlock2Objects3= [];
gdjs.Level3Code.GDBlock1Objects1= [];
gdjs.Level3Code.GDBlock1Objects2= [];
gdjs.Level3Code.GDBlock1Objects3= [];
gdjs.Level3Code.GDBlockObjects1= [];
gdjs.Level3Code.GDBlockObjects2= [];
gdjs.Level3Code.GDBlockObjects3= [];
gdjs.Level3Code.GDDecorationObjects1= [];
gdjs.Level3Code.GDDecorationObjects2= [];
gdjs.Level3Code.GDDecorationObjects3= [];
gdjs.Level3Code.GDDialogObjects1= [];
gdjs.Level3Code.GDDialogObjects2= [];
gdjs.Level3Code.GDDialogObjects3= [];
gdjs.Level3Code.GDDialogText1Objects1= [];
gdjs.Level3Code.GDDialogText1Objects2= [];
gdjs.Level3Code.GDDialogText1Objects3= [];
gdjs.Level3Code.GDDialogtext5Objects1= [];
gdjs.Level3Code.GDDialogtext5Objects2= [];
gdjs.Level3Code.GDDialogtext5Objects3= [];
gdjs.Level3Code.GDDialogtext4Objects1= [];
gdjs.Level3Code.GDDialogtext4Objects2= [];
gdjs.Level3Code.GDDialogtext4Objects3= [];
gdjs.Level3Code.GDDialogtext3Objects1= [];
gdjs.Level3Code.GDDialogtext3Objects2= [];
gdjs.Level3Code.GDDialogtext3Objects3= [];
gdjs.Level3Code.GDDialogtext2Objects1= [];
gdjs.Level3Code.GDDialogtext2Objects2= [];
gdjs.Level3Code.GDDialogtext2Objects3= [];
gdjs.Level3Code.GDRestart2Objects1= [];
gdjs.Level3Code.GDRestart2Objects2= [];
gdjs.Level3Code.GDRestart2Objects3= [];
gdjs.Level3Code.GDRestartObjects1= [];
gdjs.Level3Code.GDRestartObjects2= [];
gdjs.Level3Code.GDRestartObjects3= [];
gdjs.Level3Code.GDMessageBoxObjects1= [];
gdjs.Level3Code.GDMessageBoxObjects2= [];
gdjs.Level3Code.GDMessageBoxObjects3= [];
gdjs.Level3Code.GDFailureObjects1= [];
gdjs.Level3Code.GDFailureObjects2= [];
gdjs.Level3Code.GDFailureObjects3= [];
gdjs.Level3Code.GDLevelCompletedObjects1= [];
gdjs.Level3Code.GDLevelCompletedObjects2= [];
gdjs.Level3Code.GDLevelCompletedObjects3= [];
gdjs.Level3Code.GDGoToMapObjects1= [];
gdjs.Level3Code.GDGoToMapObjects2= [];
gdjs.Level3Code.GDGoToMapObjects3= [];

gdjs.Level3Code.conditionTrue_0 = {val:false};
gdjs.Level3Code.condition0IsTrue_0 = {val:false};
gdjs.Level3Code.condition1IsTrue_0 = {val:false};
gdjs.Level3Code.condition2IsTrue_0 = {val:false};
gdjs.Level3Code.condition3IsTrue_0 = {val:false};
gdjs.Level3Code.condition4IsTrue_0 = {val:false};
gdjs.Level3Code.conditionTrue_1 = {val:false};
gdjs.Level3Code.condition0IsTrue_1 = {val:false};
gdjs.Level3Code.condition1IsTrue_1 = {val:false};
gdjs.Level3Code.condition2IsTrue_1 = {val:false};
gdjs.Level3Code.condition3IsTrue_1 = {val:false};
gdjs.Level3Code.condition4IsTrue_1 = {val:false};


gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDFadeInObjects1Objects = Hashtable.newFrom({"FadeIn": gdjs.Level3Code.GDFadeInObjects1});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDBlock1Objects1Objects = Hashtable.newFrom({"Block1": gdjs.Level3Code.GDBlock1Objects1});gdjs.Level3Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition1IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13289244);
}
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDBlock1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level3Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level3Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level3Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level3Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level3Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level3Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level3Code.GDBlock1Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDBlock1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level3Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level3Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Block1"), gdjs.Level3Code.GDBlock1Objects1);

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDBlock1Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level3Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDBlock2Objects1Objects = Hashtable.newFrom({"Block2": gdjs.Level3Code.GDBlock2Objects1});gdjs.Level3Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition1IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13291820);
}
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDBlock2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level3Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level3Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level3Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level3Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level3Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level3Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level3Code.GDBlock2Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDBlock2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level3Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDBlock3Objects1Objects = Hashtable.newFrom({"Block3": gdjs.Level3Code.GDBlock3Objects1});gdjs.Level3Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition1IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13294428);
}
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDBlock3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level3Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level3Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level3Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level3Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level3Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level3Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level3Code.GDBlock3Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDBlock3Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level3Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDBlock4Objects1Objects = Hashtable.newFrom({"Block4": gdjs.Level3Code.GDBlock4Objects1});gdjs.Level3Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition1IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13297020);
}
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDBlock4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level3Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level3Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level3Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level3Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level3Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level3Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level3Code.GDBlock4Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDBlock4Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level3Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDBlock5Objects1Objects = Hashtable.newFrom({"Block5": gdjs.Level3Code.GDBlock5Objects1});gdjs.Level3Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition1IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13299612);
}
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDBlock5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level3Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level3Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level3Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level3Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level3Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level3Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level3Code.GDBlock5Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDBlock5Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level3Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDBlock6Objects1Objects = Hashtable.newFrom({"Block6": gdjs.Level3Code.GDBlock6Objects1});gdjs.Level3Code.eventsList6 = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition1IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13302204);
}
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDBlock6Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level3Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level3Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level3Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level3Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level3Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level3Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level3Code.GDBlock6Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDBlock6Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level3Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDRestartObjects2Objects = Hashtable.newFrom({"Restart": gdjs.Level3Code.GDRestartObjects2});gdjs.Level3Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
gdjs.Level3Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), false);
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}

}


};gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDRestart2Objects1Objects = Hashtable.newFrom({"Restart2": gdjs.Level3Code.GDRestart2Objects1});gdjs.Level3Code.eventsList8 = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}

}


};gdjs.Level3Code.eventsList9 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Level3Code.GDRestartObjects2);

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDRestartObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level3Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart2"), gdjs.Level3Code.GDRestart2Objects1);

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDRestart2Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level3Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDDecorationObjects2Objects = Hashtable.newFrom({"Decoration": gdjs.Level3Code.GDDecorationObjects2});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDBlockObjects2Objects = Hashtable.newFrom({"Block": gdjs.Level3Code.GDBlockObjects2});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDGoToMapObjects1Objects = Hashtable.newFrom({"GoToMap": gdjs.Level3Code.GDGoToMapObjects1});gdjs.Level3Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Level3Code.GDBlockObjects2);
gdjs.copyArray(runtimeScene.getObjects("Decoration"), gdjs.Level3Code.GDDecorationObjects2);

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDDecorationObjects2Objects, "Physics2", gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDBlockObjects2Objects, false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDDecorationObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}{for(var i = 0, len = gdjs.Level3Code.GDDecorationObjects2.length ;i < len;++i) {
    gdjs.Level3Code.GDDecorationObjects2[i].activateBehavior("Physics2", false);
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition1IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13308748);
}
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "LevelCompleted");
}{gdjs.evtTools.sound.playSound(runtimeScene, "7_FXSound_Success.mp3", false, 100, 1);
}}

}


{



}


{



}


{



}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeStringInJSONFile("LevelStatus", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)), "Unlocked");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GoToMap"), gdjs.Level3Code.GDGoToMapObjects1);

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
gdjs.Level3Code.condition2IsTrue_0.val = false;
gdjs.Level3Code.condition3IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
gdjs.Level3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDGoToMapObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level3Code.condition1IsTrue_0.val ) {
{
gdjs.Level3Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}if ( gdjs.Level3Code.condition2IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition3IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14052572);
}
}}
}
}
if (gdjs.Level3Code.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}}

}


};gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDDecorationObjects1Objects = Hashtable.newFrom({"Decoration": gdjs.Level3Code.GDDecorationObjects1});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDGrassObjects1Objects = Hashtable.newFrom({"Grass": gdjs.Level3Code.GDGrassObjects1});gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDRestart2Objects1Objects = Hashtable.newFrom({"Restart2": gdjs.Level3Code.GDRestart2Objects1});gdjs.Level3Code.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Decoration"), gdjs.Level3Code.GDDecorationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.Level3Code.GDGrassObjects1);

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDDecorationObjects1Objects, "Physics2", gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDGrassObjects1Objects, false);
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition1IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13310692);
}
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDDecorationObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Level3Code.GDRestartObjects1);
gdjs.Level3Code.GDRestart2Objects1.length = 0;

{gdjs.evtTools.camera.showLayer(runtimeScene, "Failure");
}{gdjs.evtTools.sound.playSound(runtimeScene, "3_FXSound_Failed.mp3", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDRestart2Objects1Objects, 333, 303, "Failure");
}{for(var i = 0, len = gdjs.Level3Code.GDRestartObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDRestartObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level3Code.GDDecorationObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDDecorationObjects1[i].activateBehavior("Physics2", false);
}
}}

}


};gdjs.Level3Code.eventsList12 = function(runtimeScene) {

{



}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13285988);
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.Level3Code.GDFadeInObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDFadeInObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.Level3Code.GDFadeInObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDFadeInObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.Level3Code.GDFadeInObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDFadeInObjects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.Level3Code.GDFadeInObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDFadeInObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeIn", 0, "easeInQuad", 1500, true);
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "14_FXSound_Loop.mp3", true, 100, 1);
}}

}


{


gdjs.Level3Code.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Block2"), gdjs.Level3Code.GDBlock2Objects1);

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDBlock2Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level3Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block3"), gdjs.Level3Code.GDBlock3Objects1);

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDBlock3Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level3Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block4"), gdjs.Level3Code.GDBlock4Objects1);

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDBlock4Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level3Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block5"), gdjs.Level3Code.GDBlock5Objects1);

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDBlock5Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level3Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block6"), gdjs.Level3Code.GDBlock6Objects1);

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDBlock6Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level3Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.Level3Code.eventsList9(runtimeScene);
}


{


gdjs.Level3Code.eventsList10(runtimeScene);
}


{


gdjs.Level3Code.eventsList11(runtimeScene);
}


};

gdjs.Level3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level3Code.GDMoonObjects1.length = 0;
gdjs.Level3Code.GDMoonObjects2.length = 0;
gdjs.Level3Code.GDMoonObjects3.length = 0;
gdjs.Level3Code.GDBGObjects1.length = 0;
gdjs.Level3Code.GDBGObjects2.length = 0;
gdjs.Level3Code.GDBGObjects3.length = 0;
gdjs.Level3Code.GDFadeInObjects1.length = 0;
gdjs.Level3Code.GDFadeInObjects2.length = 0;
gdjs.Level3Code.GDFadeInObjects3.length = 0;
gdjs.Level3Code.GDGrassObjects1.length = 0;
gdjs.Level3Code.GDGrassObjects2.length = 0;
gdjs.Level3Code.GDGrassObjects3.length = 0;
gdjs.Level3Code.GDKarenStaticObjects1.length = 0;
gdjs.Level3Code.GDKarenStaticObjects2.length = 0;
gdjs.Level3Code.GDKarenStaticObjects3.length = 0;
gdjs.Level3Code.GDBlock6Objects1.length = 0;
gdjs.Level3Code.GDBlock6Objects2.length = 0;
gdjs.Level3Code.GDBlock6Objects3.length = 0;
gdjs.Level3Code.GDBlock5Objects1.length = 0;
gdjs.Level3Code.GDBlock5Objects2.length = 0;
gdjs.Level3Code.GDBlock5Objects3.length = 0;
gdjs.Level3Code.GDBlock4Objects1.length = 0;
gdjs.Level3Code.GDBlock4Objects2.length = 0;
gdjs.Level3Code.GDBlock4Objects3.length = 0;
gdjs.Level3Code.GDBlock3Objects1.length = 0;
gdjs.Level3Code.GDBlock3Objects2.length = 0;
gdjs.Level3Code.GDBlock3Objects3.length = 0;
gdjs.Level3Code.GDBlock2Objects1.length = 0;
gdjs.Level3Code.GDBlock2Objects2.length = 0;
gdjs.Level3Code.GDBlock2Objects3.length = 0;
gdjs.Level3Code.GDBlock1Objects1.length = 0;
gdjs.Level3Code.GDBlock1Objects2.length = 0;
gdjs.Level3Code.GDBlock1Objects3.length = 0;
gdjs.Level3Code.GDBlockObjects1.length = 0;
gdjs.Level3Code.GDBlockObjects2.length = 0;
gdjs.Level3Code.GDBlockObjects3.length = 0;
gdjs.Level3Code.GDDecorationObjects1.length = 0;
gdjs.Level3Code.GDDecorationObjects2.length = 0;
gdjs.Level3Code.GDDecorationObjects3.length = 0;
gdjs.Level3Code.GDDialogObjects1.length = 0;
gdjs.Level3Code.GDDialogObjects2.length = 0;
gdjs.Level3Code.GDDialogObjects3.length = 0;
gdjs.Level3Code.GDDialogText1Objects1.length = 0;
gdjs.Level3Code.GDDialogText1Objects2.length = 0;
gdjs.Level3Code.GDDialogText1Objects3.length = 0;
gdjs.Level3Code.GDDialogtext5Objects1.length = 0;
gdjs.Level3Code.GDDialogtext5Objects2.length = 0;
gdjs.Level3Code.GDDialogtext5Objects3.length = 0;
gdjs.Level3Code.GDDialogtext4Objects1.length = 0;
gdjs.Level3Code.GDDialogtext4Objects2.length = 0;
gdjs.Level3Code.GDDialogtext4Objects3.length = 0;
gdjs.Level3Code.GDDialogtext3Objects1.length = 0;
gdjs.Level3Code.GDDialogtext3Objects2.length = 0;
gdjs.Level3Code.GDDialogtext3Objects3.length = 0;
gdjs.Level3Code.GDDialogtext2Objects1.length = 0;
gdjs.Level3Code.GDDialogtext2Objects2.length = 0;
gdjs.Level3Code.GDDialogtext2Objects3.length = 0;
gdjs.Level3Code.GDRestart2Objects1.length = 0;
gdjs.Level3Code.GDRestart2Objects2.length = 0;
gdjs.Level3Code.GDRestart2Objects3.length = 0;
gdjs.Level3Code.GDRestartObjects1.length = 0;
gdjs.Level3Code.GDRestartObjects2.length = 0;
gdjs.Level3Code.GDRestartObjects3.length = 0;
gdjs.Level3Code.GDMessageBoxObjects1.length = 0;
gdjs.Level3Code.GDMessageBoxObjects2.length = 0;
gdjs.Level3Code.GDMessageBoxObjects3.length = 0;
gdjs.Level3Code.GDFailureObjects1.length = 0;
gdjs.Level3Code.GDFailureObjects2.length = 0;
gdjs.Level3Code.GDFailureObjects3.length = 0;
gdjs.Level3Code.GDLevelCompletedObjects1.length = 0;
gdjs.Level3Code.GDLevelCompletedObjects2.length = 0;
gdjs.Level3Code.GDLevelCompletedObjects3.length = 0;
gdjs.Level3Code.GDGoToMapObjects1.length = 0;
gdjs.Level3Code.GDGoToMapObjects2.length = 0;
gdjs.Level3Code.GDGoToMapObjects3.length = 0;

gdjs.Level3Code.eventsList12(runtimeScene);
return;

}

gdjs['Level3Code'] = gdjs.Level3Code;
