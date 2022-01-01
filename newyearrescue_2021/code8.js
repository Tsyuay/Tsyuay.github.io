gdjs.Level5Code = {};
gdjs.Level5Code.GDMoonObjects1= [];
gdjs.Level5Code.GDMoonObjects2= [];
gdjs.Level5Code.GDMoonObjects3= [];
gdjs.Level5Code.GDBGObjects1= [];
gdjs.Level5Code.GDBGObjects2= [];
gdjs.Level5Code.GDBGObjects3= [];
gdjs.Level5Code.GDFadeInObjects1= [];
gdjs.Level5Code.GDFadeInObjects2= [];
gdjs.Level5Code.GDFadeInObjects3= [];
gdjs.Level5Code.GDGrassObjects1= [];
gdjs.Level5Code.GDGrassObjects2= [];
gdjs.Level5Code.GDGrassObjects3= [];
gdjs.Level5Code.GDKarenStaticObjects1= [];
gdjs.Level5Code.GDKarenStaticObjects2= [];
gdjs.Level5Code.GDKarenStaticObjects3= [];
gdjs.Level5Code.GDBlock8Objects1= [];
gdjs.Level5Code.GDBlock8Objects2= [];
gdjs.Level5Code.GDBlock8Objects3= [];
gdjs.Level5Code.GDBlock7Objects1= [];
gdjs.Level5Code.GDBlock7Objects2= [];
gdjs.Level5Code.GDBlock7Objects3= [];
gdjs.Level5Code.GDBlock6Objects1= [];
gdjs.Level5Code.GDBlock6Objects2= [];
gdjs.Level5Code.GDBlock6Objects3= [];
gdjs.Level5Code.GDBlock5Objects1= [];
gdjs.Level5Code.GDBlock5Objects2= [];
gdjs.Level5Code.GDBlock5Objects3= [];
gdjs.Level5Code.GDBlock4Objects1= [];
gdjs.Level5Code.GDBlock4Objects2= [];
gdjs.Level5Code.GDBlock4Objects3= [];
gdjs.Level5Code.GDBlock3Objects1= [];
gdjs.Level5Code.GDBlock3Objects2= [];
gdjs.Level5Code.GDBlock3Objects3= [];
gdjs.Level5Code.GDBlock2Objects1= [];
gdjs.Level5Code.GDBlock2Objects2= [];
gdjs.Level5Code.GDBlock2Objects3= [];
gdjs.Level5Code.GDBlock1Objects1= [];
gdjs.Level5Code.GDBlock1Objects2= [];
gdjs.Level5Code.GDBlock1Objects3= [];
gdjs.Level5Code.GDBlockObjects1= [];
gdjs.Level5Code.GDBlockObjects2= [];
gdjs.Level5Code.GDBlockObjects3= [];
gdjs.Level5Code.GDDecorationObjects1= [];
gdjs.Level5Code.GDDecorationObjects2= [];
gdjs.Level5Code.GDDecorationObjects3= [];
gdjs.Level5Code.GDDialogObjects1= [];
gdjs.Level5Code.GDDialogObjects2= [];
gdjs.Level5Code.GDDialogObjects3= [];
gdjs.Level5Code.GDDialogText1Objects1= [];
gdjs.Level5Code.GDDialogText1Objects2= [];
gdjs.Level5Code.GDDialogText1Objects3= [];
gdjs.Level5Code.GDDialogtext5Objects1= [];
gdjs.Level5Code.GDDialogtext5Objects2= [];
gdjs.Level5Code.GDDialogtext5Objects3= [];
gdjs.Level5Code.GDDialogtext4Objects1= [];
gdjs.Level5Code.GDDialogtext4Objects2= [];
gdjs.Level5Code.GDDialogtext4Objects3= [];
gdjs.Level5Code.GDDialogtext3Objects1= [];
gdjs.Level5Code.GDDialogtext3Objects2= [];
gdjs.Level5Code.GDDialogtext3Objects3= [];
gdjs.Level5Code.GDDialogtext2Objects1= [];
gdjs.Level5Code.GDDialogtext2Objects2= [];
gdjs.Level5Code.GDDialogtext2Objects3= [];
gdjs.Level5Code.GDRestart2Objects1= [];
gdjs.Level5Code.GDRestart2Objects2= [];
gdjs.Level5Code.GDRestart2Objects3= [];
gdjs.Level5Code.GDRestartObjects1= [];
gdjs.Level5Code.GDRestartObjects2= [];
gdjs.Level5Code.GDRestartObjects3= [];
gdjs.Level5Code.GDMessageBoxObjects1= [];
gdjs.Level5Code.GDMessageBoxObjects2= [];
gdjs.Level5Code.GDMessageBoxObjects3= [];
gdjs.Level5Code.GDFailureObjects1= [];
gdjs.Level5Code.GDFailureObjects2= [];
gdjs.Level5Code.GDFailureObjects3= [];
gdjs.Level5Code.GDLevelCompletedObjects1= [];
gdjs.Level5Code.GDLevelCompletedObjects2= [];
gdjs.Level5Code.GDLevelCompletedObjects3= [];
gdjs.Level5Code.GDGoToMapObjects1= [];
gdjs.Level5Code.GDGoToMapObjects2= [];
gdjs.Level5Code.GDGoToMapObjects3= [];

