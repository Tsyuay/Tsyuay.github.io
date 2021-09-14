gdjs.GameCode = {};
gdjs.GameCode.forEachIndex2 = 0;

gdjs.GameCode.forEachObjects2 = [];

gdjs.GameCode.forEachTemporary2 = null;

gdjs.GameCode.forEachTotalCount2 = 0;

gdjs.GameCode.GDWoodObjects1= [];
gdjs.GameCode.GDWoodObjects2= [];
gdjs.GameCode.GDAlleyObjects1= [];
gdjs.GameCode.GDAlleyObjects2= [];
gdjs.GameCode.GDBallObjects1= [];
gdjs.GameCode.GDBallObjects2= [];
gdjs.GameCode.GDPincolliderObjects1= [];
gdjs.GameCode.GDPincolliderObjects2= [];
gdjs.GameCode.GDPinObjects1= [];
gdjs.GameCode.GDPinObjects2= [];
gdjs.GameCode.GDNewObjectObjects1= [];
gdjs.GameCode.GDNewObjectObjects2= [];
gdjs.GameCode.GDMenuBtnObjects1= [];
gdjs.GameCode.GDMenuBtnObjects2= [];
gdjs.GameCode.GDNewObject3Objects1= [];
gdjs.GameCode.GDNewObject3Objects2= [];
gdjs.GameCode.GDNewObject2Objects1= [];
gdjs.GameCode.GDNewObject2Objects2= [];
gdjs.GameCode.GDNewObject5Objects1= [];
gdjs.GameCode.GDNewObject5Objects2= [];
gdjs.GameCode.GDNewObject4Objects1= [];
gdjs.GameCode.GDNewObject4Objects2= [];
gdjs.GameCode.GDHOLDEESObjects1= [];
gdjs.GameCode.GDHOLDEESObjects2= [];
gdjs.GameCode.GDBallStaticObjects1= [];
gdjs.GameCode.GDBallStaticObjects2= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPincolliderObjects2Objects = Hashtable.newFrom({"Pincollider": gdjs.GameCode.GDPincolliderObjects2});gdjs.GameCode.eventsList0 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPincolliderObjects2Objects = Hashtable.newFrom({"Pincollider": gdjs.GameCode.GDPincolliderObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPinObjects2Objects = Hashtable.newFrom({"Pin": gdjs.GameCode.GDPinObjects2});gdjs.GameCode.eventsList1 = function(runtimeScene) {

};gdjs.GameCode.eventsList2 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPinObjects1Objects = Hashtable.newFrom({"Pin": gdjs.GameCode.GDPinObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPincolliderObjects1Objects = Hashtable.newFrom({"Pincollider": gdjs.GameCode.GDPincolliderObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAlleyObjects1Objects = Hashtable.newFrom({"Alley": gdjs.GameCode.GDAlleyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAlleyObjects1Objects = Hashtable.newFrom({"Alley": gdjs.GameCode.GDAlleyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.GameCode.GDNewObject4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.GameCode.GDNewObject5Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMenuBtnObjects1Objects = Hashtable.newFrom({"MenuBtn": gdjs.GameCode.GDMenuBtnObjects1});gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.GameCode.GDNewObject4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.GameCode.GDNewObject4Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.GameCode.GDNewObject5Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewObject5Objects1Objects = Hashtable.newFrom({"NewObject5": gdjs.GameCode.GDNewObject5Objects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects = Hashtable.newFrom({"Ball": gdjs.GameCode.GDBallObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPinObjects1Objects = Hashtable.newFrom({"Pin": gdjs.GameCode.GDPinObjects1});gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Pin"), gdjs.GameCode.GDPinObjects1);

for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDPinObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Pincollider"), gdjs.GameCode.GDPincolliderObjects2);
gdjs.GameCode.GDPinObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDPinObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDPinObjects2.push(gdjs.GameCode.forEachTemporary2);
if (true) {
{gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPincolliderObjects2Objects, (gdjs.GameCode.GDPinObjects2.length !== 0 ? gdjs.GameCode.GDPinObjects2[0] : null));
}{for(var i = 0, len = gdjs.GameCode.GDPincolliderObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPincolliderObjects2[i].setPosition((( gdjs.GameCode.GDPinObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPinObjects2[0].getPointX("")),(( gdjs.GameCode.GDPinObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPinObjects2[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.GameCode.GDPincolliderObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPincolliderObjects2[i].setAngle((( gdjs.GameCode.GDPinObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPinObjects2[0].getAngle()));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pincollider"), gdjs.GameCode.GDPincolliderObjects1);

for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDPincolliderObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Pin"), gdjs.GameCode.GDPinObjects2);
gdjs.GameCode.GDPincolliderObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDPincolliderObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDPincolliderObjects2.push(gdjs.GameCode.forEachTemporary2);
gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPinObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPinObjects2[i].getVariableBoolean(gdjs.GameCode.GDPinObjects2[i].getVariables().get("Hit"), false) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPinObjects2[k] = gdjs.GameCode.GDPinObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPinObjects2.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPincolliderObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPinObjects2Objects, false, runtimeScene, false);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDPinObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPinObjects2[i].setVariableBoolean(gdjs.GameCode.GDPinObjects2[i].getVariables().get("Hit"), true);
}
}{for(var i = 0, len = gdjs.GameCode.GDPinObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPinObjects2[i].addPolarForce((( gdjs.GameCode.GDPincolliderObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPincolliderObjects2[0].getAngleToObject(gdjs.GameCode.GDPinObjects2[i])), Math.cos((( gdjs.GameCode.GDPincolliderObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPincolliderObjects2[0].getAngleToObject(gdjs.GameCode.GDPinObjects2[i]))) * (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPincolliderObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPincolliderObjects2[0].getVariables()).getFromIndex(2))), 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDPinObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPinObjects2[i].returnVariable(gdjs.GameCode.GDPinObjects2[i].getVariables().get("RotateSpeed")).setNumber(Math.cos((( gdjs.GameCode.GDPincolliderObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPincolliderObjects2[0].getAngleToObject(gdjs.GameCode.GDPinObjects2[i]))) * (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPincolliderObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPincolliderObjects2[0].getVariables()).getFromIndex(2))));
}
}{runtimeScene.getVariables().get("Score").add(1);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pin"), gdjs.GameCode.GDPinObjects1);

for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDPinObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDPinObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDPinObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDPinObjects2.push(gdjs.GameCode.forEachTemporary2);
gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPinObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPinObjects2[i].getVariableBoolean(gdjs.GameCode.GDPinObjects2[i].getVariables().get("Hit"), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPinObjects2[k] = gdjs.GameCode.GDPinObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPinObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDPinObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPinObjects2[i].rotate((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPinObjects2[i].getVariables().get("RotateSpeed"))), runtimeScene);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pin"), gdjs.GameCode.GDPinObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPinObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPinObjects1[i].getVariableBoolean(gdjs.GameCode.GDPinObjects1[i].getVariables().get("Hit"), false) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPinObjects1[k] = gdjs.GameCode.GDPinObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPinObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPinObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBallObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.GameCode.GDNewObject4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.GameCode.GDNewObject5Objects1);
/* Reuse gdjs.GameCode.GDPinObjects1 */
gdjs.GameCode.GDPincolliderObjects1.length = 0;

{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(4), false);
}{for(var i = 0, len = gdjs.GameCode.GDPinObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPinObjects1[i].setVariableBoolean(gdjs.GameCode.GDPinObjects1[i].getVariables().get("Hit"), true);
}
}{for(var i = 0, len = gdjs.GameCode.GDPinObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPinObjects1[i].addPolarForce((( gdjs.GameCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects1[0].getAngleToObject(gdjs.GameCode.GDPinObjects1[i])), Math.cos((( gdjs.GameCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects1[0].getAngleToObject(gdjs.GameCode.GDPinObjects1[i]))) * (( gdjs.GameCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects1[0].getAverageForce().getLength()), 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDPinObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPinObjects1[i].returnVariable(gdjs.GameCode.GDPinObjects1[i].getVariables().get("RotateSpeed")).setNumber(Math.cos((( gdjs.GameCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects1[0].getAngleToObject(gdjs.GameCode.GDPinObjects1[i]))) * (( gdjs.GameCode.GDBallObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBallObjects1[0].getAverageForce().getLength()));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPincolliderObjects1Objects, (( gdjs.GameCode.GDPinObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPinObjects1[0].getPointX("")), (( gdjs.GameCode.GDPinObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPinObjects1[0].getPointY("")), "");
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.GameCode.GDPincolliderObjects1.length !== 0 ? gdjs.GameCode.GDPincolliderObjects1[0] : null), (gdjs.GameCode.GDPinObjects1.length !== 0 ? gdjs.GameCode.GDPinObjects1[0] : null));
}{for(var i = 0, len = gdjs.GameCode.GDPincolliderObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPincolliderObjects1[i].returnVariable(gdjs.GameCode.GDPincolliderObjects1[i].getVariables().getFromIndex(2)).setNumber((( gdjs.GameCode.GDPinObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPinObjects1[0].getAverageForce().getLength()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObject4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObject5Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 20, "RestartGame");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(4), false);
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Alley"), gdjs.GameCode.GDAlleyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(4), true);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAlleyObjects1Objects, true, runtimeScene, true);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBallObjects1 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(4), false);
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].setAnimationName("Static");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RestartGame");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(4), true);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Alley"), gdjs.GameCode.GDAlleyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].addForce(((gdjs.GameCode.GDBallObjects1[i].getCenterXInScene()) - (( gdjs.GameCode.GDAlleyObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDAlleyObjects1[0].getCenterXInScene())) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 0, 1);
}
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDBallObjects1.length !== 0 ? gdjs.GameCode.GDBallObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Alley"), gdjs.GameCode.GDAlleyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDAlleyObjects1Objects, false, runtimeScene, true);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8035228);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBallObjects1 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(4), true);
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].setAnimationName("Rolling");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.08, "BallThrow");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8036524);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].addPolarForce(gdjs.evtTools.common.angleBetweenPositions(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0)), gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0)) * 2, 1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().getFromIndex(3), true);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
gdjs.GameCode.GDNewObject4Objects1.length = 0;

gdjs.GameCode.GDNewObject5Objects1.length = 0;

{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(3), false);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0));
}{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "BallThrow");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RestartGame");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(2), true);
}{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewObject4Objects1Objects, -(2310), -(520), "");
}{for(var i = 0, len = gdjs.GameCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObject4Objects1[i].setWidth(2910);
}
}{for(var i = 0, len = gdjs.GameCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObject4Objects1[i].setHeight(996);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewObject5Objects1Objects, 928, -(516), "");
}{for(var i = 0, len = gdjs.GameCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObject5Objects1[i].setWidth(2910);
}
}{for(var i = 0, len = gdjs.GameCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObject5Objects1[i].setHeight(996);
}
}{for(var i = 0, len = gdjs.GameCode.GDNewObject5Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObject5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDNewObject4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObject4Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBallObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBallObjects1[i].getBehavior("Draggable").isDragged() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBallObjects1[k] = gdjs.GameCode.GDBallObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBallObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().getFromIndex(3), true);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.GameCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.GameCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewObjectObjects1[i].setString("Round :" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "RockNRoll.wav", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MenuBtn"), gdjs.GameCode.GDMenuBtnObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMenuBtnObjects1Objects, runtimeScene, true, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDMenuBtnObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMenuBtnObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMenuBtnObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDMenuBtnObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMenuBtnObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.GameCode.GDNewObject4Objects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewObject4Objects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBallObjects1 */
/* Reuse gdjs.GameCode.GDNewObject4Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewObject4Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject5"), gdjs.GameCode.GDNewObject5Objects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewObject5Objects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBallObjects1 */
/* Reuse gdjs.GameCode.GDNewObject5Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDBallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBallObjects1[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewObject5Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 11;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameCompleted", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ball"), gdjs.GameCode.GDBallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pin"), gdjs.GameCode.GDPinObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBallObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPinObjects1Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8455596);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "sound-effect-bowling-ball.mp3", false, 100, 1);
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDWoodObjects1.length = 0;
gdjs.GameCode.GDWoodObjects2.length = 0;
gdjs.GameCode.GDAlleyObjects1.length = 0;
gdjs.GameCode.GDAlleyObjects2.length = 0;
gdjs.GameCode.GDBallObjects1.length = 0;
gdjs.GameCode.GDBallObjects2.length = 0;
gdjs.GameCode.GDPincolliderObjects1.length = 0;
gdjs.GameCode.GDPincolliderObjects2.length = 0;
gdjs.GameCode.GDPinObjects1.length = 0;
gdjs.GameCode.GDPinObjects2.length = 0;
gdjs.GameCode.GDNewObjectObjects1.length = 0;
gdjs.GameCode.GDNewObjectObjects2.length = 0;
gdjs.GameCode.GDMenuBtnObjects1.length = 0;
gdjs.GameCode.GDMenuBtnObjects2.length = 0;
gdjs.GameCode.GDNewObject3Objects1.length = 0;
gdjs.GameCode.GDNewObject3Objects2.length = 0;
gdjs.GameCode.GDNewObject2Objects1.length = 0;
gdjs.GameCode.GDNewObject2Objects2.length = 0;
gdjs.GameCode.GDNewObject5Objects1.length = 0;
gdjs.GameCode.GDNewObject5Objects2.length = 0;
gdjs.GameCode.GDNewObject4Objects1.length = 0;
gdjs.GameCode.GDNewObject4Objects2.length = 0;
gdjs.GameCode.GDHOLDEESObjects1.length = 0;
gdjs.GameCode.GDHOLDEESObjects2.length = 0;
gdjs.GameCode.GDBallStaticObjects1.length = 0;
gdjs.GameCode.GDBallStaticObjects2.length = 0;

gdjs.GameCode.eventsList4(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