gdjs.Level5Code.conditionTrue_0 = {val:false};
gdjs.Level5Code.condition0IsTrue_0 = {val:false};
gdjs.Level5Code.condition1IsTrue_0 = {val:false};
gdjs.Level5Code.condition2IsTrue_0 = {val:false};
gdjs.Level5Code.condition3IsTrue_0 = {val:false};
gdjs.Level5Code.condition4IsTrue_0 = {val:false};
gdjs.Level5Code.conditionTrue_1 = {val:false};
gdjs.Level5Code.condition0IsTrue_1 = {val:false};
gdjs.Level5Code.condition1IsTrue_1 = {val:false};
gdjs.Level5Code.condition2IsTrue_1 = {val:false};
gdjs.Level5Code.condition3IsTrue_1 = {val:false};
gdjs.Level5Code.condition4IsTrue_1 = {val:false};


gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDFadeInObjects1Objects = Hashtable.newFrom({"FadeIn": gdjs.Level5Code.GDFadeInObjects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock1Objects1Objects = Hashtable.newFrom({"Block1": gdjs.Level5Code.GDBlock1Objects1});gdjs.Level5Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition1IsTrue_0;
gdjs.Level5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13448332);
}
}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDBlock1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level5Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level5Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level5Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level5Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level5Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level5Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level5Code.GDBlock1Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDBlock1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level5Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level5Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Block1"), gdjs.Level5Code.GDBlock1Objects1);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock1Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level5Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock2Objects1Objects = Hashtable.newFrom({"Block2": gdjs.Level5Code.GDBlock2Objects1});gdjs.Level5Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition1IsTrue_0;
gdjs.Level5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13450908);
}
}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDBlock2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level5Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level5Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level5Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level5Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level5Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level5Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level5Code.GDBlock2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDBlock2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level5Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock3Objects1Objects = Hashtable.newFrom({"Block3": gdjs.Level5Code.GDBlock3Objects1});gdjs.Level5Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition1IsTrue_0;
gdjs.Level5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13453516);
}
}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDBlock3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level5Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level5Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level5Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level5Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level5Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level5Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level5Code.GDBlock3Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDBlock3Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level5Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock4Objects1Objects = Hashtable.newFrom({"Block4": gdjs.Level5Code.GDBlock4Objects1});gdjs.Level5Code.eventsList4 = function(runtimeScene) {

{


gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition1IsTrue_0;
gdjs.Level5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13456108);
}
}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDBlock4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level5Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level5Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level5Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level5Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level5Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level5Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level5Code.GDBlock4Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDBlock4Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level5Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock5Objects1Objects = Hashtable.newFrom({"Block5": gdjs.Level5Code.GDBlock5Objects1});gdjs.Level5Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition1IsTrue_0;
gdjs.Level5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13458700);
}
}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDBlock5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level5Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level5Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level5Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level5Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level5Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level5Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level5Code.GDBlock5Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDBlock5Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level5Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock6Objects1Objects = Hashtable.newFrom({"Block6": gdjs.Level5Code.GDBlock6Objects1});gdjs.Level5Code.eventsList6 = function(runtimeScene) {

{


gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition1IsTrue_0;
gdjs.Level5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13461292);
}
}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDBlock6Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level5Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level5Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level5Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level5Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level5Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level5Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level5Code.GDBlock6Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDBlock6Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level5Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock7Objects1Objects = Hashtable.newFrom({"Block7": gdjs.Level5Code.GDBlock7Objects1});gdjs.Level5Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition1IsTrue_0;
gdjs.Level5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13463948);
}
}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDBlock7Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level5Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level5Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level5Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level5Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level5Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level5Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level5Code.GDBlock7Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDBlock7Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level5Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock8Objects1Objects = Hashtable.newFrom({"Block8": gdjs.Level5Code.GDBlock8Objects1});gdjs.Level5Code.eventsList8 = function(runtimeScene) {

{


gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition1IsTrue_0;
gdjs.Level5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13466540);
}
}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDBlock8Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.Level5Code.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText1"), gdjs.Level5Code.GDDialogText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext2"), gdjs.Level5Code.GDDialogtext2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext3"), gdjs.Level5Code.GDDialogtext3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext4"), gdjs.Level5Code.GDDialogtext4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogtext5"), gdjs.Level5Code.GDDialogtext5Objects1);
{for(var i = 0, len = gdjs.Level5Code.GDBlock8Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDBlock8Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "2_FXSound_Dissolve.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Level5Code.GDDialogObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogText1Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext2Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext3Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext4Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level5Code.GDDialogtext5Objects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDialogtext5Objects1[i].hide();
}
}}

}


};gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDRestartObjects2Objects = Hashtable.newFrom({"Restart": gdjs.Level5Code.GDRestartObjects2});gdjs.Level5Code.eventsList9 = function(runtimeScene) {

{


gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
gdjs.Level5Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), false);
}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level5", false);
}}

}


};gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDRestart2Objects1Objects = Hashtable.newFrom({"Restart2": gdjs.Level5Code.GDRestart2Objects1});gdjs.Level5Code.eventsList10 = function(runtimeScene) {

{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level5", false);
}}

}


};gdjs.Level5Code.eventsList11 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Level5Code.GDRestartObjects2);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDRestartObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level5Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart2"), gdjs.Level5Code.GDRestart2Objects1);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDRestart2Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level5Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDDecorationObjects2Objects = Hashtable.newFrom({"Decoration": gdjs.Level5Code.GDDecorationObjects2});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlockObjects2Objects = Hashtable.newFrom({"Block": gdjs.Level5Code.GDBlockObjects2});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDGoToMapObjects1Objects = Hashtable.newFrom({"GoToMap": gdjs.Level5Code.GDGoToMapObjects1});gdjs.Level5Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Block"), gdjs.Level5Code.GDBlockObjects2);
gdjs.copyArray(runtimeScene.getObjects("Decoration"), gdjs.Level5Code.GDDecorationObjects2);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDDecorationObjects2Objects, "Physics2", gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlockObjects2Objects, false);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDDecorationObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}{for(var i = 0, len = gdjs.Level5Code.GDDecorationObjects2.length ;i < len;++i) {
    gdjs.Level5Code.GDDecorationObjects2[i].activateBehavior("Physics2", false);
}
}}

}


{


gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition1IsTrue_0;
gdjs.Level5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13473020);
}
}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
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


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeStringInJSONFile("LevelStatus", gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().getFromIndex(1)), "Unlocked");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GoToMap"), gdjs.Level5Code.GDGoToMapObjects1);

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
gdjs.Level5Code.condition2IsTrue_0.val = false;
gdjs.Level5Code.condition3IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
gdjs.Level5Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDGoToMapObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level5Code.condition1IsTrue_0.val ) {
{
gdjs.Level5Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(0), true);
}if ( gdjs.Level5Code.condition2IsTrue_0.val ) {
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition3IsTrue_0;
gdjs.Level5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14052572);
}
}}
}
}
if (gdjs.Level5Code.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}}

}


};gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDDecorationObjects1Objects = Hashtable.newFrom({"Decoration": gdjs.Level5Code.GDDecorationObjects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDGrassObjects1Objects = Hashtable.newFrom({"Grass": gdjs.Level5Code.GDGrassObjects1});gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDRestart2Objects1Objects = Hashtable.newFrom({"Restart2": gdjs.Level5Code.GDRestart2Objects1});gdjs.Level5Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Decoration"), gdjs.Level5Code.GDDecorationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.Level5Code.GDGrassObjects1);

gdjs.Level5Code.condition0IsTrue_0.val = false;
gdjs.Level5Code.condition1IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.physics2.objectsCollide(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDDecorationObjects1Objects, "Physics2", gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDGrassObjects1Objects, false);
}if ( gdjs.Level5Code.condition0IsTrue_0.val ) {
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition1IsTrue_0;
gdjs.Level5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13474964);
}
}}
if (gdjs.Level5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level5Code.GDDecorationObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Restart"), gdjs.Level5Code.GDRestartObjects1);
gdjs.Level5Code.GDRestart2Objects1.length = 0;

{gdjs.evtTools.camera.showLayer(runtimeScene, "Failure");
}{gdjs.evtTools.sound.playSound(runtimeScene, "3_FXSound_Failed.mp3", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDRestart2Objects1Objects, 333, 303, "Failure");
}{for(var i = 0, len = gdjs.Level5Code.GDRestartObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDRestartObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level5Code.GDDecorationObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDDecorationObjects1[i].activateBehavior("Physics2", false);
}
}}

}


};gdjs.Level5Code.eventsList14 = function(runtimeScene) {

{



}


{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
{gdjs.Level5Code.conditionTrue_1 = gdjs.Level5Code.condition0IsTrue_0;
gdjs.Level5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(13445076);
}
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
gdjs.Level5Code.GDFadeInObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDFadeInObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.Level5Code.GDFadeInObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDFadeInObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.Level5Code.GDFadeInObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDFadeInObjects1[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.Level5Code.GDFadeInObjects1.length ;i < len;++i) {
    gdjs.Level5Code.GDFadeInObjects1[i].getBehavior("Tween").addObjectOpacityTween("FadeIn", 0, "easeInQuad", 1500, true);
}
}}

}


{


gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "14_FXSound_Loop.mp3", true, 100, 1);
}}

}


{


gdjs.Level5Code.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Block2"), gdjs.Level5Code.GDBlock2Objects1);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock2Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level5Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block3"), gdjs.Level5Code.GDBlock3Objects1);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock3Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level5Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block4"), gdjs.Level5Code.GDBlock4Objects1);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock4Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level5Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block5"), gdjs.Level5Code.GDBlock5Objects1);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock5Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level5Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block6"), gdjs.Level5Code.GDBlock6Objects1);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock6Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level5Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block7"), gdjs.Level5Code.GDBlock7Objects1);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock7Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level5Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Block8"), gdjs.Level5Code.GDBlock8Objects1);

gdjs.Level5Code.condition0IsTrue_0.val = false;
{
gdjs.Level5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level5Code.mapOfGDgdjs_46Level5Code_46GDBlock8Objects1Objects, runtimeScene, true, false);
}if (gdjs.Level5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level5Code.eventsList8(runtimeScene);} //End of subevents
}

}


{


gdjs.Level5Code.eventsList11(runtimeScene);
}


{


gdjs.Level5Code.eventsList12(runtimeScene);
}


{


gdjs.Level5Code.eventsList13(runtimeScene);
}


};

gdjs.Level5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level5Code.GDMoonObjects1.length = 0;
gdjs.Level5Code.GDMoonObjects2.length = 0;
gdjs.Level5Code.GDMoonObjects3.length = 0;
gdjs.Level5Code.GDBGObjects1.length = 0;
gdjs.Level5Code.GDBGObjects2.length = 0;
gdjs.Level5Code.GDBGObjects3.length = 0;
gdjs.Level5Code.GDFadeInObjects1.length = 0;
gdjs.Level5Code.GDFadeInObjects2.length = 0;
gdjs.Level5Code.GDFadeInObjects3.length = 0;
gdjs.Level5Code.GDGrassObjects1.length = 0;
gdjs.Level5Code.GDGrassObjects2.length = 0;
gdjs.Level5Code.GDGrassObjects3.length = 0;
gdjs.Level5Code.GDKarenStaticObjects1.length = 0;
gdjs.Level5Code.GDKarenStaticObjects2.length = 0;
gdjs.Level5Code.GDKarenStaticObjects3.length = 0;
gdjs.Level5Code.GDBlock8Objects1.length = 0;
gdjs.Level5Code.GDBlock8Objects2.length = 0;
gdjs.Level5Code.GDBlock8Objects3.length = 0;
gdjs.Level5Code.GDBlock7Objects1.length = 0;
gdjs.Level5Code.GDBlock7Objects2.length = 0;
gdjs.Level5Code.GDBlock7Objects3.length = 0;
gdjs.Level5Code.GDBlock6Objects1.length = 0;
gdjs.Level5Code.GDBlock6Objects2.length = 0;
gdjs.Level5Code.GDBlock6Objects3.length = 0;
gdjs.Level5Code.GDBlock5Objects1.length = 0;
gdjs.Level5Code.GDBlock5Objects2.length = 0;
gdjs.Level5Code.GDBlock5Objects3.length = 0;
gdjs.Level5Code.GDBlock4Objects1.length = 0;
gdjs.Level5Code.GDBlock4Objects2.length = 0;
gdjs.Level5Code.GDBlock4Objects3.length = 0;
gdjs.Level5Code.GDBlock3Objects1.length = 0;
gdjs.Level5Code.GDBlock3Objects2.length = 0;
gdjs.Level5Code.GDBlock3Objects3.length = 0;
gdjs.Level5Code.GDBlock2Objects1.length = 0;
gdjs.Level5Code.GDBlock2Objects2.length = 0;
gdjs.Level5Code.GDBlock2Objects3.length = 0;
gdjs.Level5Code.GDBlock1Objects1.length = 0;
gdjs.Level5Code.GDBlock1Objects2.length = 0;
gdjs.Level5Code.GDBlock1Objects3.length = 0;
gdjs.Level5Code.GDBlockObjects1.length = 0;
gdjs.Level5Code.GDBlockObjects2.length = 0;
gdjs.Level5Code.GDBlockObjects3.length = 0;
gdjs.Level5Code.GDDecorationObjects1.length = 0;
gdjs.Level5Code.GDDecorationObjects2.length = 0;
gdjs.Level5Code.GDDecorationObjects3.length = 0;
gdjs.Level5Code.GDDialogObjects1.length = 0;
gdjs.Level5Code.GDDialogObjects2.length = 0;
gdjs.Level5Code.GDDialogObjects3.length = 0;
gdjs.Level5Code.GDDialogText1Objects1.length = 0;
gdjs.Level5Code.GDDialogText1Objects2.length = 0;
gdjs.Level5Code.GDDialogText1Objects3.length = 0;
gdjs.Level5Code.GDDialogtext5Objects1.length = 0;
gdjs.Level5Code.GDDialogtext5Objects2.length = 0;
gdjs.Level5Code.GDDialogtext5Objects3.length = 0;
gdjs.Level5Code.GDDialogtext4Objects1.length = 0;
gdjs.Level5Code.GDDialogtext4Objects2.length = 0;
gdjs.Level5Code.GDDialogtext4Objects3.length = 0;
gdjs.Level5Code.GDDialogtext3Objects1.length = 0;
gdjs.Level5Code.GDDialogtext3Objects2.length = 0;
gdjs.Level5Code.GDDialogtext3Objects3.length = 0;
gdjs.Level5Code.GDDialogtext2Objects1.length = 0;
gdjs.Level5Code.GDDialogtext2Objects2.length = 0;
gdjs.Level5Code.GDDialogtext2Objects3.length = 0;
gdjs.Level5Code.GDRestart2Objects1.length = 0;
gdjs.Level5Code.GDRestart2Objects2.length = 0;
gdjs.Level5Code.GDRestart2Objects3.length = 0;
gdjs.Level5Code.GDRestartObjects1.length = 0;
gdjs.Level5Code.GDRestartObjects2.length = 0;
gdjs.Level5Code.GDRestartObjects3.length = 0;
gdjs.Level5Code.GDMessageBoxObjects1.length = 0;
gdjs.Level5Code.GDMessageBoxObjects2.length = 0;
gdjs.Level5Code.GDMessageBoxObjects3.length = 0;
gdjs.Level5Code.GDFailureObjects1.length = 0;
gdjs.Level5Code.GDFailureObjects2.length = 0;
gdjs.Level5Code.GDFailureObjects3.length = 0;
gdjs.Level5Code.GDLevelCompletedObjects1.length = 0;
gdjs.Level5Code.GDLevelCompletedObjects2.length = 0;
gdjs.Level5Code.GDLevelCompletedObjects3.length = 0;
gdjs.Level5Code.GDGoToMapObjects1.length = 0;
gdjs.Level5Code.GDGoToMapObjects2.length = 0;
gdjs.Level5Code.GDGoToMapObjects3.length = 0;

gdjs.Level5Code.eventsList14(runtimeScene);
return;

}

gdjs['Level5Code'] = gdjs.Level5Code;
